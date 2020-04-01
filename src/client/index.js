import { socket } from "./io"

socket.on("state", state => {
  console.log("获取数据", state)
})