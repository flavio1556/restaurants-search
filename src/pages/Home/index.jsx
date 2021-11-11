import React, { useState } from "react";
import logo from '../../assets/logo.svg'
import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import  SliderSeach from '../../components/Slider/Index';
import { RestaurantCard} from '../../components'

import  {Container, Seach, Logo, Wrapper,Map, CarouselTitle} from "./styles";

const Home  = () => {

  const  [inputValue, setValue] = useState('Pesquisar Resutarantes');
 
  return (
    <Wrapper>
              <Container>
                 <Seach>
                    <Logo src={logo} alt="Logo do Restaurante"/>
                    <TextField
                            label='Pesquisar'
                             outlined          
                            trailingIcon={<MaterialIcon role="button" icon="search"/>}      >
                    <Input
                            value={inputValue}
                            onChange={(e) => setValue(e.target.value)} />
                     </TextField>
                     <CarouselTitle>
                      Na sua Área
                     </CarouselTitle>
                   <SliderSeach/>
                 </Seach>   
                 <RestaurantCard>
                   </RestaurantCard>               
              </Container>
              <Map/>
    </Wrapper>
  
     )
}


export default Home