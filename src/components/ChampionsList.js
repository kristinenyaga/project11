import React, { useState, useEffect } from "react";
import Champion from "./Champion";
import AddChampionForm from "./AddChampionForm";
import { SmallContainer, ScrollBar } from "../styles";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import "./championlist.css"

const ChampionsList = ({ errors, setErrors }) => {
	const [champions, setChampions] = useState([]);
	const navigate = useNavigate();
   console.log(champions)
	useEffect(() => {
		fetch("/champions")
			.then((resp) => resp.json())
			.then((data) => setChampions(data));
	}, []);

	const handleNewChampion = (data) => {
		data.errors
			? setErrors(data.errors)
			: setChampions([data.champion, ...champions]);
		if (!data.errors) {
			navigate("/userhomepage");
			setErrors([]);
		}
	};

	const addChampion = (data) => {
		const config = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accepts: "application/json",
			},
			body: JSON.stringify(data),
		};
		fetch("/champions", config)
			.then((resp) => resp.json())
			.then((data) => handleNewChampion(data));
	};

	const ChampionList = champions.map((champion, index) => (
		<Champion
			key={index}
			champion={champion}
			champions={champions}
			setChampions={setChampions}
		/>
	));
	// currentUser={currentUser} setCurrentUser={setCurrentUser}
	return (
		<>
			<NavBar  />
			<div className="champions">
			{/* <SmallContainer>
				<AddChampionForm addChampion={addChampion} />
			</SmallContainer> */}
			{/* <br />
			<ScrollBar>{ChampionList}</ScrollBar> */}
			{champions.map((champion) =>(
				<Champion champion={champion} />
	))}
		</div>

		</>
		
	);
};

export default ChampionsList;
