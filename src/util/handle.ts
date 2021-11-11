// @ts-nocheck
function getType(type: string) {
  return function(v: unknown) {
    return Object.prototype.toString.call(v).slice(8, -1) === type;
  };
}
export function isUndef(v: unknown) {
  return v === void 0;
}
export const isArray = getType("Array");
export const isObject = getType("Object");
export const isString = getType("String");
export const isNumber = getType("Number");
export const isSymbol = getType("Symbol");
export const isNull = getType("Null");
export const isDate = getType("Date");
export const isFunction = getType("Function");

/**
 * @description：补零工具
 * @param str: 需要补零的 string | number
 * @param n: 需要补成几位，也就是字符串长度
*/
export function PrefixZero(str: string | number, n = 4) {
  if (!isNumber(str) && !isString(str)) {
    throw new TypeError("传入类型不是 number | string");
  }
  return (Array(n).join('0') + str).slice(-n);
}


// 函数防抖
export function debounce(fn: Function, wait: number) {
  let timer = null;
  return function () {
      const context = this
      const args = arguments
      if (timer) {
          clearTimeout(timer);
          timer = null;
      }
      timer = setTimeout(function () {
          fn.apply(context, args)
      }, wait)
  }
}


// 函数节流
export function throttle(fn: Function, gapTime: number) {
  let _lastTime = null;

  return function () {
    // + new Date() 将时间转换成秒
    // + 将元素转换为 Number 类型
    let _nowTime = + new Date()
    if (_nowTime - _lastTime > gapTime || !_lastTime) {
      fn();
      _lastTime = _nowTime
    }
  }
}

/**
 * @description: 基础深拷贝， 请保证你的对象不是构造函数生成的， 并且没有 Date、RegExp、Error、Function、NaN
 */
 export function cloneDeep(obj: object): object {
  if (!isObject(obj)) {
    throw new TypeError("传入类型不是 Object");
  }
  return JSON.parse(JSON.stringify(obj));
}



function getBool(trueFlag: unknown, falseFlag: unknown) {
  return function(v: unknown) {
    if (v === trueFlag) return true
    else if (v === falseFlag) return false
    else return null
  } 
}

export const stringToBool = getBool('true', 'false')
export const oneOrZeroToBool = getBool(1, 0)
export const oneOrZeroStrToBool = getBool('1', '0')