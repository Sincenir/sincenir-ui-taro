import { ComponentClass } from 'react';
import SiComponent from './base';

export interface SiBarProps extends SiComponent {
  /**
   * @description: 尺寸 参考值：xs sm md lg xl
   * @default 'md'
  */
  size?: string;
  /**
   * @description: 颜色 参考颜色对照表
   * @default 'transparent'
  */
  color?: string;
}

/**
 * @description: 栏组件 一般用于dialog的头部
 * @param size: 尺寸
 * @param color: 颜色
 * @param children: 插槽 -> 栏中的内容
*/
declare const SiBar: ComponentClass<SiBarProps>;

export default SiBar;
