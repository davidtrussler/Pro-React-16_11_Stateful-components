import React, {Component} from 'react'; 

export class SimpleButton extends Component {
	constructor(props) {
		super(props); 

		this.state = {
			hasButtonBeenClicked: false
		}
	}

	render() {
		return (
			<button 
				className={this.props.className}
				onClick={this.handleClick}
				disabled={this.props.disabled === 'true' || this.props.disabled === true}
			>
				{this.props.text} 
				{this.props.counter} 
				{this.state.hasButtonBeenClicked && <div>Button Clicked!</div>}
			</button>
		)		
	}

	handleClick = () => {
		this.props.incrementCallback(5); 
		this.setState({hasButtonBeenClicked: true}); 
		this.props.callback(); 
	}
}
