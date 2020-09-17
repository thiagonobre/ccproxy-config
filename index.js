const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
	.get('/ccproxyConfig', (req, res) => {
		function FindProxyForURL(url, host) {
			if (host.indexOf("ccstore") > -1) {
				return "PROXY 127.0.0.1:8088";
			} else {
				return "DIRECT";
			}
		}

		res
			.status(200)
			.type('application/x-javascript-config')
			.send(FindProxyForURL.toString());
	})
	.listen(PORT, () => console.log(`Listening on ${ PORT }`))