import React, {Component} from 'react'; 

export class SimpleButton extends Component {
	constructor(props) {
		super(props); 

		this.state = {
			counter: 0, 
			hasButtonBeenClicked: false
		}
	}

	render() {
		return (
			<button 
				className={this.props.className}
				onClick={this.props.callback}
				disabled={this.props.disabled === 'true' || this.props.disabled === true}
			>
				{this.props.text} 
				{this.state.counter} 
				{this.state.hasButtonBeenClicked && <div>Button Clicked!</div>}
			</button>
		)		
	}
}
