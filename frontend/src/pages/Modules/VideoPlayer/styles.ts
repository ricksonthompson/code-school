import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  animation: loadAnimation;
  animation-duration: 500ms;
  white-space: pre-line;
  display: flex;

  @media (max-width: 1060px) {
    align-items: center;
    flex-direction: column;
  }

  @media (max-width: 700px) {
    width: 90vw;
  }
`;

export const FlexboxLeft = styled.div`
  width: 1280px;

  > p {
    margin-top: 40px;
    margin-bottom: 25px;
  }

  p {
    font-family: 'Anton', Helvetica, serif;
    font-size: 32px;
    text-transform: uppercase;
  }

  iframe {
    width: inherit;
    height: 720px;
    border-radius: 5px;
  }

  > span {
    display: block;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  @media (max-width: 1880px) {
    width: 1152px;

    iframe {
      height: 648px;
    }
  }

  @media (max-width: 1720px) {
    width: 1024px;

    iframe {
      height: 576px;
    }
  }

  @media (max-width: 1550px) {
    width: 896px;

    iframe {
      height: 504px;
    }

    > span {
      font-size: 18px;
    }
  }

  @media (max-width: 1395px) {
    width: 768px;

    iframe {
      height: 432px;
    }
  }

  @media (max-width: 1220px) {
    width: 640px;

    iframe {
      height: 360px;
    }

    > span {
      font-size: 16px;
    }
  }

  @media (max-width: 1060px) {
    width: 768px;

    iframe {
      height: 432px;
    }

    > span {
      display: none;
    }
  }

  @media (max-width: 970px) {
    width: 640px;

    iframe {
      height: 360px;
    }
  }

  @media (max-width: 815px) {
    width: 512px;

    iframe {
      height: 288px;
    }
  }

  @media (max-width: 565px) {
    width: 384px;

    iframe {
      height: 216px;
    }
  }

  @media (max-width: 440px) {
    width: 320px;

    iframe {
      height: 180px;
    }

    > p {
      margin-top: 20px;
      margin-bottom: 25px;
    }

    p {
      font-size: 28px;
      text-align: center;
    }
  }
`;

export const FlexboxRight = styled.div`
  margin-left: 15px;
  margin-top: 140px;
  width: 100%;

  @media (max-width: 1060px) {
    margin-top: 15px;
    margin-bottom: 30px;
    margin-left: 0;
    width: 768px;
  }

  @media (max-width: 970px) {
    width: 640px;
  }

  @media (max-width: 815px) {
    width: 512px;
  }

  @media (max-width: 565px) {
    width: 384px;
  }

  @media (max-width: 440px) {
    width: 320px;
  }
`;

export const NextVideoTitle = styled.div`
  background-color: #272727;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 10px 0 10px 10px;

  strong {
    color: #fff;
    font-size: 18px;
  }

  @media (max-width: 1395px) {
    strong {
      font-size: 16px;
    }
  }
`;

export const NextVideos = styled.div`
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 679px;
  text-align: center;

  span {
    margin-bottom: 5px;
    color: #fff;
    display: block;
  }

  @media (max-width: 1880px) {
    height: 607px;
  }

  @media (max-width: 1720px) {
    height: 535px;
  }

  @media (max-width: 1550px) {
    height: 464px;
  }

  @media (max-width: 1395px) {
    height: 394px;
  }

  @media (max-width: 1220px) {
    height: 321px;
  }

  @media (max-width: 1060px) {
    height: 480px;
  }
`;

export const Video = styled.div`
  cursor: pointer;

  img {
    border-radius: 5px;
    margin-top: 5px;
    height: 90px;
    width: 160px;
  }

  small {
    color: #fff;
    display: none;
    font-family: 'Roboto', Helvetica, Arial;
    font-size: 14px;
  }

  @media (max-width: 1060px) {
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      margin: 10px 10px 0 10px;
    }

    span {
      display: none;
    }

    small {
      text-align: left;
      display: block;
    }
  }

  @media (max-width: 440px) {
    display: block;
    small {
      display: none;
    }

    span {
      display: block;
    }
  }
`;

export const UpperTitle = styled.div`
  height: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: inherit;

  strong {
    font-size: 20px;
  }

  @media (max-width: 1395px) {
    strong {
      font-size: 18px;
    }
  }

  @media (max-width: 815px) {
    height: inherit;
    align-items: flex-end;
  }

  @media (max-width: 440px) {
    strong {
      font-size: 16px;
    }
  }
`;

export const Download = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  > span {
    font-size: 18px;
  }

  svg {
    width: 30px;
  }

  @media (max-width: 1395px) {
    > span {
      font-size: 16px;
    }
  }

  @media (max-width: 565px) {
    > span {
      display: none;
    }
  }
`;
