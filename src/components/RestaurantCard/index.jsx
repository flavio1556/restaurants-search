import React from "react";
import { Restaurant, RestaurantInfo, Title,Address } from "./styles";
import Rating from "./Rating/index";

const RestaurantCard = () => {
  return (
     <Restaurant>
         <RestaurantInfo>
              <Title>
                Nome do Restaurant
              </Title>
              <Rating> 
              </Rating>
              <Address>
                Endereço
              </Address>
           
         </RestaurantInfo>
     </Restaurant>
  )
}

export default RestaurantCard;