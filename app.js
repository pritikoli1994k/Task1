const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Pipeline is Successfully completed....!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
