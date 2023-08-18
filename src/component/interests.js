import interest from "./data/interest";

function Interest(){
    if(interest.length===0){
        return ;
    }
    const listitems=interest.map(interest=>
      <li>{interest}</li>
    )
    return (
        <>
            <h3>INTERESTS</h3>
            <hr/>
            <ul>{listitems}</ul>
        </>
    );
}
export default Interest; 