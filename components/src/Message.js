import React from 'react'; 

export default function Message(props) {
  return (
    <h4 className="bg-success text-white text-center p-2">
      {props.greeting}, {props.name}
    </h4>
  ); 
}
