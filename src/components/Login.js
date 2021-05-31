import styled from 'styled-components/macro'

const Login = (props) => {
    return (
        <Container>
            <Content>
                <HeadingPrimary>
                    <h1>Unlimited films, TV programmes and more.</h1>
                </HeadingPrimary>
                <HeadingSecondary>
                    <h3>Watch anywhere. Cancel at any time.</h3>
                </HeadingSecondary>
                <Description>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                </Description>
                <SignUp></SignUp>
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
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;

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

    z-index: -1;
`;

const HeadingPrimary = styled.h1`
    font-size: 36px;
    color: white;
`;

const HeadingSecondary = styled.h3`
    font-size: 24px;
    color: white;
`;

const Description= styled.p`
    font-size: 16px;
    color: white;
`;

const SignUp = styled.div``;

export default Login;