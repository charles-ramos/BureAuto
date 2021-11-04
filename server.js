const express = require("express")
const serveStatic = require("serve-static")
const path = require("path")
app = express()
app.use(serveStatic(path.join(__dirname, "dist")))

app.listen(process.env.PORT || 3000, function() {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env)
})