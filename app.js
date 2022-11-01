const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');


//Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) =>{
  //res.send("Hola Mundo!");
  res.render('home',{
    nombre:'Mario Manotas Durán',
    titulo: 'Curso de NodeJs'
  });
});

app.get('/elements', (req, res) =>{
  //res.sendFile(__dirname + '/public/elements.html');
  res.render('elements',{nombre: 'Mario Manotas Durán',titulo: 'Curso de NodeJs'});
});

app.get('/generic', (req, res) =>{
    //res.sendFile(__dirname + '/public/generic.html');
    res.render('generic',{nombre: 'Mario Manotas Durán',titulo: 'Curso de NodeJs'});
  });

app.get('*', (req, res) =>{
   // res.send('404 | Page not found');
   res.sendFile(__dirname + '/public/404.html');
  });


app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`);
});