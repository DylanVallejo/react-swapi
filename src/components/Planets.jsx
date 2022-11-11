import axios from "axios";
import { useState, useEffect } from "react";

const Planets = ( {id} , {chose} ) =>{
    // console.log('planeta', data)
    // console.log('eleccion prop', chose);
    console.log('id', id, 'chose', chose);
    // console.log( items);
    
    
    const [data, setData] = useState([]);
    const [idPlanet, setIdPlanet] = useState(id);
    const [name, setName] = useState(chose);
    
    // useEffect(() => {
        
    // }, [data])
    
    axios.get(`https://swapi.dev/api/${name}/${idPlanet}/`)
    .then(res=>{
        setData(res.data)
    })
    return(
        <>
        
            {
                (chose === "planets") ? 
                    <>
                        <h3>hola planetas</h3> 
                        <p>{data.name}</p>
                    </>
                : ""
            }
        
        {/* {
            (chose === "planets") ? data.map((info,index)=>{
                return(
                    <div key={index}>
                        <>hola</>
                        <h3>{info.name}</h3>
                        <span>{info.gravity}</span>
                    </div>
                )
            }) : ""
        } */}
        
            {/* // { (chose === "planets") ? (
            //     {data.map( (info) =>{
            //         )
            //     })}
            // ) : " " }
            */}
        </>
    )
}
export default Planets;