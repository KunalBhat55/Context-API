import { myContext } from "../App"
import { useContext } from "react"

function NewContext() {  // props
 
  const {name, age, city, hobbies} = useContext(myContext); // main point..

  if(name && age && city && hobbies) return <h1 className="text-2xl text-center">Loading...</h1>

  return (
    <div>
      <h1 className="text-2xl text-center">
        Hello my name is {name} I am {age} yrs old from {city}
      </h1>
      <h2 className="text-2xl text-center mt-24">My Hobbies are:</h2>
      <ul className="text-xl text-center ">
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

export default NewContext;

