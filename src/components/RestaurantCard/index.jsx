import React, { useState } from "react";
import { Restaurant, RestaurantInfo, Title,Address, RestaurantPhoto } from "./styles";
import Rating from "../Rating/index";
import Skeleton  from "../Skeleton/index";
const RestaurantCard = ({restaurant, onClick}) => {

  const [imageLoaded , setImageLoaded] = useState(false)
  return (
     <Restaurant onClick={onClick}>
         <RestaurantInfo>
              <Title>
                    {restaurant.name}
              </Title>
              <Rating rating={restaurant.rating}>
              </Rating>
              <Address>
                {restaurant.vicinity || restaurant.formatted_address}
              </Address>
         </RestaurantInfo>
         <RestaurantPhoto
         imageLoaded ={imageLoaded }
         src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurant.icon}
         alt="foto do restaurante"
          onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded  &&
            <Skeleton  width="10vh" heigth="10vh" />
          }
     </Restaurant>
  )
}

export default RestaurantCard;
