import React from 'react';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';
import { SiSearchProps, SiSearchState } from '../../../types/search';

import Input from '../input/index';

export default class SiSearch extends React.Component<
  SiSearchProps,
  SiSearchState
> {
  public static propTypes: PropTypes.InferProps<SiSearchProps>;
  public static defaultProps: SiSearchProps;

  constructor(props: SiSearchProps) {
    super(props);
    this.state = {
      searchVal: '',
    };
  }

  handleChange = (e: any) => {
    this.setState({ searchVal: e });
    this.props.onSearch(e);
  };

  onSearch = () => {
    this.props.onSearch();
    this.handleChange('');
  };

  render() {
    return (
      <View className={`row s-search s-pa-${this.props.padding}`}>
        <Input
          style='flex-grow: 1'
          value={this.state.searchVal}
          onChange={this.handleChange}
        ></Input>
      </View>
    );
  }
}

SiSearch.defaultProps = {
  padding: 'md',
  onSearch: () => {},
};

SiSearch.propTypes = {
  padding: PropTypes.string,
  onSearch: PropTypes.func,
};
