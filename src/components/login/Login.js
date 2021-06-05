import React from 'react';
import styled from 'styled-components/macro';

const Login = (props) => {
	return (
		<div>
			<Container>
				<Content>
					<HeadingPrimary>
						Unlimited films, TV programmes and more.
					</HeadingPrimary>
					<HeadingSecondary>
						Watch anywhere. Cancel at any time.
					</HeadingSecondary>
					<Description>
						Ready to watch? Enter your email to create or restart your
						membership.
					</Description>
					<EmailForm>
						<input type="text" placeholder="Email address" />
						<button>
							Get Started
							<svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
								<desc>chevron</desc>
								<path
									d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"
									fill="white"
									fill-rule="evenodd"
								></path>
							</svg>
						</button>
					</EmailForm>
				</Content>
				<BgImage />
			</Container>
		</div>
	);
};

const Container = styled.section`
	display: flex;
	flex-direction: column;
	text-align: center;
	height: 100vh;
	background-color: #000000;
	opacity: 0.8;
`;
const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
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

const HeadingPrimary = styled.h1``;
const HeadingSecondary = styled.h3``;
const Description = styled.p``;
const EmailForm = styled.div`
	margin-top: 50px;
	& input {
		width: 400px;
		height: 60px;
		padding: 7px 17px;

		border-top-left-radius: 4px;
		border-bottom-left-radius: 4px;

		border: none;
	}

	& button {
		background-color: #e50914;
		color: #ffffff;
		font-weight: bold;
		padding: 7px 17px;
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
		border: none;
		cursor: pointer;
		width: 170px;
		height: 60px;

		& svg {
			width: 16px;
			height: 16px;
			vertical-align: middle;
			padding-left: 7px;
		}
	}

	input:active,
	input:focus {
		border: none;
		outline: none;
	}
`;

export default Login;
