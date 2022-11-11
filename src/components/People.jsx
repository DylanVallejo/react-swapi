import React,{useState,useEffect} from 'react'
import styles from './People.module.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';



const Single = () => {

    const[array,setArray]= useState([]);
    const [planet, setPlanet] = useState([])
    const [home, setHome] = useState([])
    const  {idPeople} = useParams();
    // const [url, setUrl] = useState(`https://swapi.dev/api/people/${idPeople}/`)
    let url = (`https://swapi.dev/api/people/${idPeople}/`);

    useEffect( () => {
        axios.get(url)
        .then(response => { 
            console.log(" datos persona");
            console.log(response);
            setArray (response.data);   
            setPlanet (response.data.homeworld); 
        })    
        .catch(e=>{
            console.log(e);
        })
        
    }, [])
    
    axios.get(planet)
    .then(res=>{
        console.log("planeta");
        console.log(res);
        setHome(res.data.name);
    })
    .catch(e=>{
        console.log(e);
    })

    return(
        <div>
            
            <p>{planet.homeworld}</p>
            <p>{`persona ${array.name}`}</p>
            <p>Home World: {home}</p>
        </div>  
    );

};

export default Single;