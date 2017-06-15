import React, {Component} from 'react';
import {connect } from 'react-redux';
import {selectFamily} from '../actions/index';
import {bindActionCreators} from 'redux';

class FamilyList extends Component {

		renderList(){
			
			return (this.props.family.map((member)=>{
				return(
						<li className="list-group-item"
							onClick={()=>this.props.selectFamily(member)}
						 key={member.name}> {member.name}</li>

					)
			}))	
		}

	render(){
		return (
			<div>
			<h3>Qureshi Family List</h3>
				<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		family:state.family
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({selectFamily: selectFamily}, dispatch);	
}
export default connect(mapStateToProps,mapDispatchToProps)(FamilyList)