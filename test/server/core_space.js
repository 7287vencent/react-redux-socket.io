import { expect } from 'chai'
import { v1 } from 'uuid'
import { fromJS, Map, List } from 'immutable'
// 第一个测试
// describe("first test", () => {
//   it("should work!", () => {
//     expect(1 + 1).to.equal(2)
//   })
// })

import {
  addRoom,
  removeRoom
} from "../../src/server/core.js"
// ttd 测试模式
describe("rooms", () => {
  // 测试 添加删除

  it("能够添加房间:addRoom", () => {
    var firstRoom = { name: "first room", id: v1(), owner: "eisneim" }
    const nextState = addRoom(undefined, firstRoom)
    const rooms = nextState.get("rooms")
    expect(rooms).to.be.ok
    expect(rooms.get(0)).to.equal(Map(firstRoom))
    // 区别 初始数据 为 undefined
    const nextNextState = addRoom(nextState, {
      name: "second room", owner: "terry"
    })
    // 获取深层次的数据
    expect(nextNextState.getIn(["rooms", 1, "name"])).to.equal("second room")
  })

  const mockState = fromJS({
    rooms: [{ name: "first room", id: v1(), owner: "eisneim" }]
  })

  it("能被创建者删除", () => {
    const state = removeRoom(mockState, {
      id: mockState.getIn(["rooms", 0, "id"]),
      user: "eisneim"
    })

    expect(state.get("rooms").size).to.equal(0)
  })

  it("不能被其他人删除", () => {
    const state = removeRoom(mockState, {
      id: mockState.getIn(["rooms", 0, "id"]),
      user: "terry"
    })
    expect(state.get("rooms").size).to.equal(1)
  })
})

