import React from 'react'; 

export function SimpleButton(props) {
	return (
		<button 
			className={props.className}
			onClick={props.callback}
		>{props.text}</button>
	)
}
