var hr = document.getElementById('horas')
var mi = document.getElementById('minutos')
var se = document.getElementById('segundos')

var relogio = setInterval(function time(){
var dataatual = new Date();
var horas = dataatual.getHours();
var minutos = dataatual.getMinutes();
var segundos = dataatual.getSeconds();




if(horas < 10)horas = '0' + horas;

if(minutos < 10)minutos = '0' + minutos;


if(segundos < 10)segundos = '0' + segundos;

hr.textContent = horas
mi.textContent = minutos
se.textContent = segundos


var resposta = document.getElementById('res')
var imagem = document.createElement('img')
imagem.setAttribute('id','foto')
resposta.appendChild(imagem)

if(horas >= 0 && horas < 12){
    imagem.setAttribute('src', 'dia.jpg.jpg')
}else if(horas >= 12 && horas < 18){
    imagem.setAttribute('src', 'tarde.jpg.jpg')
}else{
    imagem.setAttribute('src', 'noite.jpg.jpg')
}




})

