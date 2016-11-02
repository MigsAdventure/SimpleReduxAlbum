import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import Polaroid from 'polaroid-image';
import { delPic } from '../actions/PicActions';
import Modal from './Modal';

export default class ResultsTable extends Component {
  constructor() {
    super();
    this.state = {
      itemEdit: null,
      search: null,
    };
  }

  openModal(pic) {
    this.setState({
      itemEdit: pic,
    }
  );
  }

  search() {
    let { searchInput } = this.refs;
    this.setState({
      search: searchInput.value,
    });
  }

  render() {
    let results = this.props.results;
    return (
      <div>
        <Modal edit={this.state.itemEdit} />
        <input type="text" placeholder='search' ref='searchInput' onChange={() => this.search()}/>
        {
          results ?
          results.map((pic) => {
            if (pic.name.includes(this.state.search)) {
              return (
                <div className='polContainer' key={pic.id} onClick={() => this.openModal(pic)} data-toggle='modal' data-target='#myModal' >
                  <Polaroid imgSrc={pic.image} zoom='false' />
                  <h4>{pic.name}</h4>
                </div>
              );
            }
          } )
          :
          results.map((pic) => {

            return (
              <div className='polContainer' key={pic.id} onClick={() => this.openModal(pic)} data-toggle='modal' data-target='#myModal' >
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
