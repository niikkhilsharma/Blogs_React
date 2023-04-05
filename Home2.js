import { useState } from "react";
//This is for practise.
const Home2 = () => {
  const [name, setName] = useState("Mario"); //the useState can have any data type object, number, etc
  const [age, setAge] = useState("23");

  const handleClick = () => {
    setName("Luigi");
    setAge(20);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old{" "}
      </p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home2;
