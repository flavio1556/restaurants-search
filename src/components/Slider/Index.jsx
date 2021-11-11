import React  from "react";
import  {Carousel} from "./styles";

import restaurante from '../../assets/restaurante-fake.png'
import {Card} from "../../components/index"


const SliderSeach = () =>{
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };
  return(         
    <> 
 
             <Carousel {... settings}>              
               <Card photo={restaurante} title= "Nome"/>
               <Card photo={restaurante} title= "Nome"/>
               <Card photo={restaurante} title= "Nome"/>
               <Card photo={restaurante} title= "Nome"/>
               <Card photo={restaurante} title= "Nome"/>
             </Carousel>       
    </>
  )
}
 
 export default  SliderSeach;


