class Admin {
    get = (req, res) => {
        res.send("<h1>Admin</h1>");
    }
}

module.exports = new Admin;