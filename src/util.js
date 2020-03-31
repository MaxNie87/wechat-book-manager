import config from './config'

export function get(url, data) {
    return request(ulr, 'GET', data)
}

export function post(url, data) {
    return request(url, 'POST', data)
}

function request(url, method, data) {
    return new Promise((resolve, reject) => {
        wx.request({
            data,
            method,
            url: config.host + url,
            success: function(res) {
                console.log('send request and success get back.')
                console.log(res)
                if (res.data.code == 0) {
                    resolve(res.data.data)
                } else {
                    reject(res.data)
                }
            }
        })
    })
}

export function showSuccess(info) {
    wx.showModal({
        title: 'Warning',
        content: info})
}

export function showModel(title, info) {
    wx.showModal({
        title : title,
        content : info
    })
}
