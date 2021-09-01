import { ComponentClass } from 'react';
import SiComponent from './base';

export interface SiSeparatorProps extends SiComponent {
  inset: boolean
  vertical: boolean
  spaced: string | number
}

/**
 * @description: 栏组件 一般用于Separator的头部
*/
declare const SiSeparator: ComponentClass<SiSeparatorProps>;

export default SiSeparator;
