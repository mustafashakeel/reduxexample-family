import React, {Component} from 'react';
import {connect } from 'react-redux';

class FamilyDetail extends Component {
	render(){
				console.log(" ___" , this.props);
				if(!this.props.member){
					return <div> please Click on the Left</div>;
				}
		
		return(

			<div>

				<h5> Qureshi Member Name:</h5>
				<h4> {this.props.member.name}</h4>
				<h4>Spouse Name :  {this.props.member.spouse}</h4>

			 </div>

			)
	}
}

function mapStateToProps(state){

	console.log(" State ", state);
	return{
		member:state.ActiveMember
	};
}
export default connect(mapStateToProps)(FamilyDetail);