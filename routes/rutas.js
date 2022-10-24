const express=require('express');
const router=express.Router();

router.get('/', (req, res) => {
    res.render('index',{titulo:'Christian David', titulo2:'Zarate Ortiz', 
    datos:'Calle 62 sur 36-26 · Bogotá, Colombia · (310) 497-6649 ·', link:'chirtianzaor1090@gmail.com', link3:'Drive', link2:'Spike',
    decripcion:'Soy junior en desarrollo de software, destaco en las cosas que me gustan y me dedico a dar mi mejor esfuerzo tengo distintas habilidades a la hora de programar, me gusta el backend y todo lo que contenga procesos no destaco en el front-end pero si es necesario trabajo en el y lo hago bien. Alguno de mis hobbies: Son los videojuegos, el ver anime, escuchar musica y aprender ingles Mi meta es lograr trabajar como desarrollador de software en una gran empresa'})
    
  })
router.get('/portafolio', (req, res) => {
    res.render('portafolio',{titulo:'GIT', titulo2:'HUB', 
    datos:'JAVA, JAVA NATIVO, PHP, REACT, EXPRESS, ETC...', link:'chirtianzaor1090@gmail.com', link3:'Drive', link2:'Spike',
    decripcion:'En este perfil de github estan todos los proyectos realizados por mi de diferentes lenguajes o frameworks se encuentran los proyectos del presento año, y en el mismo estaran los del resto de mi vida, al igual tengo un portafolio en drive'})
    
    
  })
router.get('/educacion', (req, res) => {
    res.render('educacion', {titulo:'SERVICIO NACIONAL DE APRENDIZAJE', titulo2:'SENA', 
    datos:'Primaria, bachillerato, técnico y tecnologo', link:'chirtianzaor1090@gmail.com', link3:'Drive', link2:'Spike',
    decripcion:'Estudie mi primaria basica en el colegio el German Arciniegas de bosa, el bachillerato lo termine en colegio Arborizadora baja en el año 2021, el tecnico lo culmine el mismo año en el sena y actualmente curso el tecnologo en el sena en la sede de la marly, soy aspirante a ingresar a la universidad naciol para culminar mi carrea'})
    
  })
  
module.exports = router;