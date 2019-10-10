/*
 * @Author: cjh
 * @Date: 2019-09-29 11:45:11
 * @LastEditors: cjh
 * @LastEditTime: 2019-09-30 15:37:27
 * @Description: 常用函数库
 */

let Util = {}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * @description: 洗牌函数 修改的是arr的副本，对本数组不做影响
 * @param {type} arr 数组
 */

Util.shuffle = (arr) => {
  let _arr = arr.slice()
  for (let i = 0; i < _arr.length; i++) {
    let j = getRandomInt(0, i)
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
  }
  return _arr
}

/*
* 防抖函数
* @param {*} func 函数体
* @param {*} delay 延时
*/

Util.debounce = (func, delay) => {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

/*
* 节流函数
* @param {*} func 函数体
* @param {*} delay 延时
*/

Util.throttle = (func, delay) => {
  let timer
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(this, args)
        timer = null
      }, delay)
    }
  }
}

/*
* 数组去重
* @param {*} array 数组
*/

Util.unique = (array) => {
  return [...new Set(array)]
}

/**
 * @description: 数组扁平化
 * @param array 数组
 */

Util.flatten = (array) => {
  var res = []
  array.map(item => {
    if(Array.isArray(item)) {
      res = res.concat(Util.flatten(item))
    } else {
      return res
    }
  })
}

export default Util