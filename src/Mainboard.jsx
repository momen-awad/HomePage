import React,{ useEffect, useState } from 'react';
import styled from 'styled-components'
import PinMain from './Pin_main';
import unsplash from './api/unsplash';
import './mainboard.css';


function Mainboard(){
    const [pins,setNewPins] = useState([]);

    useEffect(()=> {

        async function fetchData(){
            const request = await unsplash.get("https://api.unsplash.com/photos?per_page=30");
            let urls = extractedValue(request.data,'urls');
            setNewPins(urls)
            return request  
        }

        fetchData()      
    },[]);
    


    function extractedValue(arr,prop){
        let extractValue = arr.map(item => item[prop]);
        let regularurls = extractValue.map(item => item['regular'])
        return regularurls;
    }    
    
    
    return (
        <Wrapper className="mainboard__container ">
            {pins.map(pin => {
                return <PinMain urls={pin}/>
            })}
        </Wrapper>
    );
}

export default Mainboard;

const Wrapper = styled.div`
    background-color:white;
    height:100%;
    margin-top:15px;
    column-gap:10px;
    margin:0 auto;
    margin-top:20px;

`