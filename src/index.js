import express from 'express';
import {dirname, join} from 'path';
import { fileURLToPath} from 'url';
import router from './routes/index.js';
const app= express();
const __dirname= dirname(fileURLToPath(import.meta.url));
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs');
app.get('/', (req,res)=>res.render('index'))
app.use(router)
app.listen(10000)
console.log('el server estasiendo escuchado en el puerto, 10000')


