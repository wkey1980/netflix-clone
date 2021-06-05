import React from 'react';
import styled from 'styled-components/macro';
import Logo from '../logo/Logo';

const Header = () => {
	return (
		<Nav>
			<Logo />
			<Login>Sign In</Login>
		</Nav>
	);
};

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;

	position: fixed;
	top: 0;
	left: 0;
	right: 0;

	height: 50px;

padding: 15px 30px;
margin-top: 20px;

	z-index: 3;
`;
// const Logo = styled.a`
// 	padding: 0;
// 	width: 80px;
// 	margin-top: 4px;
// 	max-height: 70px;
// 	font-size: 0;
// 	display: inline-block;
// 	img {
// 		display: block;
// 		width: 100%;
// 	}
// `;

const Login = styled.a`
	padding: 10px 20px;
	background-color: #e50914;
	color: #ffffff;
	font-weight: bold;
	padding: 7px 17px;
	border-radius: 4px;
`;

export default Header;
