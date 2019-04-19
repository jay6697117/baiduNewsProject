/*
 * @Description: 根据选择器选取元素 selector.js
 * @Author: Steve Zhang
 * @Github: https://github.com/jay6697117/
 * @LastEditors: Steve Zhang
 * @Date: 2019-04-09 11:47:18
 * @LastEditTime: 2019-04-16 14:44:44
 */

/**
 * @description 通过选择器获取 Node 和 NodeList
 * @param {String} selector
 * @returns { Node | NodeList | Null | Error } dom[0] | dom | null | error
 */

function $(selector) {
  try {
    if (typeof selector === 'string') {
      let dom = document.querySelectorAll(selector);
      if (dom.length == 1) {
        return dom[0];
      } else if (dom.length > 1) {
        return dom;
      } else {
        alert('选择器错误或者不存在');
        return null;
      }
    } else {
      alert('选择器必须是字符串');
      return null;
    }
  } catch (error) {
    alert('错误捕获: 请在控制台查看具体错误信息');
    return error;
  }
}
