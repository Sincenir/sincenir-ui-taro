import React from 'react';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';
import { SiSeparatorProps } from '../../../types/separator';

export default class SiSeparator extends React.Component<SiSeparatorProps> {
  public static propTypes: PropTypes.InferProps<SiSeparatorProps>;
  public static defaultProps: SiSeparatorProps;

  getStyle = () => {
    // 垂直
    if (this.props.vertical) {
      if (this.props.inset) {
        return `margin:${
          this.props.spaced
        }px 0px; width: 1px; height: cacl(100% - ${
          Number(this.props.spaced) * 2
        }px)`;
      } else {
        return 'width: 1px; height: 100%';
      }
    }
    // 水平
    else {
      if (this.props.inset) {
        return `margin: 0px ${this.props.spaced}px; width: cacl(100% - ${
          Number(this.props.spaced) * 2
        }px); height: 1px;`;
      } else {
        return 'width: 100%; height: 1px';
      }
    }
  };

  render() {
    return (
      <View
        className={`s-separator ${this.props.className}`}
        style={`${this.getStyle()}; ${this.props.style}`}
      ></View>
    );
  }
}

SiSeparator.defaultProps = {
  inset: false,
  vertical: false,
  spaced: 32,
};
SiSeparator.propTypes = {
  inset: PropTypes.bool,
  vertical: PropTypes.bool,
  spaced: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
