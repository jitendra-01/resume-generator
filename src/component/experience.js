import exps from "./data/exps";

function Experience(){
    const listdata=exps.map(
        exp=><li>{exp}</li>
    )
    return (
        <>
            <h3>EXPERIENCE</h3>
            <ui>{listdata}</ui>
        </>
    );
}

export default Experience;