import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

const Register = () => {
	const navigate = useNavigate();

	const [avatar, setAvatar] = useState("");
	const [image, setImage] = useState(
		"https://firebasestorage.googleapis.com/v0/b/codelab-admission.appspot.com/o/social%2Fsimple.png?alt=media&token=99f4b576-37f6-4ba3-8716-686effea539f"
	);

	const schemaModel = yup.object().shape({
		name: yup.string().required("This field has to be filled"),
		email: yup.string().email().required("This field has to be filled"),
		description: yup.string().required("This field has to be filled"),
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
		const forumURL = "https://inventory-app-05.herokuapp.com/api/user/register";
		console.log(data);
		const { name, email, password, description } = data;

		const formData = new FormData();

		formData.append("userName", name);
		formData.append("email", email);
		formData.append("companyName", description);
		formData.append("password", password);
		formData.append("avatar", avatar);
		// formData.append("name", name);
		// formData.append("email", email);
		// formData.append("description", description);
		// formData.append("password", password);
		// formData.append("avatar", avatar);

		const config = {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		};

		await axios.post(forumURL, formData, config);

		reset();

		navigate("/signin");
		window.location.reload();
	});

	return (
		<div>
			<Container>
				<Wrapper>
					<Card onSubmit={onSubmit} type="multipart/form-data">
						<Title>Create an Account here</Title>

						<Image src={image} alt="Logo" />
						<ImageLabel htmlFor="image">Upload Image</ImageLabel>
						<ImageInput id="image" type="file" onChange={uploadImage} />

						<Label> {errors.name && errors.name.message}</Label>
						<Input placeholder="Enter your Name" {...register("name")} />

						<Label> {errors.email && errors.email.message}</Label>
						<Input placeholder="Enter your email" {...register("email")} />

						<Label> {errors.description && errors.description.message}</Label>
						<Area
							type="text"
							placeholder="Enter description about yourself"
							{...register("description")}
						/>

						<Label> {errors.password && errors.password.message}</Label>
						<Input
							type="password"
							placeholder="Enter your password"
							{...register("password")}
						/>
						<Label> {errors.confirm && errors.confirm.message}</Label>
						<Input
							type="password"
							placeholder="Enter your confirm"
							{...register("confirm")}
						/>
						<Button type="submit">Register</Button>

						<Click>
							Already have an account, <Span to="/signin">Sign In Here</Span>
						</Click>
					</Card>
				</Wrapper>
			</Container>
		</div>
	);
};

export default Register;

const Click = styled.div`
	margin-top: 30px;
`;

const Span = styled(Link)`
	text-decoration: none;
	color: red;
	font-weight: bold;
`;

const Area = styled.textarea`
	font-family: Poppins;
	resize: none;
	height: 200px;
	width: 300px;
	padding: 7px;
	border: 1px solid gray;
	border-radius: 3px;
	outline: none;
	::placeholder {
		font-family: Poppins;
		font-size: 16px;
	}
`;

const ImageInput = styled.input`
	display: none;
`;
const ImageLabel = styled.label`
	text-align: center;
	background: #004080;
	padding: 15px 40px;
	color: white;
	border-radius: 5px;
	margin-bottom: 20px;
	transition: all 350ms;
	transform: scale(1);

	:hover {
		cursor: pointer;
		transform: scale(0.97);
	}
	@media screen and (max-width: 5000px) {
		padding: 15px 20px;
	}
`;

const Image = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 100%;
	object-fit: cover;
	background: white;
	margin: 20px 0;
	border: 1px solid lightgrey;
`;

const Label = styled.label`
	font-size: 12px;
	color: red;
	font-weight: bold;
`;
const Button = styled.button`
	margin-top: 20px;
	color: white;
	padding: 15px 30px;
	/* background: ${({ bg }) => bg}; */
	font-size: 20px;
	transition: all 350ms;
	transform: scale(1);
	background: #f8003f;
	border-radius: 3px;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
	border: 0;
	:hover {
		cursor: pointer;
		transform: scale(0.97);
	}
`;

const Input = styled.input`
	margin: 10px 0;
	padding-left: 10px;
	height: 35px;
	width: 300px;
	border: 1px solid gray;
	border-radius: 3px;
	outline: none;
	::placeholder {
		font-family: Poppins;
		font-size: 16px;
	}
`;

const Title = styled.div`
	font-weight: bold;
	font-size: 20px;
`;
const Card = styled.form`
	width: 500px;
	min-height: 300px;
	background: white;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
		rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
	border-radius: 5px;
	display: flex;
	align-items: center;
	padding-top: 50px;
	flex-direction: column;
	padding-bottom: 30px;
	margin-bottom: 30px;
`;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	min-height: calc(100vh - 100px);
	justify-content: center;
	display: flex;
	align-items: center;
`;

const Container = styled.div`
	padding-top: 100px;
	width: 100%;
	height: 100%;
	min-height: calc(100vh - 100px);
	background-color: lightgray;
`;
