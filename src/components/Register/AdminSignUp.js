import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsArrowLeftShort, BsBox } from "react-icons/bs";
import {
	AiOutlineEye,
	AiOutlineEyeInvisible,
	AiOutlineMail,
	AiOutlineUser,
} from "react-icons/ai";
import { FiUnlock } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import pix from "./tech.jpg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const AdminSignUp = () => {
	const navigate = useNavigate();

	const [avatar, setAvatar] = useState("");
	const [companyName, setCompanyName] = useState("");
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [toggle, setToggle] = useState(false);

	const onToggle = () => {
		setToggle(!toggle);
	};

	const imageHandler = (e) => {
		const file = e.target.files[0];
		const save = URL.createObjectURL(file);
		setImage(save);
		setAvatar(file);
	};

	const createUser = async () => {
		const url = "https://tech-forum-app.herokuapp.com/api/user/register";
		const formData = new FormData();

		formData.append("companyName", companyName);
		formData.append("userName", userName);
		formData.append("email", email);
		formData.append("password", password);
		formData.append("avatar", avatar);

		const config = {
			headers: {
				"content-type": "multipart/form-data",
			},
		};

		await axios.post(url, formData, config);
	};

	const [image, setImage] = useState("");

	const schemaModel = yup.object().shape({
		name: yup.string().required("This field has to be filled"),
		email: yup.string().email().required("This field has to be filled"),
		companyName: yup.string().required("This field has to be filled"),
		password: yup.string().required("This field has to be filled"),
		confirm: yup.string().oneOf([yup.ref("password"), null]),
	});

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schemaModel),
	});

	const uploadImage = (e) => {
		const file = e.target.files[0];
		const save = URL.createObjectURL(file);
		setImage(save);
		setAvatar(file);
	};

	const onSubmit = handleSubmit(async (data) => {
		const forumURL1 =
			"https://inventory-app-05.herokuapp.com/api/user/register";
		const forumURL = "http://localhost:4000/api/user/register";
		console.log(data);
		const { name, email, password, companyName } = data;

		const formData = new FormData();

		formData.append("userName", name);
		formData.append("email", email);
		formData.append("companyName", companyName);
		formData.append("password", password);
		formData.append("avatar", avatar);

		const config = {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		};

		await axios.post(forumURL1, formData, config);

		reset();

		navigate("/signin");
		window.location.reload();
	});

	return (
		<Container>
			<Left>
				<NavLink
					to="/"
					style={{
						textDecoration: "none",
					}}
				>
					<Arrow>
						<BsArrowLeftShort />
					</Arrow>
				</NavLink>

				<Rest>
					<Logo src="/logo.png" />
					<Title>Create an account</Title>
					<Span>Get started and work on your growth</Span>
					<InputHolder>
						<Img>
							<ImageSelection src={image} />
							{image === "" ? <Overlay htmlFor="img">+</Overlay> : null}
						</Img>

						<Form onSubmit={onSubmit} type="multipart/form-data">
							<Inputer>
								<Icon>
									<BsBox />
								</Icon>
								<Label> {errors.email && errors.email.message}</Label>
								<Input
									placeholder="Enter your Brand Name"
									{...register("name")}
								/>
							</Inputer>
							<Inputer>
								<Icon>
									<AiOutlineUser />
								</Icon>
								<Label> {errors.email && errors.email.message}</Label>
								<Input
									placeholder="Enter your userName"
									{...register("companyName")}
								/>
							</Inputer>
							<Inputer>
								<Icon>
									<AiOutlineMail />
								</Icon>
								<Label> {errors.email && errors.email.message}</Label>
								<Input placeholder="Enter your email" {...register("email")} />
							</Inputer>
							<Inputer>
								<Icon>
									<FiUnlock />
								</Icon>
								<PassInput>
									{toggle ? (
										<Passput
											placeholder="Enter your password"
											type="password"
											{...register("password")}
										/>
									) : (
										<Passput
											placeholder="Enter your password"
											type="password"
											{...register("password")}
										/>
									)}
									<PassIcon>
										{toggle ? (
											<AiOutlineEyeInvisible onClick={onToggle} />
										) : (
											<AiOutlineEye onClick={onToggle} />
										)}
									</PassIcon>
								</PassInput>
							</Inputer>
							<Button type="submit">Creat account</Button>
						</Form>
					</InputHolder>

					<Bottom>
						Already have an account?{" "}
						<NavLink
							to="/signin"
							style={{
								textDecoration: "none",
							}}
						>
							<span>Sign In</span>
						</NavLink>
					</Bottom>
					<Inp type="file" onChange={imageHandler} id="img" />
				</Rest>
			</Left>
			<Right>
				<Image src="dash.png" />
				<RightHead>Register to monitor your progression</RightHead>
				<RightText>Codelab Ajegunle Assignment Portal</RightText>
			</Right>
		</Container>
	);
};

