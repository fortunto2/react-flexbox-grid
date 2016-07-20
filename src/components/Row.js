import React, {Component, PropTypes} from 'react';

const ModificatorType = PropTypes.oneOf(['xs', 'sm', 'md', 'lg']);

export default class Row extends Component {
  render() {
    return React.createElement(this.props.tagName || 'div', Object.assign({}, this.props, {
      className: 'row',
    }), this.props.children);
  }
}

Row.propTypes = {
  reverse: PropTypes.bool,
  start: ModificatorType,
  center: ModificatorType,
  end: ModificatorType,
  top: ModificatorType,
  middle: ModificatorType,
  bottom: ModificatorType,
  around: ModificatorType,
  between: ModificatorType,
  first: ModificatorType,
  last: ModificatorType,
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node
};
