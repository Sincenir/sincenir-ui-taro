import { ComponentClass } from 'react';
import SiComponent from './base';

export interface SiSearchProps extends SiComponent {
  padding: string
  onSearch: (v?: string) => void
}

export interface SiSearchState {
  searchVal: string
}

/**
 * @description: 栏组件 一般用于Search的头部
*/
declare const SiSearch: ComponentClass<SiSearchProps>;

export default SiSearch;
