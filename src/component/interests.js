import interest from "./data/interest";

function Interest(){
    const listitems=interest.map(interest=>
      <li>{interest}</li>
    )
    return (
        <>
            <h3>INTERESTS</h3>
            <ul>{listitems}</ul>
        </>
    );
}
export default Interest; 