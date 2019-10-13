import Express  from "express";

const App :Express.Application = Express();

App.get("/", (req, res) => {
    res.send("Hello world !");
});

App.listen(3000, () => {
    console.log("Example app listening on port 3000 !");
});

