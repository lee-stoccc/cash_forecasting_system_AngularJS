/*!
{
  "name": "Binary WebSockets",
  "property": "websocketsbinary",
  "tags": ["websockets"],
  "builderAliases": ["websockets_binary"]
}
!*/
define(["Modernizr"],function(a){a.addTest("websocketsbinary",function(){var d="https:"==location.protocol?"wss":"ws",b;if("WebSocket" in window){if(b="binaryType" in WebSocket.prototype){return b}try{return !!(new WebSocket(d+"://.").binaryType)}catch(c){}}return false})});