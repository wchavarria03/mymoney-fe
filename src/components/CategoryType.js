import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import * as categoryTypeActions from '../actions/categoryTypeActions';
import CategoryTypePage from '../pages/CategoryType/CategoryType';

class CategoryType extends Component {
  componentWillMount() { // HERE WE ARE TRIGGERING THE ACTION
    this.props.stuffActions.fetchStuff();
  }

  addCategoryType() {
    console.log('Adding category type');
  }

  render() {
    return <CategoryTypePage categoryTypes={this.props.categoryTypes} addCategoryType={this.addCategoryType} />;
  }
};

const mapStateToProps = (state) => ({
  categoryTypes: state.categoryTypes,
});

const mapDispatchToProps = (dispatch) => ({
  categoryTypeActions: bindActionCreators(categoryTypeActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryType);
