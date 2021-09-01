import React from 'react';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';
export default class SiSeparator extends React.Component {
    constructor() {
        super(...arguments);
        this.getStyle = () => {
            // 垂直
            if (this.props.vertical) {
                if (this.props.inset) {
                    return `margin:${this.props.spaced}px 0px; width: 1px; height: cacl(100% - ${Number(this.props.spaced) * 2}px)`;
                }
                else {
                    return 'width: 1px; height: 100%';
                }
            }
            // 水平
            else {
                if (this.props.inset) {
                    return `margin: 0px ${this.props.spaced}px; width: cacl(100% - ${Number(this.props.spaced) * 2}px); height: 1px;`;
                }
                else {
                    return 'width: 100%; height: 1px';
                }
            }
        };
    }
    render() {
        return (React.createElement(View, { className: `s-separator ${this.props.className}`, style: `${this.getStyle()}; ${this.props.style}` }));
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
//# sourceMappingURL=Separator.js.map