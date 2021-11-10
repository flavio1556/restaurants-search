import React, { useState } from "react";
import logo from '../../assets/logo.svg'
import TextField, {Input} from '@material/react-text-field';

import  {Container, Seach} from "./styles";

const Home  = () => {

  const  [inputValue, setValue] = useState('cachorro');
  return (
  <Container>
       <Seach>
          <img src={logo} alt="Logo do Restaurante"/>
          <TextField
            label='Pesquisar'
            outlined
          //  onTrailingIconSelect={() => this.setState({value: ''})}
            //trailingIcon={<MaterialIcon role="button" icon="delete"/>}
          >
            <Input
             value={inputValue}
             onChange={(e) => setValue(e.target.value)} />
          </TextField>
       </Seach>
     </Container>
     )
}


export default Home