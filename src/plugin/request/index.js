/**
 * 请求
 */
import $ from "jquery";

function request(url, data = {}, method = "get") {
  return new Promise(function (reslove, reject) {
    $.ajax({
      url: url,
      method: method,
      data: {},
      dataType: 'json',
      success: function (data) {
        reslove(data)
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        reject({
          XMLHttpRequest,
          textStatus,
          errorThrown
        })
      }
    })
  })

}

export default {
  install: function (Vue, options) {
    if (this.installed)
      return;

    if (!options)
      options = {};

    this.options = options;
    Vue.prototype.$request = this;
  },
  get: function (url, data) {
    url = (this.options.baseUrl || '') + url
    return request(url, data)
  },
  post: function (url, data) {
    url = (this.options.baseUrl || '') + url
    return request(url, data, 'post')
  },
}
