import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Errors from "./Errors";
import styled from "styled-components";
import {
	MainContainer,
	Input,
	InputForm,
	HorizontalLine,
	LoginButton,
	LoginPageBtn,
} from "../styles";

const Login = ({ errors, handleUserLoginAndSignup }) => {
	const navigate = useNavigate();
	const [state, setState] = useState({});

	const onChange = (e) => {
		const { name, value } = e.target;
		setState({ ...state, [name]: value });
	};

	const onSubmit = (e) => {
		e.preventDefault();

		const config = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify(state),
		};

		fetch("/login", config)
			.then((resp) => resp.json())
			.then((data) => navigate("/userhomepage"));
	};

	return (
		<MainContainer>
			<HorizontalLine />
			<InputForm onSubmit={onSubmit}>
				<Header>Mlinks-Connect</Header>
				<HorizontalLine />
				<Input
					placeholder="Username"
					onChange={onChange}
					name="username"
					type="text"
				/>
				<br />
				<Input
					placeholder="Password"
					onChange={onChange}
					name="password"
					type="password"
				/>
				<br />
				<LoginButton type="submit" content="Log In" />
				<br />
				<HorizontalLine />
				<SignUpText>Don't have an Account?</SignUpText>
				<LoginPageBtn
					type="submit"
					content="Sign Up"
					onClick={() => navigate("/signup")}
				/>
			</InputForm>
			{/* <Errors errors={errors} /> */}
		</MainContainer>
	);
};
const Header = styled.h2`
	color: #14163c;
	margin: 3rem 0 2rem 0;
	padding: 1rem;
	text-shadow: 1.2px 0.4px 1.2px #062c9e;
	text-align: center;
`;

const SignUpText = styled.h4`
	margin: 2rem 0 0 0;
	color: black;
	letter-spacing: 0.2rem;
	text-shadow: 1px 1px 1.3px #ffe7d1;
`;

export default Login;
