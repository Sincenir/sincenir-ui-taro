import { ComponentClass } from 'react';
import SiComponent from './base';

export interface SiCardProps extends SiComponent {
  dark: boolean
  square: boolean
  flat: boolean
  bordered: boolean
}

/**
 * @description: 栏组件 一般用于dialog的头部
 * @param dark: 是否开启暗黑模式（暂无）
 * @param square: 是否是方的
 * @param flat: 是否是扁平的
 * @param bordered: 是否需要边框
*/
declare const SiCard: ComponentClass<SiCardProps>;

export default SiCard;
