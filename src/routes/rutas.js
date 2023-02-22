const app = require("../config/server");
require("colors");
const conex = require("../config/db");

app.get("/", (req, res) => {
  res.render("../views/index.ejs");
});
app.get("/correos", (req, res) => {
  conex.query("SELECT * FROM correos", (err, result) => {
    if (err) {
      console.log("ERROR".bgRed + err);
    } else {
      res.render("../views/correos.ejs", {
        usuarios: result,
      });
    }
  });
});

app.post("/correos", (req, res) => {
  const { nombre, correo, mensaje } = req.body;
  conex.query(
    "INSERT INTO correos SET?",
    {
      nombre,
      correo,
      mensaje,
    },
    (err, result) => {
      if (err) {
        console.log(`${err}`.bgRed);
      }
      res.redirect("/");
    }
  );
});

app.post('/borrarcorreo', (req, res)=>{
  const id = req.body;
  conex.query(`DELETE FROM correos WHERE id = '${id.id}'`, (err, result)=>{
    if(err){
      console.log('No se pudo borrar el correo' + err)
      res.redirect('/correos')
      
    }else{
      console.log(result);
      res.redirect('/correos')

    }
  })
})

app.all("*", (req, res) => {
  const badUrl = req.originalUrl;
  res.render("../views/404.ejs", {
    ruta: badUrl,
  });
});
