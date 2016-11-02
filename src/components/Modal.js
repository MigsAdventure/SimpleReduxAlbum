import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editPic } from '../actions/PicActions';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.editValues = this.editValues.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
    this.state = this.props;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.state) {
      this.setState({
        name: nextProps.edit.name,
        image: nextProps.edit.image,
        id: nextProps.edit.id,
      });
    }
  }

  saveEdit() {
    let { name, image, id } = this.state;
    let editPackage = {
      name,
      image,
      id,
    };
    this.props.editPic(editPackage);
  }

  editValues() {
    let { editName, editImage } = this.refs;
    let { name, image } = this.state;

    this.setState({
      name: editName.value,
      image: editImage.value,
    });
  }


  render() {
    let { name, image, id } = this.state || [];
    return (
      <div>
        <div
          className={`modal fade bs-example-modal-md firstLevelModal`}
          tabIndex='-1' id='myModal' role='dialog'
          aria-labelledby='mySmallModalLabel'
        >
          <div className='modal-dialog modal-md secondLevelModal' role='document'>
            <div className='modal-content thirdLevelModal'>
              <div className='modalPicContainer fourthLevelModal' >

                <h3 className='headings title'>{name}</h3>
                <img src={image || 'http://glitch.news/wp-content/uploads/sites/19/2016/08/anon-troll.jpg'}
                  role='presentation' />
              </div>
              <div className='editContainer'>
                <h3>Edit Photo</h3>
                <form>
                  <input type='text' ref='editName' placeholder='Name' onChange={this.editValues} value={name} />
                  <input type='text' ref='editImage' placeholder='new pic url' onChange={this.editValues} value={image} />
                </form>
              </div>
              <div className='btnContainer'>
                <button className='btn btn-primary' data-dismiss='modal' onClick={() => this.saveEdit()} >Save</button>
                <button className='btn btn-success' data-dismiss='modal'>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

let mapDispatchToProps = dispatch => ({
  editPic(editPackage) {
    dispatch(editPic(editPackage));
  },

});

export default connect(null, mapDispatchToProps)(Modal);
