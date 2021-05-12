import React from 'react';

import logoImg from '../../assets/codeschool-logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, ContainerLogin, ContainerInfo, Title, LinkRegister, LinkForgot } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <ContainerInfo>
        <img src={logoImg} alt="CodeSchool" />
        <Title>Faça seu login<br/> na plataforma</Title>
      </ContainerInfo>

      <ContainerLogin>
        <Input name="email" placeholder="E-mail" />

        <Input
          name="password"
          type="password"
          placeholder="Senha"
        />
        <LinkForgot>Esqueci minha senha</LinkForgot>

        <Button type="submit">Entrar</Button>

        <LinkRegister>
         Não tem conta?
         <a href="singup">Registre-se</a>
        </LinkRegister>

      </ContainerLogin>
    </Container>
  );
};

export default SignIn;
