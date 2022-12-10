import React, { useState } from "react";
import styled from "styled-components";
import { AddCommentsBtn } from "../styles";

const FormText = styled.span`
	color: #14163c;
	margin: 0.6rem 0 0.1rem 4.4rem;
	text-shadow: 1px 1px 1px #7e7e9c;
	letter-spacing: 0.05rem;
	font-size: 0.8rem;
`;

const NewCommentsForm = styled.form`
	display: flex;
	flex-direction: column;
	flex-wrap: row wrap;
	align-items: center;
	justify-content: space-between;
	height: 28%;
	width: 65%;
	margin: 0.1rem 6rem 0 2rem;
`;

const CommentsInput = styled.input`
	background: rgba(255, 255, 255, 0.24);
	box-shadow: 0 2px 4px 0 rgba(31, 38, 135, 0.37);
	border-radius: 0.5rem;
	width: 60%;
	height: 1rem;
	margin: 0 0 0 4.4rem;
	padding: 0.7rem;
	border: none;
	outline: none;
	color: #3c354e;
	font-size: 0.8rem;
	font-weight: bold;
	&:focus {
		display: inline-block;
		box-shadow: 0 0 0 0.2rem #b9abe0;
		backdrop-filter: blur(12rem);
		border-radius: 2rem;
	}
	&::placeholder {
		color: #8773bf;
		font-weight: 100;
		font-size: 1rem;
	}
`;

function AddCommentsForm({ addComment,currentUser }) {
	const [form, setForm] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addComment(form);
	};

	return (
		<NewCommentsForm onSubmit={handleSubmit}>
		
			<FormText>User_id</FormText>
			<CommentsInput name="name" type="text"value={currentUser.id} />
			<FormText>Champion_id</FormText>
			<CommentsInput name="name" type="text" onChange={handleChange} />
			<FormText>Title</FormText>
			<CommentsInput name="name" type="text" onChange={handleChange} />
			<FormText>Comment</FormText>
			<CommentsInput name="calories" type="number" onChange={handleChange} />
			<FormText>Feedback</FormText>
			<CommentsInput name="duration" type="number" onChange={handleChange} />
			<AddCommentsBtn type="submit" content="Add Comments" />
		</NewCommentsForm>
	);
}

export default AddCommentsForm;



