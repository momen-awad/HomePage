import React from 'react';
import styled from 'styled-components';

function HeaderSection() {
    
    return ( 
        <Wrapper>
            <div><span id="top">get your next</span> <br/> creative idea</div>
        </Wrapper>
     );
}

export default HeaderSection;

const Wrapper = styled.div`
    div{
        dispaly:flex;
        align-items:center;
        justify-content:center;
        font-size:2rem;
        font-weight: 700;
        text-align:center;
        color:skyblue;
        #top{
            font-size:3rem;
            color:#e60023;
        }
    }
    
`
