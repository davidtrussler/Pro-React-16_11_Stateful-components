import React from 'react'; 

export function SimpleButton(props) {
	return (
		<button 
			className={props.className}
			onClick={props.callback}
			disabled={props.disabled === 'true' || props.disabled === true}
		>{props.text}</button>
	)
}
