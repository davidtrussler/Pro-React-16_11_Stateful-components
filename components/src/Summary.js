import React, {Component} from 'react'; 
import {SimpleButton} from './SimpleButton'; 
import {HooksButton} from './HooksButton'; 

export default class Summary extends Component {
	constructor(props) {
		super(props); 
		this.state = {
			counter: 0
		}
	}

	incrementCounter = (increment) => {
		this.setState((state) => {return {counter: state.counter + increment}}); 
	}

	render () {
		const props = this.props; 

		return (
			<React.Fragment>  	
				<td>{props.index + 1}</td>
				<td>{props.name}</td>
				<td>{props.name.length}</td>
				<td>
					<SimpleButton
						className="btn btn-warning btn-sm m-1"
						callback={props.reverseCallback}
						text={`Reverse (${props.name})`}
						counter={this.state.counter}
						incrementCallback={this.incrementCounter}
					/>
					<HooksButton
						className="btn btn-info btn-sm m-1"
						callback={() => props.promoteCallback(props.name)}
						text={`Promote (${props.name})`}
						counter={this.state.counter}
						incrementCallback={this.incrementCounter}
					/>
				</td>
			</React.Fragment>
		); 
	}
}
