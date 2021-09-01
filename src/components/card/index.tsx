import React from 'react';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';
import { SiCardProps } from '../../../types/card';


export default class SiCard extends React.Component<SiCardProps> {
  public static propTypes: PropTypes.InferProps<SiCardProps>;
  public static defaultProps: SiCardProps;

  getClass = () => {
    const className: Array<string> = this.props.className
      ? this.props.className.split(' ')
      : [];
    className.push('s-card');
    className.push('s-ma-md');
    !this.props.square && className.push('s-radius');
    !this.props.flat && className.push('s-shadow');
    this.props.bordered && className.push('s-border');

    return className.join(' ');
  };

  render() {
    return (
      <View className={this.getClass()} style={this.props.style}>
        {this.props.children}
      </View>
    );
  }
}

SiCard.defaultProps = {
  dark: false,
  square: false,
  flat: false,
  bordered: false,
};

SiCard.propTypes = {
  dark: PropTypes.bool,
  square: PropTypes.bool,
  flat: PropTypes.bool,
  bordered: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.string,
};
