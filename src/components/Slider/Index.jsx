import React  from "react";
import  {Carousel} from "./styles";

import restaurante from '../../assets/restaurante-fake.png'
import {Card} from "../../components/index"


const SliderSeach = ({restaurants}) =>{
  console.log("slider",restaurants);
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };
  return(
    <>

             <Carousel {... settings}>
               {restaurants.map((restaurant) => <Card key={restaurant.place_id}  photo={restaurant.photos? restaurant.photos[0].getUrl(): restaurante} title={restaurant.name}  />)}
             </Carousel>
    </>
  )
}

 export default  SliderSeach;


