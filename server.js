const express = require("express")
const app = express();
const port = 2000;

app.get("/", (req, res) => {
    res.send("hi");
});

app.listen(port, () => {
    console.log(`server running PORT ${port}...!`);
})