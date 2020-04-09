import React, {Component} from 'react'; 

export class SimpleButton extends Component {
	render() {
		return (
			<button 
				className={this.props.className}
				onClick={this.props.callback}
				disabled={this.props.disabled === 'true' || this.props.disabled === true}
			>{this.props.text}</button>
		)		
	}
}
