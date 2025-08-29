const express = require("express")
const path = require("path");

const app = express()
const PORT = 3000

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/checkin", (req, res) => {
	res.render("checkin");
})

app.listen(PORT, () => {
	console.log(`Checkin: http://localhost:${PORT}/checkin`);
});
