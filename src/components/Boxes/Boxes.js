import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../AuthProvider";

const Boxes = ({ props }) => {
	const { productQuantity } = props;
	const navigate = useNavigate();
	const [storedData, setStoredData] = useState({});
	const [storedMainData, setStoredMainData] = useState([]);
	const { currentUser } = useContext(AuthContext);
	const [reduceProduct, setReduceProduct] = useState();
	const [reduceProduct2, setReduceProduct2] = useState(20);

	console.log(currentUser?._id);

	const removeData = async (dataID) => {
		const id = currentUser?._id;
		const url2 = `https://tech-forum-app.herokuapp.com/api/user/${id}/product/${dataID}`;

		const url = `http://localhost:4000/api/user/${id}/product/${dataID}`;

		await axios.delete(url2);
		window.location.reload();
	};

	const reductData = async (dataID) => {
		const id = currentUser?._id;
		const url2 = `https://tech-forum-app.herokuapp.com/api/user/${id}/product/${dataID}`;

		const url = `http://localhost:4000/api/user/${id}/product/${dataID}`;

		await axios.patch(url2, { productQuantity: productQuantity - 1 });
		window.location.reload();
		console.log(productQuantity);
	};

	const addData = async (dataID) => {
		const id = currentUser?._id;
		const url2 = `https://tech-forum-app.herokuapp.com/api/user/${id}/product/${dataID}`;

		const url = `http://localhost:4000/api/user/${id}/product/${dataID}`;

		await axios.patch(url2, { productQuantity: productQuantity + 1 });
		window.location.reload();
		console.log(productQuantity);
	};

	useEffect(() => {
		reductData();
		addData();
		removeData();
	}, [currentUser?._id]);
	return (
		<Div>
			<Wrapper>
				<Top
					onClick={() => {
						removeData(props._id);
					}}
				>
					<span>{props?.productName}</span>
					<span>
						<img src="/Delete.png" />
					</span>
				</Top>
				<Mid>
					<span
						style={{ color: "red", fontSize: "25px", fontWeight: "bold" }}
						onClick={() => {
							reductData(props._id);
						}}
					>
						-
					</span>
					<span
						style={{
							color: "blue",
							fontSize: "25px",
							fontWeight: "bold",
							marginLeft: "10px",
						}}
						onClick={() => {
							console.log("Let's go Now!");
							addData(props._id);
						}}
					>
						+
					</span>
				</Mid>
				<Bottom>
					<span>TAM</span>
					<span>PAP</span>
					<span>N0</span>
				</Bottom>
				<Down>
					<span>#{props.amount * props.productQuantity}</span>
					<span style={{ marginRight: "17px" }}>{props.amount}</span>
					<span style={{ color: "blue", marginRight: "5px" }}>
						{props.productQuantity}{" "}
					</span>
				</Down>
			</Wrapper>
		</Div>
	);
};

export default Boxes;

const Div = styled.div`
	width: 100%;
	height: 180px;

	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: white;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Wrapper = styled.div`
	width: 100%;
	height: 80%;
	padding: 20px 30px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;
const Down = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	font-size: 15px;
	font-weight: 500;
	color: #0f9215;
`;
const Top = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	align-items: center;
	font-size: 16px;

	font-weight: 600;
	img {
		width: 20px;
	}
	span {
		img {
			cursor: pointer;
		}
	}
`;
const Mid = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	span {
		cursor: pointer;
	}
`;
const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	font-size: 15px;
	font-weight: 500;

	align-items: center;
`;
