
const DEFAULT_ROOM = '0'

export default function listenWebSocket (io, store) {
  io.on('connection', (socket) => {
    console.log('a user connection😊')

    socket.emit("state", store.getState())

    socket.on('disconnect', function () {
      console.log('user disconnect')
    })
  })
}