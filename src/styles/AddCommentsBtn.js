import styled from "styled-components";

function AddCommentsBtn({ type, content }) {
	return <AddCommentsBtnStyle type={type}>{content}</AddCommentsBtnStyle>;
}

const AddCommentsBtnStyle = styled.button`
	background: #14163c;
	text-transform: uppercase;
	letter-spacing: 0.2rem;
	width: 60%;
	height: 2.1rem;
	border: none;
	border-radius: 2rem;
	cursor: pointer;
	color: #fff;
	font-weight: bold;
	margin: 0.8rem 0 0.2rem 4.4rem;
`;

export default AddCommentsBtn;
