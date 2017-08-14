export let trim = function ($str) {
  if (!$str)
    return $str;

  if (typeof $str != 'string')
    $str = $str.toString();

  return $str.replace(/(^\s*)|(\s*$)/g, "")
}

export let jsonDecode = function ($str) {
  try {
    return JSON.parse($str)
  } catch (e) {
    return {}
  }
}

export let jsonEncode = function ($jsonObj) {
  try {
    return JSON.stringify($jsonObj)
  } catch (e) {
    return "{}"
  }
}

/**
 * 获得查询字符串 格式为 ["key=value", "key=value"]
 * @returns {string}
 */
export let getQueryString = function () {
  var result = location.search.match(new RegExp("[\?\&][^\?\&]+=[^\?\&]+", "g"));
  if (result == null) {
    return "";
  }

  for (var i = 0; i < result.length; i++) {
    result[i] = result[i].substring(1);
  }
  return result;
}

/**
 * 获得指定的name的查询字符串
 * @param name
 * @returns {string}
 */
export let getQueryStringByName = function (name) {
  var result = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
  if (result == null || result.length < 1) {
    return "";
  }
  return result[1];
}

export let getUriPath = function () {
  let location = window.location;
  return location.protocol + '//' + location.hostname + location.pathname
}

/**
 * 验证是否为手机号
 * @param phoneNumber
 */
export let isPhoneNumber = function (phoneNumber) {
  return phoneNumber.match(/^((1[3,5,8][0-9])|(14[5,7])|(17[0,1,6,7,8,3]))\d{8}$/)
}

/**
 * 验证是否都为数字
 */
export let isNumber = function (number) {
  return Number.isInteger(number)
}
