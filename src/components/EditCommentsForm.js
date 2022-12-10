import React, { useState } from "react";
import styled from "styled-components";
import { NewInput, EditBtn, DeleteBtn } from "../styles";

const EditCommentsForm = ({ comment, setcomments, comments, setEditing }) => {
	const { id } = comment;
	const [form, setForm] = useState({
		title: comments.title,
		description: comments.description,
		feedback: comments.feedback,
	});

	const handleChange = (e) => {
		const { title, value } = e.target;
		setForm({ ...form, [title]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const config = {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Accepts: "application/json",
			},
			body: JSON.stringify(form),
		};
		fetch(`/comments/${comment.id}`, config)
			.then((resp) => resp.json())
			.then(() => {
				setcomments(comments.map((e) => (e.id === id ? form : e)));
			});
		setEditing(false);
	};

	return (
		<EditForm onSubmit={handleSubmit}>
			<FormText>Name</FormText>
			<NewInput
				name="title"
				type="text"
				onChange={handleChange}
				value={form.title}
			/>
			<FormText>Comments</FormText>
			<NewInput
				name="description"
				type="text"
				onChange={handleChange}
				value={form.description}
			/>
			<FormText>Feedback</FormText>
			<NewInput
				name="feedback"
				type="text"
				onChange={handleChange}
				value={form.feedback}
			/>
			<EditBtn type="submit" content="Add Edit" />
			<DeleteBtn onClick={() => setEditing(false)} content="Cancel" />
		</EditForm>
	);
};

const FormText = styled.h5`
	margin: 1rem 0 0 0;
	text-shadow: 1px 1px 1px #7e7e9c;
	letter-spacing: 0.05rem;
	font-size: 0.8rem;
`;

const EditForm = styled.form`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	width: 80%;
`;

export default EditCommentsForm;
