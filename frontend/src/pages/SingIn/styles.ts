import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: row;
  justify-content: center;
  margin-top: 20vh;
  margin-bottom: 20vh;
  margin-left: auto;
  margin-right: auto;
`;

export const ContainerInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-right: 100px;

  img {
    width: 240px;
    height: 41px;
  }

  h1 {
      margin-bottom: 24px;
    }
`;

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 480px;
  background: #f1f2ff;
  border-radius: 5px;
  padding: 64px;
`;


export const Title = styled.h1`
  font-size: 48px;
  color: #f1f2ff;
  max-width: 300px;
  line-height: 56px;
  margin-top: 50px;
  text-align: left;
  display: block;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;

export const LinkRegister = styled.div`
  display: flex;
  flex-direction: row;
  color: #5b5959;
  margin-top: 8px;

  a{
    color: #d02449;
    display: block;
    text-decoration: none;
    margin-left: 2px;

    &:hover {
    color: ${shade(0.2, '#d02449')};
  }
  }
`;

export const LinkForgot = styled.div`
  color: #d02449;
  display: block;
  margin: 8px 0px 24px;
  text-decoration: none;
  transition: color 0.2s;
  align-self: flex-start;

  &:hover {
    color: ${shade(0.2, '#d02449')};
  }
`;