export default AdminSignUp;

const Form = styled.form``;

const Label = styled.label`
	font-size: 12px;
	color: red;
	font-weight: bold;
`;

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	position: relative;
`;

const Logo = styled.img`
	width: 60px;
`;

const Left = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	padding-bottom: 20px;
	z-index: 100;
`;

const Arrow = styled.div`
	background: var(--back);
	width: 50px;
	height: 50px;
	border-radius: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 30px;
	color: var(--deep);
	margin: 20px;
	cursor: pointer;
`;

const Rest = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.span`
	font-size: 35px;
	font-weight: 500;
`;

const Span = styled.div`
	font-size: 15px;
	opacity: 0.7;
`;

const Img = styled.div`
	width: 70%;
	display: flex;
	align-items: center;
	justify-content: center;
	/* background: red; */
	margin-top: 30px;
`;

const ImageSelection = styled.img`
	background: rgba(0, 0, 0, 0.2);
	width: 300px;
	height: 300px;
	border-radius: 100%;
	object-fit: cover;
	overflow: hidden;
`;

const Overlay = styled.label`
	background: rgba(33, 50, 94, 0.2);
	width: 300px;
	height: 300px;
	border-radius: 100%;
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	font-size: 40px;
	cursor: pointer;
	border: 1px dashed rgba(33, 50, 94, 0.5);
`;

const InputHolder = styled.div`
	width: 80%;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const Inputer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	margin-top: 50px;
`;

const Icon = styled.div`
	color: var(--deep);
	border-radius: 100%;
	background: var(--back);
	width: 70px;
	height: 70px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 20px;
	position: absolute;
`;

const Input = styled.input`
	height: 50px;
	width: 320px;
	border-radius: 100px;
	/* border: 1px solid var(--border); */
	border: none;
	margin-left: 10px;
	box-shadow: 0 0 3px rgba(0, 0, 0, 20%);
	padding-left: 70px;
	font-size: 17px;
	:focus {
		outline: 1px solid rgba(0, 0, 0, 0.2);
		border: none;
	}
	::placeholder {
		font-family: "Ubuntu";
		font-weight: 400;
		opacity: 0.6;
	}
`;

const PassInput = styled.div`
	height: 50px;
	width: 320px;
	border-radius: 100px;
	margin-left: 10px;
	box-shadow: 0 0 3px rgba(0, 0, 0, 20%);
	padding-left: 70px;
	display: flex;
	align-items: center;
	cursor: text;
`;

const Passput = styled.input`
	font-size: 17px;
	border: none;
	height: 90%;
	width: 85%;
	::placeholder {
		font-family: "Ubuntu";
		font-weight: 400;
		opacity: 0.6;
	}
	:focus {
		border: none;
		outline: none;
	}
`;

const PassIcon = styled.div`
	color: var(--deep);
	font-size: 23px;
	cursor: pointer;
	opacity: 0.7;
	transition: 350ms;
	:hover {
		opacity: 1;
	}
`;

const Button = styled.button`
	width: 390px;
	background: #3e83ff;
	margin-top: 50px;
	border-radius: 100px;
	height: 50px;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: 350ms;
	outline: none;
	border: 0;
	font-size: 20px;
	:hover {
		transform: scale(1.02);
	}
`;

const Bottom = styled.div`
	margin-top: 30px;
	margin-bottom: 30px;
	span {
		color: var(--deep);
		cursor: pointer;
		text-decoration: none;
	}
`;

const Right = styled.div`
	width: 50%;
	height: 100%;
	background: blue;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	background-image: url("/images/3.jpg");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	color: white;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`;

const Image = styled.img`
	width: 80%;
`;

const RightHead = styled.div`
	max-width: 60%;
	font-weight: 600;
	font-size: 25px;
	text-align: center;
	margin-top: 20px;
`;

const RightText = styled.div`
	margin-top: 15px;
	font-size: 15px;
	opacity: 0.8;
`;

const Inp = styled.input`
	display: none;
`;

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``
