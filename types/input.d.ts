import { ComponentClass } from 'react';
import SiComponent from './base';

export interface SiInputProps extends SiComponent {
  maxlength: string
  borderless: boolean
  value: string
  placeholder: string
  size: 'xs' | 'sm' | 'md' | 'xl' | 'lg'
  onChange: (e: any) => void
}

/**
 * @description: 栏组件 一般用于Input的头部
 * @param maxlength: 输入框内最大长度
 * @param borderless: 是否是无边界模式
 * @param value: 输入框的值
 * @param placeholder: 输入框显示的提示信息
 * @param size: 输入框的尺寸
 * @param onChange: 输入框内容改变时的回调
*/
declare const SiInput: ComponentClass<SiInputProps>;

export default SiInput;
