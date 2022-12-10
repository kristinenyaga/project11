import React, { useState } from "react";
import EditCommentsForm from "./EditCommentsForm";
import styled from "styled-components";
import { EditBtn, DeleteBtn } from "../styles";

const Comments = ({ comments, setComments, comment }) => {
	const [editing, setEditing] = useState(false);

	const deletecomment = (id) => {
		fetch(`/comments/${comment.id}`, {
			method: "DELETE",
		}).then(() => {
			setComments(comments.filter((comment) => comment.id !== id));
		});
	};

	return (
		<div>
			<CommentList key={comment.id}>
				<CommentText>Title:&nbsp;{comment.title}</CommentText>
				<CommentText>Description:&nbsp;{comment.description}</CommentText>
				<CommentText>Feedback:&nbsp;{comment.feedback}</CommentText>
			</CommentList>
			{editing ? (
				<EditCommentsForm
					Comments={comments}
					setComments={setComments}
					Comment={comment}
					editing={editing}
					setEditing={setEditing}
				/>
			) : (
				<EditBtn onClick={() => setEditing(true)} content="Edit" />
			)}
			<DeleteBtn onClick={() => deletecomment(comment.id)} content="Delete" />
		</div>
	);
};

const CommentText = styled.h3`
	letter-spacing: 0.2rem;
	text-transform: none;
`;

const CommentList = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	height: 11vh;
	background: rgba(255, 255, 255, 0.15);
	box-shadow: 0 4px 4px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(12px);
	border-radius: 8px;
	color: #8a8294;
	font-size: 14px;
	text-shadow: 1px 1px 1px #ffffff;
	text-transform: uppercase;
	letter-spacing: 0.3rem;
`;

export default Comments;
