import React from 'react';
import { DivFlavor, ImgFlavor, LoginBox, LoginContainer, LoginImage, Izquierda, LoginRight, LoginTitle } from '../../../style/login';
import Logo from '../../../assets/img/Logo.png';
import OndaLogo from '../../../assets/img/ondasLogo.png';
import Button from '../../../components/commun/button';
import Input from '../../../components/commun/input';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../enums/routes/Routes';
import styled from 'styled-components';

const Login = () => {

  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    navigate(ROUTES.DASHBOARD);
  };

  return (
    <LoginContainer>
      <Izquierda>
        <LoginBox>
          <LoginTitle>Login</LoginTitle>
          <form>
            <Input title="Correo Electrónico" type="text"/> 
            <Input title="Contraseña" type="text"/>
            <LoginButton onClick={handleLogin}> Entrar </LoginButton>
          </form>
        </LoginBox>
      </Izquierda>
      <LoginRight>
        <DivFlavor>
        <LoginImage src={OndaLogo} alt="Imagen de fondo" />
          <ImgFlavor src={Logo} alt="Logo de UNIFRANZ" />
        </DivFlavor>
      </LoginRight>
    </LoginContainer>
  );
};

export default Login;

const LoginButton = styled.button`
  width: 100%;
  background-color: #F06724;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  height: 40px;

  &:hover {
    background-color: #e05b1e;
  }
`;