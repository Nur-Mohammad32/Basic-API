import "dotenv/config";
// require('dotenv').config()
import express from "express";
import logger from "./logger.js";
import morgan from "morgan";


const app = express();
const port = process.env.PORT || 3033;

app.use(express.json());

const morganFormat = ':method :url :status :response-time';

app.use(morgan(morganFormat, {
    stream: {
        write: (message) => {
            const logObject = {
                method: message.split(' ')[0],
                url: message.split(' ')[1],
                status: message.split(' ')[2],
                responseTime: message.split(' ')[3],
            };
            logger.info(JSON.stringify(logObject))
        }
    }
}))

let teaData = [];
let nextID = 1;

//add new tea
app.post("/teas", (req, res) => {
    console.log("A post request is running");
    
  const { name, price } = req.body;
  const newTea = { id: nextID++, name, price };
  teaData.push(newTea);
  res.status(201).send(newTea);
});

//get all tea
app.get("/teas", (req, res) => {
  res.status(200).send(teaData);
});

//get tea with id
app.get("/teas/:id", (req, res) => {
  const tea = teaData.find((t) => t.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send("tea not found");
  }
  res.status(200).send(tea);
});

//update tea
app.put("/teas/:id", (req, res) => {
  const tea = teaData.find((t) => t.id === parseInt(req.params.id));

  if (!tea) {
    return res.status(404).send("tea not found");
  }
  const { name, price } = req.body;
  tea.name = name;
  tea.price = price;
  res.send(200).send(tea);
});

//delete tea with id
app.delete("/teas/:id", (req, res) => {
  teaData.findIndex((t) => t.id === parseInt9req.params.id);
  if (index === -1) {
    return res.status(404).send("tea not found");
  }
  teaData.splice(index, 1);
  return res.status(404).send("deleted");
});

// app.get("/", (req, res) => {
//     res.send("Hello from Nur Mohammad")
// })
// app.get("/nur", (req, res) => {
//     res.send("Hello from Nur Mohammad and his teammates")
// })
// app.get("/nurmd", (req, res) => {
//     res.send("Hello from Nur Mohammad and his teammates and also from CSE JU")
// })

app.listen(port, () => {
  console.log(`Server is running at port : ${port}...`);
});
