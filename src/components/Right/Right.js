import React from 'react'
import styled from 'styled-components'

const Right = () =>{
    return(
        <Container>
            <Wrap>
                <Hero>
                    <img src='/dash.png' alt='hero'/>
                </Hero>

            <Texts>
            <h1>Turn Your Ideas Into Reality</h1>
                <h5>Consistent Quality and Experience Across All Platforms And Devices</h5>
            </Texts>

                <Hold>
                <Span2></Span2>
                <Span></Span>
                <Span2></Span2>
                </Hold>
            </Wrap>
        </Container>
    )
}

export default Right;

const Container = styled.div`
width: 900px;
height: 100%;

`;


const Wrap = styled.div`
width: 900px;
height: 100%;
background-color: #3E83FF;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
color: white;
position: fixed;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
right: 0px;
`;

const Hero = styled.div`


img{
    width: 700px;
    height: 400px;
    margin-top: 40px;
    object-fit: contain;
}


`;

const Texts = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

    h1{
    font-size: 45px;
    color: white;
}

h5{
    color: white;
    font-size: 20px;

}
`;

const Hold = styled.div`
    width: 280px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
`;
const Span = styled.div`
        width: 150px;
        height: 40px;
        border-radius: 15px;
        background-color: #abb1bd;
`;
const Span2 = styled.div`
        width: 40px;
        height: 40px;
        border-radius: 30px;
        background-color: #abb1bd;
`;