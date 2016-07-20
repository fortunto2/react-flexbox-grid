import React, {Component, PropTypes} from 'react';

export default class Grid extends Component {
  render() {
    return React.createElement(this.props.tagName || 'div', Object.assign({}, this.props, {
      className: (this.props.fluid ? 'container-fluid' : 'container'),
    }), this.props.children);
  }
}

Grid.propTypes = {
  fluid: PropTypes.bool,
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node
};
