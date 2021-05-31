import styled from 'styled-components/macro'

const Login = (props) => {
    return (
        <Container>
            <Content>
                <h1>Hello</h1>
                <BgImage />
            </Content>
        </Container>
    )
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
    overflow: hidden;
`;
const Content = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
`;

const BgImage = styled.div`
    background-image: url('/images/BgImage.jpg');
    background-position: 0 0;
    background-size: cover;
    background-repeat: no-repeat;

    height: 100vh;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    opacity: 0.7;
    z-index: -1;
`;

export default Login;