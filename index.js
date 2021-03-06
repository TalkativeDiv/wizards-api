const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());


app.get("/Dobby", (req, res) => {
  res.status(200).send({
    person: "Dobby is free π€ππ§¦π§",
    name: "Dobby",
  });
});
app.get("/Harry", (req, res) => {
  res.status(200).send({
    person: "β‘π€πͺπ¦",
    name: "Harry",
  });
});
app.get("/Hermoine", (req, res) => {
  res.status(200).send({
    person: "π§πͺπ¦¦ππ",
    name: "Hermoine",
  });
});
app.get("/Ron", (req, res) => {
  res.status(200).send({
    person: "π¦πͺππ",
    name: "Ron",
  });
});
app.get("/Luna", (req, res) => {
  res.status(200).send({
    person: "Luna ππΉβ­",
    name: "Luna",
  });
});
app.get("/Umbridge", (req, res) => {
  res.status(200).send({
    person: "Umbridge ππ»",
    name: "Umbridge",
  });
});
app.get("/Ginny", (req, res) => {
  res.status(200).send({
    person: "Ginny β¨πβ€οΈ",
    name: "Ginny",
  });
});
app.get("/George", (req, res) => {
  res.status(200).send({
    person: "George πππ",
    name: "George",
  });
});
app.get("/Fred", (req, res) => {
  res.status(200).send({
    person: "Fred πππ€",
    name: "Fred",
  });
});
app.get("/Filch", (req, res) => {
  res.status(200).send({
    person: "Filch π‘π£π¨βπΌ",
    name: "Filch",
  });
});
app.get("/Bill", (req, res) => {
  res.status(200).send({
    person: "Bill πβοΈπΉ",
    name: "Bill",
  });
});
app.get("/Lily", (req, res) => {
  res.status(200).send({
    person: "Lily Potter πΈπ",
    name: "Lily",
  });
});
app.get("/James", (req, res) => {
  res.status(200).send({
    person: "James Potter ππ¦β€οΈ",
    name: "James",
  });
});
app.get("/Sirius", (req, res) => {
  res.status(200).send({
    person: "Sirius Black ππΆβ€οΈ",
    name: "Sirius",
  });
});
app.get("/Peter", (req, res) => {
  res.status(200).send({
    person: "Peter Pettigrew π",
    name: "Peter",
  });
});
app.get("/Cho", (req, res) => {
  res.status(200).send({
    person: "Cho ππΊ",
    name: "Cho",
  });
});
app.get("/Cedric", (req, res) => {
  res.status(200).send({
    person: "Cedric ππ",
    name: "Cedric",
  });
});
app.get("/Seamus", (req, res) => {
  res.status(200).send({
    person: "Seamus π?π₯",
    name: "Seamus",
  });
});
app.get("/Percy", (req, res) => {
  res.status(200).send({
    person: "Percy π€πββοΈ",
    name: "Percy",
  });
});
app.get("/Viktor", (req, res) => {
  res.status(200).send({
    person: "Viktor πππ",
    name: "Viktor",
  });
});
app.get("/Tonks", (req, res) => {
  res.status(200).send({
    person: "Tonks ππ©βπ€π",
    name: "Tonks",
  });
});
app.get("/Mad-Eye", (req, res) => {
  res.status(200).send({
    person: "Mad-Eye π",
    name: "Mad-Eye",
  });
});
app.get("/Rita", (req, res) => {
  res.status(200).send({
    person: "Rita Skeeter ππ€",
    name: "Rita",
  });
});
app.get("/Marietta", (req, res) => {
  res.status(200).send({
    person: "Marietta ππ",
    name: "Marietta",
  });
});
app.get("/Dudley", (req, res) => {
  res.status(200).send({
    person: "Dudley πͺππ€?",
    name: "Dudley",
  });
});
app.get("/Vernon", (req, res) => {
  res.status(200).send({
    person: "Vernon π¨",
    name: "Vernon",
  });
});
app.get("/Petunia", (req, res) => {
  res.status(200).send({
    person: "Petunia π©",
    name: "Petunia",
  });
});
app.get("/Seamus", (req, res) => {
  res.status(200).send({
    person: "Seamus π?π₯",
    name: "Seamus",
  });
});
app.get("/Severus", (req, res) => {
  res.status(200).send({
    person: "π°π¨βπ«πͺβοΈπ",
    name: "Severus",
  });
});
app.get("/Minerva", (req, res) => {
  res.status(200).send({
    person: "π°π§ββοΈπͺπ",
    name: "Minerva",
  });
});
app.get("/Voldemort", (req, res) => {
  res.status(200).send({
    person: "π½ππͺ",
    name: "Voldemort",
  });
});
app.get("/Remus", (req, res) => {
  res.status(200).send({
    person: "π°π§ββοΈπͺππΊ",
    name: "Remus",
  });
});
app.get("/Rebeus", (req, res) => {
  res.status(200).send({
    person: "π§πππΊ",
    name: "Rebeus",
  });
});
app.get("/Seamus", (req, res) => {
  res.status(200).send({
    person: "Seamus π?π₯",
    name: "Seamus",
  });
});
app.get("/Fleur", (req, res) => {
  res.status(200).send({
    person: "π«π·π©πͺ",
    name: "Fleur",
  });
});
app.get("/Sybill", (req, res) => {
  res.status(200).send({
    person: "π°π§ββοΈπ?",
    name: "Sybill",
  });
});
app.get("/Neville", (req, res) => {
  res.status(200).send({
    person: "π°π¦π§βοΈπ",
    name: "Neville",
  });
});
app.get("/Nagini", (req, res) => {
  res.status(200).send({
    person: "Nagini π",
    name: "Nagini",
  });
});

app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    req.status(418).send({ message: "We Need A Logo!" });
  }

  res.send({
    tshirt: `π with your ${logo} and id of ${id}`,
  });
});

app.listen(PORT, () => console.log(`its alive on port ${PORT}`));
