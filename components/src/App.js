import React from 'react'; 
import Message from './Message'; 
import Summary from './Summary'; 

export default function App() {
  return (
  	<div>
	    <h1 className="bg-primary text-white text-center p-2">
	      Hello David
	    </h1>
	    <Message greeting="Hello" name="Bob" />
	    <Message greeting="Bonjour" name={"Brigitte" + " " + "Bardot"} />
	    <Message greeting="Hi there" name="Dora" />
	    <Summary />
    </div>
  ); 
}
