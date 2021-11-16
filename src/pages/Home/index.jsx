import React, { useState } from "react";
import {  useSelector } from 'react-redux';
import logo from '../../assets/logo.svg'
import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import  SliderSeach from '../../components/Slider/Index';
import { RestaurantCard, Modal, MapContainer, Loader, Skeleton} from '../../components'
import  {Container, Seach, Logo, Wrapper, CarouselTitle, Map, ModalTitle,ModalContent, ModalFechar} from "./styles";

const Home  = () => {

  const  [inputValue, setValue] = useState(' ');
  const [query, setQuery] = useState(null);
  const [icon, setIcon] = useState(true);
  const [modalOpened, setModalOpen] = useState(false);
  const [placeId, SetPlaceId] = useState(null)
  const  { restaurants, restaurantSelected} = useSelector((state) => state.restaurants)
   let hasRestaurant = restaurants.length > 0

  function handleOpenModal(placeId){
    SetPlaceId(placeId);
    setModalOpen(true);
  }

   function changeInput (e){
    setValue(e.target.value)
    setQuery(inputValue)
   }

   function renderSlider () {
     if(hasRestaurant){
       return(
        <>
        <CarouselTitle>
         Na sua Área
        </CarouselTitle>
       <SliderSeach  restaurants={ restaurants} />
       </>
       )
     }
     else{
       return (
         <>
         <Loader />
         </>
       )
     }
   }
   function  renderRestaurantCard() {
    if(!hasRestaurant) return null
    return (
      <>
                {  restaurants.map((restaurant) =>(
                    <RestaurantCard
                       key={restaurant.place_id}
                      onClick={() => handleOpenModal(restaurant.place_id)}
                      restaurant={restaurant} />
                 ))}
      </>
    )
   }

   function renderModal(){
     if(restaurantSelected){
       return (
         <>
                     <ModalFechar onClick={() => setModalOpen(!modalOpened)}> </ModalFechar>
                     <ModalTitle> {restaurantSelected.name } </ModalTitle>
                     <ModalContent>{restaurantSelected.formatted_address } </ModalContent>
                     <ModalContent>{ restaurantSelected.formatted_phone_number } </ModalContent>
                     <ModalContent>{restaurantSelected.opening_hours ?.open_now ? "Aberto agora :=)" : "Fechado no momento :-(" } </ModalContent>
         </>
       )
     }
     else{
       return (
         <>
                <Skeleton width="10px" heigth="10px" />
                <Skeleton width="10px" heigth="10px" />
                <Skeleton width="10px" heigth="10px" />
                <Skeleton width="10px" heigth="10px" />
         </>
       )
     }
   }
  return (
    <Wrapper>
              <Container>
                 <Seach>
                    <Logo src={logo} alt="Logo do Restaurante"/>


                    <TextField
                          sx={{ width: "100%"}}
                            label='Pesquisar'
                             outlined
                            trailingIcon={icon ?  <MaterialIcon role="button" icon="search" /> : null}
                               >
                    <Input
                            onBlur={() => setIcon(true)}
                            onClick={() => setIcon(false)}
                            value={inputValue}
                            onChange={changeInput}
                     />
                     </TextField>
                     {renderSlider()}
                 </Seach>
                 {renderRestaurantCard()}
              </Container>
              <Map>
                <MapContainer query ={query} placeId={placeId}>
                </MapContainer>
              </Map>
              <Modal
                open={modalOpened} onClose={() =>
                setModalOpen(!modalOpened)}
              >
                 {renderModal()}
              </Modal>
    </Wrapper>

     )
}


export default Home
