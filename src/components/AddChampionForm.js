import React, { useState } from "react";
import styled from "styled-components";
import { AddBtn, NewInput, NewInputForm } from "../styles";

const AddChampionForm = ({ addChampion }) => {
	const [form, setForm] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addChampion(form);
	};

	return (
		<NewInputForm onSubmit={handleSubmit}>
			<FormText>Name:</FormText>
			<NewInput name="name" type="text" onChange={handleChange} />
			<FormText>Phone-no:</FormText>
			<NewInput name="phone_no" type="number" onChange={handleChange} />
            <FormText>Email:</FormText>
			<NewInput name="email" type="text" onChange={handleChange} />
            <FormText>Image:</FormText>
			<NewInput name="image" type="text" onChange={handleChange} />
            <FormText>LinkedIn:</FormText>
			<NewInput name="linkedin_url" type="text" onChange={handleChange} />
            <FormText>GitHub:</FormText>
			<NewInput name="github_url" type="text" onChange={handleChange} />
			<AddBtn type="submit" content=" Add Champion" />
		</NewInputForm>
	);
};

const FormText = styled.h5`
	margin: 0.2rem 0 1rem 0;
	text-shadow: 1px 1px 1px #7e7e9c;
	letter-spacing: 0.05rem;
	font-size: 0.8rem;
`;

export default AddChampionForm;
