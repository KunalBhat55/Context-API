import { useContext } from "react"
import UserContext from "../Context/UserContext"

function Signup() {
  const { user } = useContext(UserContext);

  if(user) return <h1>Welcome {user.username}</h1>  
  
  return (
    <div>
       <h1 className="text-lg text-center bg-slate-300">Not Found!</h1>  
    </div>
  )
}

export default Signup