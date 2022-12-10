import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, BrowserRouter } from "react-router-dom";
import UserHomePage from "./components/UserHomePage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Logout from "./components/Logout";
import Home from "./components/Home"; //display champions
import CommentsList from "./components/CommentsList"; //display comments
import AddCommentsForm from "./components/AddCommentsForm";

function App() {
	const navigate = useNavigate();
	const [currentUser, setCurrentUser] = useState(null);
	// const [errors, setErrors] = useState([]);
	// const [comments, setComments] = useState([])

	function handleUserLoginAndSignup (data){
		// data.errors ? setErrors(data.errors) : 
        setCurrentUser(data.username);
			navigate("/userhomepage");
	};

	const stateInit = () => {
		checkSessionId();
	};

	const checkSessionId = () => {
		console.log("here");
		fetch("/me")
			.then((resp) => resp.json())
			.then((data) => {
				setCurrentUser(data);
				console.log(data.errors);
				if ((data.errors = "Not authorized")) {
					navigate("/home");
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(stateInit, []);

	return (
		<div className="App">
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route
					exact
					path="/userhomepage"
					element={<UserHomePage />}
					currentUser={currentUser}
					// errors={errors}
					// setErrors={setErrors}
				/>
				<Route
					exact
					path="/signup"
					element={<Signup 	handleUserLoginAndSignup={handleUserLoginAndSignup}/>}
				
					// errors={errors}
				/>
				<Route
					exact
					path="/login"
					element={<Login />}
					handleUserLoginAndSignup={handleUserLoginAndSignup}
					// errors={errors}
				/>
				<Route
					exact
					path="/comment"
					element={<AddCommentsForm currentUser={currentUser} />}
					// errors={errors}
				/>
				<Route
					exact
					path="/logout"
					element={<Logout />}
					setCurrentUser={setCurrentUser}
				/>
				<Route
					exact
					path="/exercises"
					element={<CommentsList />}
					currentUser={currentUser}
					setCurrentUser={setCurrentUser}
				/>
			</Routes>
		</div>
	);
}

export default App;
