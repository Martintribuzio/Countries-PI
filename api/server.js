const server = require('./src/app.js')
const { conn } = require('./src/db.js')

conn.sync().then(() => {
  server.listen(3001, () => {
    console.log('SERVER LISTENING AT PORT 3001')
  })
})
