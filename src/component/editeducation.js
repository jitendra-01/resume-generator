import { useState } from "react";
import edudat from "./data/edudat";

function Editeducation({Update}){

    const [edudata,setedudata]=useState(edudat);
    
    function handleChange(e){
        setedudata({...edudata,
            [e.target.name]:e.target.value,
        })
    }

    function handleClick(e){
        console.log(edudata);
        Update(edudata);
    }

    return(
        <>
            <input onChange={handleChange} placeholder="College" name="college" value={edudata.college}></input><br></br>
            <input onChange={handleChange} placeholder="Year" name="year" value={edudata.year}></input><br></br>
            <input onChange={handleChange} placeholder="Cgpa" name="cgpa" value={edudata.cgpa}></input><br></br>
            <button onClick={handleClick}>Change Education</button><br></br>
        </>
    )
}

export default Editeducation;