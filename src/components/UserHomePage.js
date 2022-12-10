import ChampionsList from "./ChampionsList";
import styled from "styled-components";
import { MainContainer, HorizontalLine } from "../styles";
import NavBar from "./NavBar";

const UserHomePage = ({ errors, setErrors, currentUser }) => {
	console.log("userhomepage");
	return (
		<MainContainer>
			{/* <NavBar currentUser={currentUser} /> */}
			<LogoText>Track your Champion</LogoText>
			{/* <HorizontalLine /> */}
			<ChampionsList errors={errors} setErrors={setErrors} />
		</MainContainer>
	);
};

const LogoText = styled.h2`
	margin: 0.4rem 0 0 0;
	color: #000;
`;

export default UserHomePage;
