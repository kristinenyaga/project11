import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
	MainContainer,
	HorizontalLine,
	InputForm,
	LoginPageBtn,
	LogoText,
	SignInput,
	SignupPageBtn,
} from "../styles";

const Signup = ({ errors, handleUserLoginAndSignup }) => {
	console.log("got to signup");
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
		fetch("/signup", config)
		.then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          navigate("/login")
        });
      } else {
        r.json().then((err) => alert(err.errors));
      }
    });
	};

	return (
		<MainContainer>
			<HorizontalLine />
			<LogoText>Stay Connected, Have Fun, Live Happy!</LogoText>
			<HorizontalLine />
			<br />
			{/* <Errors errors={errors} /> */}
			<InputForm onSubmit={onSubmit}>
				<LabelText>Enter your Username:</LabelText>
				<SignInput onChange={onChange} name="username" type="text" />
				<LabelText>Enter your Email:</LabelText>
				<SignInput onChange={onChange} name="email" type="email" />
                <LabelText>Enter your Password:</LabelText>
				<SignInput onChange={onChange} name="password" type="password" />
				<LabelText>confirm your Password:</LabelText>
				<SignInput onChange={onChange} name="password_confirmation" type="password" />


				<SignupPageBtn
					type="submit"
					content="Signup"
					onClick={() => navigate("/userhomepage")}
				/>
				<HorizontalLine />
			</InputForm>
			<FooterText>Already have an account?</FooterText>
			<LoginPageBtn
				type="submit"
				content="Log In"
				onClick={() => navigate("/login")}
			/>
		</MainContainer>
	);
};

const LabelText = styled.h5`
	margin: 0.4rem 0 0 0;
	color: black;
`;

const ConfirmText = styled.h5`
	margin: 0.4rem 0 0 0;
	color: black;
	font-style: italic;
`;

const FooterText = styled.h5`
	margin: -2rem 0 0 0;
	color: black;
	letter-spacing: 0.2rem;
`;

export default Signup;
