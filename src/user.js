import React, { Component } from 'react';

class User extends Component{
		constructor(props){
				super(props)
				this.state = {
						nama: "Andreas"
				}
		}
		render(){
				return(
						<div>
							
								<h3>{this.state.nama}</h3>

						</div>

				)
		}
}

export default User