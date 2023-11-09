import { useContext } from "react"
import { myContext } from "../App";


function Try() {
 
  const {age} = useContext(myContext);  

  return (
    <div>
        <h1 className="text-center text-lg bg-slate-600">{age}</h1>
    </div>
  )
}

export default Try