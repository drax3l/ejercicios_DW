import express from 'express';
import {dirname, join} from 'path';
import { fileURLToPath} from 'url';
import router from './views/routes';
const app= express();
const __dirname= dirname(fileURLToPath(import.meta.url));
app.set('view engine', join(__dirname, 'views'))
app.set('view engine', 'ejs');
app.get('/', (req,res)=>res.render('index'))
app.use(router)
app.listen(9000)
console.log('el server estasiendo escuchado en el puerto, 9000')


