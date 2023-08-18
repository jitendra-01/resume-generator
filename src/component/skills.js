import skills from "./data/skilldat"

function Skills(){
    if (skills.length===0){
        return ;
    }
    const listdata=skills.map(
        skill=><li>{skill}</li>
    )
    return (
        <>
            <h3>SKILLS</h3>
            <hr/>
            <ul>{listdata}</ul>
        </>
    );
}

export default Skills;