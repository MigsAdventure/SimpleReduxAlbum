import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import Polaroid from 'polaroid-image';
import { delPic, editPic } from '../actions/PicActions';

class ResultsTable extends Component {
  constructor() {
    super();
    this.state = {
      itemEdit: false,
    };
    this.deletePic = this.deletePic.bind(this);
  }
  deletePic(id) {
    console.log('delete: ', id)
    this.props.delPic(id);
  }

  render() {
    const results = this.props.results;
    return (
      <div>
        {
          results.map((pic) => {
            return (
              <div className='polContainer' key={pic.id} onClick={() => this.deletePic(pic.id)} id={pic.id} >
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

  editPic() {
    dispatch(editPic());
  },

});

export default connect(null, mapDispatchToProps)(ResultsTable);
