import React,{useState} from 'react'
import Planets from './Planets';
import Films from './Films';
import axios from 'axios';


const DexForce = () =>{
    const[array,setArray]= useState([]);
    const[chose,setChose]= useState();
    const[id,setId]=useState();
    const [stateImg,setImg]= useState(true);

    // const deployForce =()=>{
    //     // const enlace = (`https://swapi.dev/api/${chose}/${id}/`)
    //     axios.get(`https://swapi.dev/api/${chose}/${id}/`)
    //     .then(response => {
    //         const arregloData = [];
    //         console.log(arregloData);
    //         const newValues = Object.keys(response.data).map(key =>{
    //             const value= response.data[key]
    //             arregloData.push({key,value}) 
    //         })
    //         setArray (arregloData)
    //         setImg(true)
    //     }).catch(e => {
    //         if(e){
    //             setImg (false);

    //         }
    //     })
    // }
    const deployForce = () =>{
        axios.get(`https://swapi.dev/api/${chose}/${id}/`)
        .then(res =>{
            console.log(res.data)
            setArray(res.data)
            // setImg(true)
            setImg(true)
        })
        .catch(e => {
            if(e) setImg(false)
        })
    }

    const handleSelect = (e) =>{
        setChose(e.target.value)
    }
    
    const handleId = (e) =>{
        setId(e.target.value)
    }
    // useEffect(() => {
    //     deployForce()
    // }, [array])
    
    // console.log(array)
    return(

        <div>
            <span>Search for</span>
            <select value={chose} onChange={handleSelect} >
                <option value="">Seleeciona un recurso</option>
                <option value="films">films</option>
                <option value="people">people</option>
                <option value="planets">planets</option>
                <option value="species">species</option>
                <option value="starships">starships</option>
                <option value="vehicles">vehicles</option>
            </select>
            id 
            <input value={id} onChange={handleId} ></input> 
            <button onClick={deployForce}>Search</button>
            
            { 
                
            }
            {/* <ul className='listadep'>
                {array.map( (recorrido,i) => 
                    (<li key={i} style={{display: stateImg ? "block": "none" }}>{recorrido.key}: {recorrido.value}</li>)
                    
                )}
                
            </ul> */}

            {/* <div style={{display: stateImg ? "none" : "block"}}>
                <img alt='luke' src={"data:image/jpeg;base64,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"}/>
                <p>these are not the droids i was locking for </p>
            </div> */}
            <Planets data={array} chose={chose} id={id}/>
            <Films data={array} chose={chose} id={id}/>
            

            
        </div>  
    )
}

export default DexForce;
