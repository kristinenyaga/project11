import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MainContainer, HorizontalLine } from "../styles";

const Logout = ({ setCurrentUser }) => {
	const navigate = useNavigate();

	useEffect(() => {
		const config = {
			method: "DELETE",
		};
		fetch("/logout", config);
		handleLogout();
	});

	const handleLogout = () => {
		setCurrentUser(null);

			navigate("/login");
		
	};

	return (
		<MainContainer>
			<br />
			<br />
			<HorizontalLine />
			<LogoutText>Logging Out...</LogoutText>
			<HorizontalLine />
		</MainContainer>
	);
};

const LogoutText = styled.h1`
	color: #14163c;
	font-size: 1.5rem;
	letter-spacing: 0.4rem;
	margin: 5rem 0 5rem 0;
	line-height: 1;
`;

export default Logout;
