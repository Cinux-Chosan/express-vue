import $ from 'jquery';

function getJson(url = '', data = {}, type = 'get') {
  return $.ajax({
      type,
      method: type, // after jQuery 1.9
      url,
      data,
      dataType: 'json'
    })
    .done(data => {
      data
    })
    .fail(err => {
      // tip
      err
    })
    .always(() => {

    })
}

export {
  getJson
}