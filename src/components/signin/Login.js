import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// const [myState, setMyState] = useState([])

	const signInHandler = async () => {
		const data = {
			email,
			password,
		};
		const url = "https://tech-forum-app.herokuapp.com/api/user/signin";
		const res = await axios.post(url, data);

		localStorage.setItem("user", JSON.stringify(res));
	};

	return (
		<Container>
			<Wrapper>
				<ContentHold>
					<h1>Login</h1>
					<EmailHold>
						<span>Email*</span>
						<InputHold>
							<AiOutlineMail size="35px" />
							<input
								placeholder="email"
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
								}}
							/>
						</InputHold>
						<span>Password*</span>
						<InputHold>
							<AiFillLock size="35px" />
							<input
								placeholder="password"
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
								}}
							/>
						</InputHold>
						<Link to="/dash">
							<button onClick={signInHandler}>Login</button>
						</Link>
					</EmailHold>
				</ContentHold>
			</Wrapper>
		</Container>
	);
};

export default Login;

const InputHold = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border: 4px solid #3e83ff;
	width: 100%;
	height: 50px;
	border-radius: 45px;
	margin-bottom: 50px;
	/* padding: 10px 70px; */
`;
const EmailHold = styled.div`
	width: 85%;
	display: flex;
	flex-direction: column;
	span {
		font-size: 22px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	input {
		height: 20px;
		/* border: 3px solid green; */
		width: 80%;
		font-size: 25px;
		outline: none;
		margin-left: 8px;
		/* border-radius: 38px; */
		border: none;
	}
	button {
		/* height: 95px; */
		/* width: 100%; */

		border-radius: 45px;
		/* border: 3px solid #3E83FF; */
		margin-top: 30px;
		background-color: #3e83ff;
		outline: none;
		border: none;
		margin-left: 80px;
		font-size: 30px;
		color: white;
		padding: 10px 70px;
	}
`;
const ContentHold = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	/* justify-content: center; */
	flex-direction: column;
	h1 {
		font-family: "Open-Sans";
		font-size: 50px;
		/* margin-top: 50px; */
	}
`;
const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50%;
	height: 700px;
	/* background-color: orange; */
`;
const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50%;
	height: 100vh;
	background-color: #fff;
`;
