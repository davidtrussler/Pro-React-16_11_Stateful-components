import React from 'react'; 
import Summary from './Summary'; 

let names = ['Bob', 'Brigitte', 'Dora']; 

export default function App() {
return (
	<table>
		<thead>
			<tr>
				<th>#</th>
				<th>Name</th>
				<th>Letters</th>
			</tr>
		</thead>
		<tbody>
			{
				names.map((name, index) => 
					<tr key={name}>
						<Summary index={index} name={name}/>
					</tr>
				)
			}
		</tbody>
	</table>
	); 
}
