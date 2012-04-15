var ws;
setupWebsocket = function() {
    if ("WebSocket" in window) {
        ws = new WebSocket("ws://localhost:8080/websocket");
    } else {
        ws = new MozWebSocket("ws://localhost:8080/websocket");
    }

    ws.onmessage = function( event ) {
        var msg = JSON.parse(event.data).msg;
        console.log(msg);
        document.getElementById('msg').innerHTML = "";
        for(var i=0; i<msg.length; i++) {
        	document.getElementById('msg').innerHTML += "received item " + i + ": " + msg[i] + "<br />";
        }
    }

    ws.onopen = function( event ) {

    }
}

setupWebsocket();
