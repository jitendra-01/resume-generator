import './print.css'

function Print(){
    function handleClick(){
        window.print();
    }
    return(
        <>
            <button onClick={handleClick} className="Print">
                Print
            </button>
        </>
    )
}

export default Print;