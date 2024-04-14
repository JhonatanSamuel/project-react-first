import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import axios from "axios";

import People from "../../assets/people.svg";
import Arrow from "../../assets/arrow.svg";

import H1 from "../../components/Title"
import ContainerItens from "../../components/ComponentsItens"
import Button from "../../components/Button"

import {
  Container,
  Image,
  InputLabel,
  Input,

} from "./styles";

const App = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const history = useHistory()

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    console.log(newUser)
    setUsers([...users, newUser]);

    history.push("/usuarios")
  }

 

  return (
    <Container>
      <Image alt="Logo-image" src={People} />
      <ContainerItens>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} type="number" placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow} />
        </Button>

      </ContainerItens>
    </Container>
  );
};

export default App;
