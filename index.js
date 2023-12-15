// import json-server using require methode.

const jsonserver = require('json-server')

// create server

const server = jsonserver.create()

const router=jsonserver.router('db.json')

// create middleware : is used to parse json data

const middleWare = jsonserver.defaults()

// Set port for server

const PORT = process.env.PORT || 4000

// Use middleware in server

server.use(middleWare)

server.use(router)

// to work server ; here PORT = 4000

server.listen(PORT, () => {
    console.log('media player server started at port :'+PORT);
})

// 