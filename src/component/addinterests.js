import { useState } from "react";

function Addinterests({AddInterests}){

    const [Interests,setinterests]=useState('')

    function handleChange(e){
        setinterests(e.target.value);
    }

    function handleClick(){
        AddInterests(Interests);
    }

    return(
        <>
            <input placeholder="interests" onChange={handleChange}></input><br></br>
            <button onClick={handleClick}>ADD INTERESTS</button>
        </>
    )
}

export default Addinterests;