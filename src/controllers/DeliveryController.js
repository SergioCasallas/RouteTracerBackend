const { getDataDelivery } = require("../query/Delivery/Delivery");
const mysql = require("../db/db");

exports.getDataDelivery = (req, res) => {
  const { datos } = req.body;

  try {
    mysql.query(getDataDelivery(datos), (err, response) => {
      if (err) {
        console.log(err);
      }

      console.log(response)

      if (response.length > 0) {
          res.json(response);
        } else {
            res.json({ mensaje: "Datos no encontrados" });
      }
    });
  } catch (e) {
    console.log(e);
  }

  console.log(getDataDelivery(datos));
};

// !me quede en el enviado de datos y revision de lo que se va a enviar
