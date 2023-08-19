import { useState } from "react";

function Addskills({AddSkills}){

    const [skill,setSkill]=useState("")    

    function handleChange(e){
        e.stopPropagation();
        setSkill(e.target.value);
    }

    function handleClick(){
        AddSkills(skill);
    }

    return (
        <>
            <input placeholder="skill" onChange={handleChange}></input><br></br>
            <button onClick={handleClick}>Add Skills</button><br></br>
        </>
    )
}

export default Addskills;