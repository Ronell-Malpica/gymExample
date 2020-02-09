const btnMenu   = document.querySelector('#button-mobile-toggle');
const menu      = document.querySelector('#menu');
console.log( btnMenu, "menu:", menu ); 

function mostrarMenu( menu , boton){
    if( menu && boton){
        boton.addEventListener('click',(event)=>{
            menu.classList.toggle('mostrar');
        })

    }
}
mostrarMenu( menu , btnMenu);

function training(){
    const train = document.querySelector('#training');
    train.addEventListener('click'  , ( event)=>{
        const e = event;
        const t = e.target;

        if( e.target.classList.contains('btn-span') ){
            // agragar el display block al panel

            let panel = e.target.parentElement.nextElementSibling;
            panel.classList.toggle('active');
            if( panel.style.maxHeight ){
                panel.style.maxHeight =null;
            }else{
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        }
        
    })
}
training();
// FUNCION PARA GALLERY SLIDER
function sliderGallery(){

    const   gallery             = document.querySelector('#gallery');
    const   containerImgModal   = document.querySelector('#container-img-modal');
    let     listaURL            = gallery.querySelectorAll('img');
    let     contador ;
    

    // EVENTOS PARA LA  GALLERIA AL DAR CLICK
gallery.addEventListener('click', (event)=>{
            const  e = event;
            const  t = e.target;
            // ruta de la imagen que se le  ha dado click
            
            //  AL DAR CLICK EN LA IMG
            if(  t.tagName==="IMG"){
                const url = t.src;
                let imgContainer = containerImgModal.querySelector('.modal-content');
                imgContainer.src =  url;
                containerImgModal.style.display='flex';
                

                //saber  numero de imagen es  la que se dio click
                
                for( let  i = 0; i< listaURL.length ;i++){
                    if( listaURL[i].src===url){
                        contador =  i ;
                        console.log( contador);
                        break;
                    }
                }
            }
});
// EVENTOS PARA la galley 
   containerImgModal.addEventListener('click',(event)=>{
    //    evento para  para salir del container 
        let t = event.target;
        if( t.classList.contains('close') ){
            containerImgModal.style.display= 'none'
        }
    // EVENTO PARA EL BOTON DE IZQUIERDA
        if( t.classList.contains('btn-left') ){
            alert('imagen de la izquierda')
            contador--;
            if( contador < 0 ){
                contador= listaURL.length -1 ;
            }
            mostrarImg( contador);
        }
        if( t.classList.contains('btn-right') ){
            
            contador++;
            if( contador >= listaURL.length ){
                contador = 0;
            }
            mostrarImg( contador)
        }
        
   })

            
            
            


    // funcion para mostrar la imagen segun el numero
     function mostrarImg(n){
         containerImgModal.querySelector('.modal-content').src = listaURL[n].src;
        console.log( 'EPA:',containerImgModal.querySelector('.modal-content') )
        }


 }
 sliderGallery();
