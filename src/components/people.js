import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';



const Single =()=>{
    const[array,setArray]= useState([]);
    const  {idPeople}= useParams();

    axios.get(`https://swapi.dev/api/people/${idPeople}/`)
            .then(response => {
                setArray (response.data)  
            })
        return(
            <div>
                <p>{`persona ${array.name}`}</p>
            </div>  
        );

};

export default Single;