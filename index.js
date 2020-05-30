//Importamos los paquetes que requerimos
const express = require('express');
const hbs = require('hbs');

//creamos la aplicacion
const app = express();

//Definimos el motor de plantillas
//No de vamos a emplear MVC (Vista vamos a utiisar HBS)
app.set('view engine', 'hbs');

//Vamos a generar los partials
hbs.registerPartials(__dirname + '/views/partials');

//Generamos el sitio estatico
app.use(express.static(__dirname + '/public'));

//configurar mis rutas
app.get('/', (req, res)=>{
    res.render('index', {
        autor : 'andrea gomez',
        year : new Date().getFullYear(),
        title : 'Inicio'
    });
});

app.get('/frida', (req, res)=>{
    res.render('frida', {
        autor : 'andrea gomez',
        year : new Date().getFullYear(),
        title : 'frida khalo'
    });
});

app.get('/miguel', (req, res)=>{
    res.render('miguel', {
        autor : 'andrea gomez',
        year : new Date().getFullYear(),
        title : 'miguel'
    });
});

app.get('/picasso', (req, res)=>{
    res.render('picasso', {
        autor : 'andrea gomez',
        year : new Date().getFullYear(),
        title : 'Obras de picasso',
        
    });
});
app.get('/van', (req, res)=>{
    res.render('van', {
        autor : 'andrea gomez',
        year : new Date().getFullYear(),
        title : 'van',
        
    });
});
app.get('/contacto', (req, res)=>{
    res.render('contacto', {
        autor : 'andrea gomez',
        year : new Date().getFullYear(),
        title : 'contacto',
        
    });
});
//Arrancamos el servisdor web
app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000');
});