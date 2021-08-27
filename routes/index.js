const adminRouter = require("./admin");
const customerRouter = require("./customer");

const router = (app) => {

    app.use("/admin", adminRouter)

    app.use("/customer", customerRouter)

    app.get("/", (req, res) => {
        res.send("<h1>HELLO</h1>")
    })
}

module.exports = router;