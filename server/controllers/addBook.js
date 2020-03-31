const http = require('http')
const { mysql } = require('../qcloud')

// https://developers.google.com/books/docs/v1/using?csw=1

// https://www.googleapis.com/books/v1/volumes?q=isbn:isbnCode
// http://49.234.70.238:9001/book/worm/isbn?isbn=9787516820940

module.exports = async ctx => {
    var isbn = ctx.request.body.isbn
    if (isbn) {
        try {
            let url = 'http://49.234.70.238:9001/book/worm/isbn?isbn=' + isbn
            console.log('Start Scan Book: ' + url)
            const bookinfo = await getJSON(url)
            console.log(bookinfo)

            const { name, author, publisher, title } = bookinfo.data[0]

            console.log({ name, author, publisher, title, isbn })

            try {
                await mysql('books').insert({
                    isbn, name, author, publisher, title
                })

                ctx.state.data = {
                    name,
                    msg: 'Success',
                    bookinfo: bookinfo
                }
            } catch (error) {
                ctx.state = {
                    code: -1,
                    data: {
                        msg: 'Failed to add book: ' + error.sqlMessage
                    }
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
}

function getJSON(url) {
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let urlData = ''
            res.on('data', data => {
                urlData += data
            })

            res.on('end', data => {
                console.log("urlData: " + urlData)
                const bookinfo = JSON.parse(urlData)
                if (bookinfo.data != null) {
                    resolve(bookinfo)
                } else {
                    reject(bookinfo)
                }
            })
        })
    })
}