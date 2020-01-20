import React, {Component} from 'react';


class cTitle extends Component {
    render() {
        return (
            <div className="component-title title">
            { this.props.content }
            </div>
        )      
    }
  }

export default cTitle;