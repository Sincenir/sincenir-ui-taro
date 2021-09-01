import { ComponentClass } from 'react';
import SiComponent from './base';

export interface SiBadgeProps extends SiComponent {
  /**
   * @description： 角标内容
   * @default '默认值'
   */
  label: string | number;
  /**
   * @description 角标颜色
   * @default 'red'
   */
  color?: string;
  /**
   * @description 角标文字颜色
   * @default 'white'
   */
  textColor?: string;
}

/**
 * @description: 标记小组件
 * @param label: 标记中显示的内容
 * @param color: 背景色（参考颜色表）
 * @param textColor: 文字色（参考颜色标）
 */
declare const SiBadge: ComponentClass<SiBadgeProps>;

export default SiBadge;
