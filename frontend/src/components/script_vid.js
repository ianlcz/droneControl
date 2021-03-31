var canvas = document.getElementById('video-canvas');
var url = 'ws://'+document.location.hostname+':3001/stream';
var player = new JSMpeg.Player(url, {canvas: canvas});