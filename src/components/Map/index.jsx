import React, { useState, useEffect,useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import { setRestaurants, setRestaurant } from '../../redux/modules/restaurants';



export const MapContainer = (props) =>{

   const dispatch = useDispatch();
   const  { restaurants} = useSelector((state) => state.restaurants)
   const {google, query,  placeId} = props;
   const [map, setMap] = useState(null)



   const getRestaurantById = useCallback(
    (placeId) => {
      const service = new google.maps.places.PlacesService(map);
      dispatch(setRestaurant(null));

      const request = {
        placeId,
        fields: ['name', 'opening_hours', 'formatted_address', 'formatted_phone_number'],
      };

      service.getDetails(request, (place, status) => {

        if (status === google.maps.places.PlacesServiceStatus.OK) {
          dispatch(setRestaurant(place));
        }
      });
    },
    [google, map, dispatch]
  );


  const searchByQuery = useCallback(
    (map, query) => {
      const service = new google.maps.places.PlacesService(map);
      dispatch(setRestaurants([]));

      const request = {
        location: map.center,
        radius: '200',
        type: ['restaurant'],
        query,
      };

      service.textSearch(request, (results, status) =>{
        if(status === google.maps.places.PlacesServiceStatus.OK){
          dispatch(setRestaurants(results));
        };
      } )
    },
    [dispatch, google]
  );

  useEffect (() => {
    if(query){
      searchByQuery(map, query);
    }
  }, [searchByQuery, query, map]);

  useEffect (() => {
    if(placeId){
      getRestaurantById(placeId)
    }
  }, [placeId, getRestaurantById])

  const searchNearby = (map, center) => {
    const service = new google.maps.places.PlacesService(map);
    const request = {
      location: center,
      radius: '20000',
      type: ['restaurant'],
    };
;    service.nearbySearch(request, (results, status) => {

      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(results));
      }
    });
  };
  function onMapReady(_, map) {
    setMap(map);
    searchNearby(map, map.center);
  }
  
  return (
        <Map 
                  google={window.google} 
                  containsLocation
                  isLocationOnEdge
                  centerAroundCurrentLocation
                  onReady={onMapReady}
                  onCenterChanged={onMapReady}
                 zoomControl
                 fullscreenControl
                  scrollwheel
                  style={{ width: '100%', height: '100%', position: 'relative'}}
                  {...props}
          >
        
            {restaurants.map( (restaurant) => (
                 <Marker
                  key={restaurant.place_id}
                  name={restaurant.name}
                  position ={{
                    lat:restaurant.geometry.location.lat(),
                    lng: restaurant.geometry.location.lng()
                  }}
                 />
            ))}
            <Marker
          onClick={onMapReady}
          draggable={true}
          name={"Current location"}
        />
        
          </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  languege: 'pt-BR',
})(MapContainer);
