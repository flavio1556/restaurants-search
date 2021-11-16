import React  from "react";
import  {Carousel} from "./styles";

import restaurante from '../../assets/restaurante-fake.png'
import {Card} from "../../components/index"


const SliderSeach = ({restaurants}) =>{
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    adaptiveHeight: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
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


