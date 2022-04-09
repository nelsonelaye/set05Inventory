import React from 'react'
import styled from 'styled-components'
import Left from '../Left/Left'
import Right from '../Right/Right'

const Signhome = () => {
    return(
        <Wrap>
             <Container>
               <Left/>
               <Right/>
            </Container>
        </Wrap>
    )
}

export default Signhome;

const Wrap = styled.div`
    width: 1800px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Container = styled.div`
  width: 1800px;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;
