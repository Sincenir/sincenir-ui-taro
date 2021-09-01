import React from 'react';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';
export default class SiDialog extends React.Component {
    close() {
        this.props.closeDialog();
    }
    a(e) {
        // 阻止事件冒泡
        e.stopPropagation();
    }
    render() {
        console.log(this.props.flag);
        if (this.props.flag) {
            return (React.createElement(View, { key: 'open', onClick: () => {
                    this.close();
                }, className: `s-dialog-container s-position-${this.props.position}` },
                React.createElement(View, { className: `s-dialog ${this.props.fullWidth ? 'full-width' : ''}`, style: `animation: ${this.props.position == 'center'
                        ? 'action_rotateY'
                        : 'action_fromY'} .5s`, onClick: (e) => {
                        this.a(e);
                    } }, this.props.children)));
        }
        else {
            return React.createElement(View, { key: 'close' }, "111");
        }
    }
}
SiDialog.defaultProps = {
    flag: false,
    position: 'center',
    fullWidth: false,
    closeDialog: () => { },
};
SiDialog.propTypes = {
    flag: PropTypes.bool,
    position: PropTypes.string,
    fullWidth: PropTypes.bool,
    closeDialog: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.string,
};
//# sourceMappingURL=index.js.map