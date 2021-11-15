import React, { useState } from "react";
import {  useSelector } from 'react-redux';
import logo from '../../assets/logo.svg'
import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import  SliderSeach from '../../components/Slider/Index';
import { RestaurantCard, Modal, MapContainer, Loader, Skeleton} from '../../components'

import  {Container, Seach, Logo, Wrapper, CarouselTitle, Map, ModalTitle,ModalContent} from "./styles";

const Home  = () => {

  const  [inputValue, setValue] = useState('');
  const [query, setQuery] = useState(null);
  const [modalOpened, setModalOpen] = useState(false);
  const [placeId, SetPlaceId] = useState(null)
  const  { restaurants, restaurantSelected} = useSelector((state) => state.restaurants)


  function handleOpenModal(placeId){
    SetPlaceId(placeId);
    setModalOpen(true);
  }
   function changeInput (e){
    setValue(e.target.value)
    setQuery(inputValue)
   }

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
                            onChange={changeInput} />
                     </TextField>
                  {restaurants.length > 0 ? (
                    <>
                     <CarouselTitle>
                      Na sua Área
                     </CarouselTitle>
                    <SliderSeach  restaurants={ restaurants} />
                    </>
                  ) : (

                    <Loader />

                  )
                }

                 </Seach>
                 {  restaurants.map((restaurant) =>(
                    <RestaurantCard
                      onClick={() => handleOpenModal(restaurant.place_id)}
                      restaurant={restaurant} />
                 ))}
              </Container>
              <Map>
                <MapContainer query ={query} placeId={placeId}>
                </MapContainer>
              </Map>
              <Modal
                open={modalOpened} onClose={() =>
                setModalOpen(!modalOpened)}
              >
                {restaurantSelected?(
                  <>
                         <ModalTitle> {restaurantSelected ?.name } </ModalTitle>
                         <ModalContent>{restaurantSelected ?.formatted_address } </ModalContent>
                         <ModalContent>{ restaurantSelected ?.formatted_phone_number } </ModalContent>
                         <ModalContent>{restaurantSelected ?.opening_hours ?.open_now? "Aberto agora :=)" : "Fechado no momento :-(" } </ModalContent>
                  </>
                )
              :
              (
                <>
                <Skeleton width="10px" heigth="10px" />
                <Skeleton width="10px" heigth="10px" />
                <Skeleton width="10px" heigth="10px" />
                <Skeleton width="10px" heigth="10px" />
                </>
              )
                }
              </Modal>
    </Wrapper>

     )
}


export default Home
