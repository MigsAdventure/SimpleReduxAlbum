import React, { Component } from 'react';
import { addPic } from '../actions/PicActions';
import uuid from 'uuid';

import { connect } from 'react-redux';


class InputForm extends Component {
  constructor() {
    super();
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    const { picInput, picName } = this.refs;
    let picPackage = {
      image: picInput.value,
      id: uuid(),
      name: picName.value,
    }
    this.props.addPic(picPackage);
  }

  render (){
    return (
      <form onSubmit={this.submitForm}>
        <input type="text" placeholder='Enter Name' ref='picName' />
        <input type="text" placeholder='Add picture url' ref='picInput' />
        <button className='btn btn-primary'>Add</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  allPics: state.allPics,
});


const mapDispatchToProps = dispatch => ({
  addPic(picPackage) {
    dispatch(addPic(picPackage));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
