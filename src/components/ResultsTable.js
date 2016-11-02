import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import Polaroid from 'polaroid-image';
import { delPic } from '../actions/PicActions';
import Modal from './Modal';

class ResultsTable extends Component {
  constructor() {
    super();
    this.state = {
      itemEdit: null,
    };
    this.deletePic = this.deletePic.bind(this);
  }
  deletePic(id) {
    this.props.delPic(id);
  }

  openModal(pic) {
    this.setState({
      itemEdit: pic,
    }
  );

  }

  render() {
    const results = this.props.results;
    console.log('results in TABLE: ', results)
    return (
      <div>
        <Modal edit={this.state.itemEdit} />
        {
          results.map((pic) => {
            return (
              <div className='polContainer' key={pic.id} onClick={() => this.openModal(pic)} data-toggle='modal' data-target='#myModal' >
                <button className='btn-danger btn btn-xs' onClick={() => this.deletePic(pic.id)} id={pic.id} >x</button>
                <Polaroid imgSrc={pic.image} zoom='false' />
                <h4>{pic.name}</h4>
              </div>
            );
          })
        }
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  delPic(id) {
    dispatch(delPic(id));
  },
});

export default connect(null, mapDispatchToProps)(ResultsTable);
