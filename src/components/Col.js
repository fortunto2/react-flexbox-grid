import React, {Component, PropTypes} from 'react';

const ModificatorType = PropTypes.oneOfType([PropTypes.number, PropTypes.bool]);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite
// InternetExplorer does not support Number.isFinite (or Number.isInteger)
Number.isFinite = Number.isFinite || function(value) {
    return typeof value === 'number' && isFinite(value);
}

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
// add for skip error with SSR
Number.isInteger = Number.isInteger || function(value) {
  return typeof value === 'number'
         && Number.isFinite(value)
         && !(value % 1);
};

export default class Col extends Component {

  constructor(props) {
    super(props);

    this._classMap = {
      xs: 'col-xs',
      sm: 'col-sm',
      md: 'col-md',
      lg: 'col-lg',
      xsOffset: 'col-xs-offset',
      smOffset: 'col-sm-offset',
      mdOffset: 'col-md-offset',
      lgOffset: 'col-lg-offset'
    };
  }



  render() {
    const classes = [];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    if (this.props.reverse) {
      classes.push('.reverse');
    }

    for (const key in this.props) {
      if (this.props.hasOwnProperty(key) && this._classMap[key]) {
        let colBaseClass = this._classMap[key];
        colBaseClass = Number.isInteger(this.props[key]) ? (colBaseClass + '-' + this.props[key]) : colBaseClass;
        // console.log(colBaseClass);
        classes.push(colBaseClass);
      }
    }

    return React.createElement(this.props.tagName || 'div', Object.assign({}, this.props, {
      className: classes.join(' ')
    }), this.props.children);
  }
}

Col.propTypes = {
  xs: ModificatorType,
  sm: ModificatorType,
  md: ModificatorType,
  lg: ModificatorType,
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  reverse: PropTypes.bool,
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node
};
