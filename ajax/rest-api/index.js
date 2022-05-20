const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/products", (req, res) => {
	res.send({
		result: true,
		products: [
			{ name: "Samsung Galaxy", price: 54000, qty: 100 },
			{ name: "Samsung M1", price: 30000, qty: 10 },
			{ name: "Oppo 91", price: 24400, qty: 120 },
			{ name: "Vivo 87", price: 55500, qty: 140 },
			{ name: "Iphone 13", price: 34000, qty: 170 },
			{ name: "IPhone X", price: 55000, qty: 10 },
		],
	});
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
