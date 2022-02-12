const mysql = require("../db/db");
const { getDataCollection } = require("../query/Collection/Collection");

exports.getDataCollection = (req, res) => {
  const { datos } = req.body;

  try {
    mysql.query(getDataCollection(datos), (err, response) => {
      if (err) {
        console.log(err);
      }

      if (response.length > 0) {
        console.log(response)
        res.json(response);
      } else {
        res.json({ mensaje: "Datos No Encontrados" });
      }
    });

    // res.json(req.body);
  } catch (err) {
    console.log(err);
  }
  // res.json({nada:"Asd"});
};
