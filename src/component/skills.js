import skills from "./data/skilldat"

function Skills(){
    const listdata=skills.map(
        skill=><li>{skill}</li>
    )
    return (
        <>
            <h3>SKILLS</h3>
            <ul>{listdata}</ul>
        </>
    );
}

export default Skills;