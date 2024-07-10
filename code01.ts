import React from "react";

// Define the type for the props
interface GreetingProps {
  name: string;
}

// Use the defined props type in the functional component
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
