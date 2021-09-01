import { ComponentClass } from 'react';
import SiComponent from './base';

export interface SiDialogProps extends SiComponent {
  flag: boolean
  position: string
  fullWidth: boolean
  closeDialog: () => void
}

/**
 * @description: 栏组件 一般用于dialog的头部
 * @param flag: 是否是扁平的
 * @param position: 所在位置，如：“center”
 * @param fullWidth: 是否是满宽的
 * @param closeDialog: 关闭dialog按钮的回调函数
*/
declare const SiDialog: ComponentClass<SiDialogProps>;

export default SiDialog;
