function Experience({exps}){
    
    if(exps.length===0){
        return;
    }
    const listdata=exps.map(
        exp=><li>{exp}</li>
    )
    return (
        <>
            <h3>EXPERIENCE</h3>
            <hr/>
            <ui>{listdata}</ui>
        </>
    );
}

export default Experience;