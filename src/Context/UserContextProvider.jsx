import  { useState } from 'react';
import UserContext from './UserContext';

function UserContextProvider({ children }) {
  

  const [user, setUser] = useState(null); 
  return (
    <div>
      <UserContext.Provider value={{user, setUser}}> {/* (value)Data you want to share to components*/}
        {children} 
      </UserContext.Provider>
    </div>
  );
}


export default UserContextProvider;

