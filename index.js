const express = require("express");
const router = require("./routes")

const app = express();
const PORT = 5000;

router(app);

app.listen(PORT, () => {
    console.log(`SERVER is running on port : ${PORT}`);
});