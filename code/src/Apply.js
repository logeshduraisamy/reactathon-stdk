import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Apply extends Component {
  renderList() {
      return this.props.joblist.map((job) => {
          return (
              <li
                  key={job.job_id}
              >
                  {job.job_name} {job.location}
              </li>
          );
      });
  }
  render() {
    return (
      <ul>
                {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
    return {
        joblist: state.joblist
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators(null, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Apply);
