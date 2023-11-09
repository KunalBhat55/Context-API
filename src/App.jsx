import "./index.css"
import UserContextProvider from "./Context/UserContextProvider"
import Login from "./Components/Login"
import Profile from "./Components/Profile"
import Signup from "./Components/Signup";
import NewContext from "./Components/MyContext";
import { createContext } from "react";
import Try from "./Components/Try";

export const myContext = createContext();

function App() {
  
  const contextValue = {
    name: "Kunal",
    age: 20,
    // city: "Pune",
    hobbies: ["Cricket", "Football", "Hockey"]
  }

  return (
    // {will wrap the rest of your components and provide them with access to the context value.}
    // <UserContextProvider> {/*<UserContext.Provider value={{user, setUser}}>*/}
    //   <h1 className="text-center text-3xl">Context API</h1>
    //   <Login />
    //   <Profile />
    //   <Signup />
    // </UserContextProvider>
    <myContext.Provider value={contextValue}>
      <h1 className="text-center text-3xl">Context API</h1>
      <NewContext />
      <Try />
    </myContext.Provider>
  );
}

export default App;
