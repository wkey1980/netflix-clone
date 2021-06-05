import React from 'react';
import styled from 'styled-components/macro';

const Login = (props) => {
  return (
    <div>
      <Container>
        <Content>

        </Content>
        <BgImage />
      </Container>
    </div>
  )
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  min-height: 100vh;

  position: relative;
`;
const BgImage = styled.div`
  background-image: url('/images/background/BgImage.jpg');
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  height: 100%;
  z-index: -1;

  opacity: 0.4;
`;


export default Login;
