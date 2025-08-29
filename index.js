const express = require("express")
const path = require("path");

const app = express()
const PORT = 3000

app.use(express.static("public"));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/checkin", (req, res) => {
	res.render("checkin");
})

app.listen(PORT, () => {
	console.log(`Checkin: http://localhost:${PORT}/checkin`);
});


app.post("/verify", (req, res) => {
	try {
		//TODO: to replace with actual database lookup
		let id = req.body?.id;
		let ids = ["SD_14234", "SD_3452", "SD_39503"];
		let exists = false
		if (ids.includes(id)) {
			exists = true;
		}

		res.json({ exists })
	} catch (error) {
		res.status(500).json({ error: "Cant verify" });
	}
})