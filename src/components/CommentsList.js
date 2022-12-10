import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Comments from "./Comments";
import AddCommentsForm from "./AddCommentsForm";
import styled from "styled-components";
import { CommentsContainer, ScrollBar } from "../styles";

const CommentsList = ({ currentUser, setCurrentUser }) => {
	const navigate = useNavigate();
	const [comments, setcomments] = useState([]);

	useEffect(() => {
		fetch("/comments")
			.then((resp) => resp.json())
			.then((data) => setcomments(data));
	}, []);

	const addComment = (data) => {
		const config = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		};
		fetch("/comments", config)
			.then((resp) => resp.json())
			.then(() => setcomments([...comments, data]));
	};

	const commentsList = comments.map((comment, index) => (
		<Comments
			key={index}
			comment={comment}
			comments={comments}
			setcomments={setcomments}
		/>
	));

	return (
		<div>
			{/* <Nav currentUser={currentUser} setCurrentUser={setCurrentUser} /> */}
			<CommentsContainer>
				<AddCommentsForm addComment={addComment} />
			</CommentsContainer>
			<BackBtn onClick={() => navigate("/userhomepage")}>
				Go back to Champion
			</BackBtn>
			<ScrollBar>{commentsList}</ScrollBar>
		</div>
	);
};

const BackBtn = styled.button`
	background: #14163c;
	text-transform: uppercase;
	letter-spacing: 0.1rem;
	width: 65%;
	height: 2.5rem;
	border: none;
	border-radius: 2rem;
	cursor: pointer;
	color: #fff;
	font-weight: 600;
	margin: 1em 0 0 3rem;
`;

export default CommentsList;
