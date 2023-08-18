import edudat from "./data/edudat";

function Education(){
    console.log("Hello",Object.keys(edudat).length)
    if(Object.keys(edudat).length===0){
        return;
    }
    
    return(
        <>
            <div>
                <h3>EDUCATION</h3>
                <hr/>
                <div>{edudat.college}</div>
                <div>{edudat.year}</div>
                <div>{edudat.cgpa}</div>
            </div>
        </>
    )
}

export default Education;