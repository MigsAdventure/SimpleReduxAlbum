import React, { Component } from 'react';
import { connect } from 'react-redux';
import { delPic, editPic } from '../actions/PicActions';

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.editValues = this.editValues.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
    this.state = this.props;
    console.log('modal props: ', this.state);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.client !== this.state.client) {
      this.setState({
        name: nextProps.name,
        image: nextProps.image,
        id: nextProps.id,
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
    console.log('editPackage', editPackage );
    // this.props.editPic(editPackage);
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

                <h4 className='headings title'><b>Name: </b>{name}</h4>
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
