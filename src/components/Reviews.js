import { useState } from "react"

export function Reviews(){
    const [reviews, setCounter] = useState(1281)

    const addOneandClear = () => {
        if (document.querySelector('input').value === ""){
            return 
        } else {
        setCounter (reviews + 1)
        document.querySelector('input').value = ""
        }
    }

    return (
        <div className="Reviews">
            Reviews<br></br>
            <h1>{reviews}</h1>
            <input className='text' type="text" placeholder="Write review here"></input>
            <button onClick ={addOneandClear}>Leave review</button>
        </div>
    )
}