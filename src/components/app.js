import React, { Component } from 'react';
import FamilyList from '../containers/family_list';
import FamilyDetail from '../containers/family_details';

export default class App extends Component {
  render() {
    return (
    	<div>
    		<FamilyList />
    		<FamilyDetail />
    	</div>

      
    );
  }
}
