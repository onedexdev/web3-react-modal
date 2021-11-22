/* eslint-disable no-useless-escape */
export function openWebsocket(
  url = 'ws://127.0.0.1:1248',
  callBack: (res: any, e: any) => void
) {
  try {
    const socket = new WebSocket(url)
    socket.onopen = function () {
      callBack && callBack(true, null)
    }
    socket.onerror = function (error) {
      callBack && callBack(null, error)
    }
    socket.onmessage = function (_) {}
  } catch (e) {
    callBack && callBack(null, e)
  }
}
export function isEmail(val: string) {
  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (!regEmail.test(val)) {
    return false
  }
  return true
}
