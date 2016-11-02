import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as PicActions from '../actions/PicActions';
import { getPics, addPic, delPic, editPic } from '../actions/PicActions';
import InputForm from './InputForm';
import ResultsTable from './ResultsTable';

class MainPage extends Component {
  render() {
    let { allPics, delPic, editPic, addPic  } = this.props;
    return (
      <div>
        <InputForm />
        <ResultsTable results={allPics} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allPics: state.picCrud,
});

let mapDispatchToProps = dispatch => ({
  delPic() {
    dispatch(PicActions.delPic());
  },

  editPic() {
    dispatch(PicActions.editPic());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
