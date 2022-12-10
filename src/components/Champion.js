import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import EditChampionForm from "./EditChampionForm";
import { ChampionContainer, EditBtn, DeleteBtn } from "../styles";
import "./champion.css"
import { useNavigate } from "react-router-dom";

const Champion = ({ champion, champions, setChampions }) => {
	const [editing, setEditing] = useState(false);
	const navigate = useNavigate();

	const deleteChampion = (id) => {
		fetch(`/champions/${champion.id}`, {
			method: "DELETE",
		}).then(() => {
			setChampions(champions.filter((w) => w.id !== id));
		});
	};

	function handleClick(id){
		navigate("/comment")
		// champion_id(id)
	}

	return (
		<>
	    
		<div className="champ">
      <img className="champImg"
      src={champion.image} alt="">
      </img>
      <div className="champInfo">
      <span  className="champTitle">
          {champion.name}
        </span>
        {/* <div className="champcats">
          {news.content}
        </div>
         */}
        <hr/>
        <span className="champDate">{champion.email}</span>
        <span className="champDate phone_no">{champion.phone_no}</span>
        <span className="champDate">{champion.bio}</span>
				<Card.Link href={champion.linkedin_url}>linkedIn</Card.Link><br></br>
        <Card.Link href={champion.github_url}>Github</Card.Link>
				<button className="myBtn" onClick={()=>handleClick(champion.id)}>Delete</button>

				<button className="myBtn" onClick={()=>handleClick(champion.id)}>Comment</button>

				<h3 className="comment_title">Your Comments..</h3>
				<div className="comments">
					<ul>
					{champion.comments.map(comment =>(
						<li className="comment_ptag">{comment.title}</li>
					))}

					</ul>
				

				</div>
      </div>
      {/* <p className="champDesc">
      {news.content}
      </p> */}
      
   </div>
		</>
		// <div>
		// 	<ChampionContainer key={champion.id}>
		// 		<div>{champion.name}</div>
		// 		<div>{champion.phone_no}</div>
		// 		<div>{champion.email}</div>
    //             <img src={champion.image} alt="champion's image" />
		// 		<div>{champion.linkedin_url}</div>
		// 		<div>{champion.github_url}</div>
		// 	</ChampionContainer>
		// 	{editing ? (
		// 		<EditChampionForm
		// 			champions={champions}
		// 			setChampions={setChampions}
		// 			champion={champion}
		// 			editing={editing}
		// 			setEditing={setEditing}
		// 		/>
		// 	) : (
		// 		<EditBtn onClick={() => setEditing(true)} content="Edit" />
		// 	)}
		// 	<DeleteBtn onClick={() => deleteChampion(champion.id)} content="Delete" />
		// </div>
	);
};

export default Champion;
