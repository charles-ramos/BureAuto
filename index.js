require("./services/IoServices")

const {httpServer} = require("./app")

httpServer.listen(port, function() {
    console.log("Running on port", port)
})