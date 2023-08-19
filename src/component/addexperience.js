import { useState } from "react";

function Addexperience({AddExperience}){

    const [experience,setexperience]=useState('')
    
    function handleChange(e){
        setexperience(e.target.value);
    }

    function handleClick(){
        AddExperience(experience);
    }

    return (
        <>
            <input placeholder="experience" onChange={handleChange}></input><br></br>
            <button onClick={handleClick}>Add</button><br></br>
        </>
    )
}

export default Addexperience;