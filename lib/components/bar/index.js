import React from 'react';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';
export default class SiBar extends React.Component {
    render() {
        return (React.createElement(View, { className: `s-bar s-bar-${this.props.size} s-bg-${this.props.color}` }, this.props.children));
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
//# sourceMappingURL=index.js.map