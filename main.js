//validamos si el navegador puede utilizar el serviceWorker
if('serviceWorker' in navigator){
//    registra el serviceWorker
    navigator.serviceWorker.register('./sw.js')
            .then(res => console.log('*ServiceWorker cargado correctamente', res))
            .catch(err => console.log('*ServiceWorker no se ha podido registrar', err));
}else{
    console.log('*El navegador no permite ejecutar el serviceWorker');
}
//scroll
$(document).ready(function(){
   $('.menu a').click(function(e){
       $('html, body').animate({
           scrollTop:$($(this).attr('href')).offset().top
       });
       e.preventDefault();
       return false;
   });
});
