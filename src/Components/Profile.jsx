import { useContext} from 'react'
import UserContext from '../Context/UserContext'


function Profile() {

// Hita apan use kelay
  const { user } = useContext(UserContext);

  if (!user) return <div className="text-2xl text-center">Please Login!</div>
  

  return <div className="text-2xl text-center">Welcome! {user.username} </div>
}

export default Profile;