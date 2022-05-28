const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());


app.get("/Dobby", (req, res) => {
  res.status(200).send({
    person: "Dobby is free 🤓🎁🧦🧝",
    name: "Dobby",
  });
});
app.get("/Harry", (req, res) => {
  res.status(200).send({
    person: "⚡🤓🪄🦌",
    name: "Harry",
  });
});
app.get("/Hermoine", (req, res) => {
  res.status(200).send({
    person: "👧🪄🦦📚🐈",
    name: "Hermoine",
  });
});
app.get("/Ron", (req, res) => {
  res.status(200).send({
    person: "👦🪄🐕🐀",
    name: "Ron",
  });
});
app.get("/Luna", (req, res) => {
  res.status(200).send({
    person: "Luna 🙃🌹⭐",
    name: "Luna",
  });
});
app.get("/Umbridge", (req, res) => {
  res.status(200).send({
    person: "Umbridge 😈😻",
    name: "Umbridge",
  });
});
app.get("/Ginny", (req, res) => {
  res.status(200).send({
    person: "Ginny ✨🙄❤️",
    name: "Ginny",
  });
});
app.get("/George", (req, res) => {
  res.status(200).send({
    person: "George 👂😂📜",
    name: "George",
  });
});
app.get("/Fred", (req, res) => {
  res.status(200).send({
    person: "Fred 📜😂🤕",
    name: "Fred",
  });
});
app.get("/Filch", (req, res) => {
  res.status(200).send({
    person: "Filch 😡👣👨‍💼",
    name: "Filch",
  });
});
app.get("/Bill", (req, res) => {
  res.status(200).send({
    person: "Bill 🐉✌️👹",
    name: "Bill",
  });
});
app.get("/Lily", (req, res) => {
  res.status(200).send({
    person: "Lily Potter 🌸💛",
    name: "Lily",
  });
});
app.get("/James", (req, res) => {
  res.status(200).send({
    person: "James Potter 😏🦌❤️",
    name: "James",
  });
});
app.get("/Sirius", (req, res) => {
  res.status(200).send({
    person: "Sirius Black 😏🐶❤️",
    name: "Sirius",
  });
});
app.get("/Peter", (req, res) => {
  res.status(200).send({
    person: "Peter Pettigrew 🐀",
    name: "Peter",
  });
});
app.get("/Cho", (req, res) => {
  res.status(200).send({
    person: "Cho 💙🍺",
    name: "Cho",
  });
});
app.get("/Cedric", (req, res) => {
  res.status(200).send({
    person: "Cedric 💛🏆",
    name: "Cedric",
  });
});
app.get("/Seamus", (req, res) => {
  res.status(200).send({
    person: "Seamus 😮🔥",
    name: "Seamus",
  });
});
app.get("/Percy", (req, res) => {
  res.status(200).send({
    person: "Percy 😤🙎‍♂️",
    name: "Percy",
  });
});
app.get("/Viktor", (req, res) => {
  res.status(200).send({
    person: "Viktor 😑🏅🏆",
    name: "Viktor",
  });
});
app.get("/Tonks", (req, res) => {
  res.status(200).send({
    person: "Tonks 😝👩‍🎤💖",
    name: "Tonks",
  });
});
app.get("/Mad-Eye", (req, res) => {
  res.status(200).send({
    person: "Mad-Eye 👁",
    name: "Mad-Eye",
  });
});
app.get("/Rita", (req, res) => {
  res.status(200).send({
    person: "Rita Skeeter 🐜🎤",
    name: "Rita",
  });
});
app.get("/Marietta", (req, res) => {
  res.status(200).send({
    person: "Marietta 🙊🔊",
    name: "Marietta",
  });
});
app.get("/Dudley", (req, res) => {
  res.status(200).send({
    person: "Dudley 💪🔊🤮",
    name: "Dudley",
  });
});
app.get("/Vernon", (req, res) => {
  res.status(200).send({
    person: "Vernon 👨",
    name: "Vernon",
  });
});
app.get("/Petunia", (req, res) => {
  res.status(200).send({
    person: "Petunia 👩",
    name: "Petunia",
  });
});
app.get("/Seamus", (req, res) => {
  res.status(200).send({
    person: "Seamus 😮🔥",
    name: "Seamus",
  });
});
app.get("/Severus", (req, res) => {
  res.status(200).send({
    person: "🏰👨‍🏫🪄⚗️🐍",
    name: "Severus",
  });
});
app.get("/Minerva", (req, res) => {
  res.status(200).send({
    person: "🏰🧙‍♀️🪄🐈",
    name: "Minerva",
  });
});
app.get("/Voldemort", (req, res) => {
  res.status(200).send({
    person: "👽🐍🪄",
    name: "Voldemort",
  });
});
app.get("/Remus", (req, res) => {
  res.status(200).send({
    person: "🏰🧙‍♂️🪄🌕🐺",
    name: "Remus",
  });
});
app.get("/Rebeus", (req, res) => {
  res.status(200).send({
    person: "🧔🛖🏍🍺",
    name: "Rebeus",
  });
});
app.get("/Seamus", (req, res) => {
  res.status(200).send({
    person: "Seamus 😮🔥",
    name: "Seamus",
  });
});
app.get("/Fleur", (req, res) => {
  res.status(200).send({
    person: "🇫🇷👩🪄",
    name: "Fleur",
  });
});
app.get("/Sybill", (req, res) => {
  res.status(200).send({
    person: "🏰🧙‍♀️🔮",
    name: "Sybill",
  });
});
app.get("/Neville", (req, res) => {
  res.status(200).send({
    person: "🏰🦁🧑⚔️🐍",
    name: "Neville",
  });
});
app.get("/Nagini", (req, res) => {
  res.status(200).send({
    person: "Nagini 🐍",
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
    tshirt: `👕 with your ${logo} and id of ${id}`,
  });
});

app.listen(PORT, () => console.log(`its alive on port ${PORT}`));
