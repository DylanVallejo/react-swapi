const Films = ({chose}) =>{    
    return(
        <>
            {
                (chose === "films") ? <h3>Films</h3>: ""
            }
        </>
    )
}
export default Films;