import React from 'react';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';
import Input from '../input/index';
export default class SiSearch extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = (e) => {
            this.setState({ searchVal: e });
            this.props.onSearch(e);
        };
        this.onSearch = () => {
            this.props.onSearch();
            this.handleChange('');
        };
        this.state = {
            searchVal: '',
        };
    }
    render() {
        return (React.createElement(View, { className: `row s-search s-pa-${this.props.padding}` },
            React.createElement(Input, { style: 'flex-grow: 1', value: this.state.searchVal, onChange: this.handleChange })));
    }
}
SiSearch.defaultProps = {
    padding: 'md',
    onSearch: () => { },
};
SiSearch.propTypes = {
    padding: PropTypes.string,
    onSearch: PropTypes.func,
};
//# sourceMappingURL=index.js.map