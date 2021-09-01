import React from 'react';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';
import { SiBarProps } from '../../../types/bar';


export default class SiBar extends React.Component<SiBarProps> {
  public static propTypes: PropTypes.InferProps<SiBarProps>;
  public static defaultProps: SiBarProps;

  render() {
    return (
      <View
        className={`s-bar s-bar-${this.props.size} s-bg-${this.props.color}`}
      >
        {this.props.children}
      </View>
    );
  }
}

SiBar.defaultProps = {
  size: 'md',
  color: 'transparent',
};

SiBar.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.string,
};
