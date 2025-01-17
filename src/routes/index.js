import { Router} from "express";
import { title } from "process";

const router= Router();
router.get('/', (req,res)=>res.render('index',{title:'Proyecto en grupo'}));
router.get('/about', (req,res)=>res.render('about',{title:'SOBRE NOSOTROS'}));
router.get('/contact', (req,res)=>res.render('contact',{title:'SOBRE NOSOTROS'}));
router.get('/bot', (req,res)=>res.render('contact',{title:'bot'}))
export default router;

