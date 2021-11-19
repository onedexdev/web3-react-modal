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
