'use strict';
function ServiceHandler () {

	this.whoami = function (req, res) {
    // To see the header in its entirety, uncomment the following line
    //res.send(JSON.stringify(req.headers));

    // initialize returns as null
    var ipaddress = null,
        language = null,
        software = null;

    ipaddress = req.ip;

    language = req.headers["accept-language"].split(',')[0];

    var softwareRegEx = /\((.*?)\)/;
    software = req.headers["user-agent"].match(softwareRegEx)[1];

    res.json({
        ipaddress: ipaddress,
        language: language,
        software: software
      });

	};
}

module.exports = ServiceHandler;
