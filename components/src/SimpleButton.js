import React, {Component} from 'react'; 
import PropTypes from 'prop-types'; 

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

	static defaultProps = {
		disabled: false
	}

	static = {
		text: PropTypes.string,
		theme: PropTypes.string, 
		callback: PropTypes.func, 
		disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
	}
}
