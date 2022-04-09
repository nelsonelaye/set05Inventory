import React from "react"
import styled from "styled-components"
import Header from "../Header/Header"
import {Link} from 'react-router-dom'


const Home = ()=>{
    return(
        <Contaner>
            <Header/>
            <Body>
                <Sides>
                    <Left>
                     <h1>
                         Market pen
                     </h1>
                     <p>Ensuring all accounting records are up to date and accurate, Market pen takes care of that with just a few clicks</p>
                    <Link to ="/Signup"> <button>Get started</button></Link>
                    </Left>
                    <Right>
 <img src ="/hero.png"/>
                    </Right>
                </Sides>
                
            </Body>
            <Partners>
                    Our 
                    <br/>partners
                    <div></div>
                    <img src="codelab.png"/>
                    <img src= "swin.png"/>
                </Partners>
                
        </Contaner>
    )
}
export default Home;


const Contaner = styled.div`
background:#BED5FF;
background-image:url("/background.png");
display: flex;
flex-direction: column;
justify-content: center;
height: 100vh;
/* align-items: center; */

`

const Body = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 85%;
`
const Left = styled.div`
margin-left: 80px;

h1{
    font-size: 3rem;
}
button{
    padding:15px 30px;
    margin-top: 10px;
    border-radius: 5px;
    outline: none;
    border: none;
    background: #3E83FF;
    color:white;
    :hover{

    }
}
p{
    width: 400px;
    font-size: 18px;

}
`
const Right = styled.div`

width: 600px;
margin-left: 220px;
img{
width: 100%;
}
`
const Sides = styled.div`
display: flex;
justify-content:space-between;
align-items: center;
margin-top: 40px;
/* width: 100px; */
`
const Partners = styled.div`
font-size:20px;
font-weight: bold;
margin-left: 80px;
display: flex;

div{
    width: 2px;
    height: 80px;
    background: black;
    margin-left: 20px;
}
img{
    object-fit: contain;
    margin-left: 20px;
}
`