import React from 'react';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';
import { SiDialogProps } from '../../../types/dialog';


export default class SiDialog extends React.Component<SiDialogProps> {
  public static propTypes: PropTypes.InferProps<SiDialogProps>;
  public static defaultProps: SiDialogProps;

  close() {
    this.props.closeDialog();
  }

  a(e: Event) {
    // 阻止事件冒泡
    e.stopPropagation();
  }

  render() {
    console.log(this.props.flag);
    if (this.props.flag) {
      return (
        <View
          key='open'
          onClick={() => {
            this.close();
          }}
          className={`s-dialog-container s-position-${this.props.position}`}
        >
          <View
            className={`s-dialog ${this.props.fullWidth ? 'full-width' : ''}`}
            style={`animation: ${
              this.props.position == 'center'
                ? 'action_rotateY'
                : 'action_fromY'
            } .5s`}
            onClick={(e) => {
              this.a(e as any);
            }}
          >
            {this.props.children}
          </View>
        </View>
      );
    } else {
      return <View key='close'>111</View>;
    }
  }
}

SiDialog.defaultProps = {
  flag: false,
  position: 'center',
  fullWidth: false,
  closeDialog: () => {},
};

SiDialog.propTypes = {
  flag: PropTypes.bool,
  position: PropTypes.string,
  fullWidth: PropTypes.bool,
  closeDialog: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.string,
};
