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
      sorting: false,
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

  sortPics() {
    this.setState({
      sorting: true,
    });
  }

  render() {
    let results = this.props.results;
    console.log(this.state.sorting)
    if (this.state.sorting) {
      results.sort(a, b => {
        return a.name - b.name;
      })
    }
    return (
      <div>
        <Modal edit={this.state.itemEdit} />
        <input type="text" placeholder='search' ref='searchInput' onChange={() => this.search()}/>
        {/* <button onClick={this.sortPics}>sort</button> */}
        {
          this.state.search ?
          results.map((pic) => {
            if (pic.name.toLowerCase().includes(this.state.search.toLowerCase())) {
              return (
                <div className='polContainer' key={pic.id} onClick={() => this.openModal(pic)} data-toggle='modal' data-target='#myModal' >
                  <Polaroid imgSrc={pic.image} zoom='false' />
                  <h4>{pic.name}</h4>
                </div>
              );
            }
          })
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
