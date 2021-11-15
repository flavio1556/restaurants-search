import React from "react";
import { Restaurant, RestaurantInfo, Title,Address, RestaurantPhoto } from "./styles";
import Rating from "../Rating/index";
import restaurante from '../../assets/restaurante-fake.png'
const RestaurantCard = ({restaurant, onClick}) => {
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
         <RestaurantPhoto photo={restaurant.photos? restaurant.photos[0].getUrl(): restaurante} />
     </Restaurant>
  )
}

export default RestaurantCard;
