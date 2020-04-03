import React, {Component} from 'react';

class Home extends Component {
  render() {
    return (
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-header">
                Dashboard <small>Summary of your App</small>
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
