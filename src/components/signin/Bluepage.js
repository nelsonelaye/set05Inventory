import React from 'react'
import styled from 'styled-components'
import {BsCircleFill} from 'react-icons/bs'


const BluePage = () => {
  return (
    <Container>
      <Wrapper>
       <Image>
         <img src="/dash.png" alt=""/>
       </Image>
       <Texthold>
         <h1>Turn Your Ideas Into Reality</h1>
         <span>Consistent Quality and Experience acorss All Platforms and Devices </span>
         <Iconhold>
           <Icons>
           <BsCircleFill size="40px" color="91B0E9"/>
           <button></button>
             <BsCircleFill size="40px" color="91B0E9"/>   
           </Icons>
       </Iconhold>
       </Texthold>
      </Wrapper>
    </Container>
  )
}

export default BluePage;

const Icons = styled.div`
height: 50px;
width: 180px;
/* background-color:red; */
display: flex;
align-items: center;
justify-content: space-between;
button{
  width: 80px;
  height: 30px;
  border-radius: 20px;
  outline: none;
  border: none;
  background-color: #fff;
}
`
const Iconhold = styled.div`
width: 100%;
/* background-color: orange; */
/* height: 250px; */
display: flex;
justify-content: center;
align-items: flex-end;
`
const Texthold = styled.div`
/* height: 60%; */
/* width: 68%; */
display: flex;
align-items: center;
flex-direction: column;
/* background-color:purple; */
h1{
  text-align: center;
  color: white;
  font-size: 70px;
  font-weight: 600;
  /* line-height: 130px; */
}
span{
  font-size: 25px;
  color: #FDFEFF;
  font-weight: 500;
  text-align: center;
  width: 500px;
  margin-top: 20px;
}
`
const Image = styled.div`
/* width: 100%; */
width: 800px;
/* height: 50%; */
/* background-color: green; */
margin-top: 120px;
display: flex;
align-items: flex-end;
justify-content: center;
img{
  width: 70%; 
  object-fit: contain;
}
`
const Wrapper = styled.div`
display: flex;
align-items:center;
flex-direction: column;
width: 70%;
/* height: 100vh; */
/* background-color: orange; */
`
const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 50%;
height: 100vh;
background-color: #3E83FF;
`