// cambiamos el icono de la hamburgesa por la 'X' al dar click
const hamburgerIcon = document.querySelector(".nav__hamburguer");

const transparente = document.querySelector(".nav__transparente");

let elementoActivo = transparente; 

hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("nav__hamburguer-open");
  // a este elemento le vas a dar una clase de lista de cambio a ('este elemento mas mejor jaja no a la 'x')
  transparente.classList.toggle("nav__transparente-show");
});

// con este evento vemos en la consola del navegador que elemento clickeamos
transparente.addEventListener("click", (e) => {
  e.preventDefault();
  const elementoClick = e.target;

  //   console.log(e.target.classList.value);

  if (isActive(elementoClick, "nav__parent")) {
    const subMenu = elementoClick.parentElement.children[1];
    console.log(subMenu);

    if (window.innerWidth < 768) {
      let height = subMenu.clientHeight == 0 ? subMenu.scrollHeight : 0;

      subMenu.style.height = `${height}px`;
    //  en resumen, este código se utiliza para hacer que un menú se muestre o se oculte en función del ancho de la ventana del navegador. Si la ventana es lo suficientemente pequeña, el menú se muestra, y si no lo es, se oculta. El menú se muestra u oculta ajustando la propiedad de altura (height) del menú.
    } else {



      // SI (no esta activo el elemento actual con la clase "...")
      //entonces cierra el elemento actual que si tiene activa la clas "..."
      if(!isActive(subMenu,'nav_inner-show')){
        cerrarElemento(elementoActivo);
      }
      subMenu.classList.toggle('nav_inner-show')
      elementoActivo = subMenu
    }
  }
});





function isActive(elemento, string) {
  return elemento.classList.value.includes(string);
  // si hay un string (que yo ponga aqui ) incluido.en la informacion de. la clase. que tiene este elemento
}

function cerrarElemento(elementoActual){
  if(isActive(elementoActivo, 'nav_inner-show')){
    elementoActivo.classList.remove('nav_inner-show')
  
  }

}




// ESTA ES LA EXPLICACION DE ESTA PARTE DEL CODIGO QUE EMPEIZA DESDE LA LINEA 14

// transparente.addEventListener("click", (e) => {
//     e.preventDefault();
//     const elementoClick = e.target;
//     //  saber el comportamiento por defecto de los enlaces, esto nos ayudara a identificar que tiene cada elemento al que precionemos o al que queramos acceder esta ves a asus clases:
//     console.log(e.target.classList.value);
//     // "value" es acceder a la informacion en este caso de classes

//     // si a los elemento que dimos click tienen un 'nav_parent'
//     if (isActive(elementoClick, "nav__parent")) {
//     }
//   //ESTA FUNCION SOLO ESTARA DISPONIBLE PARA FORMATO MOBIL que nosotros lo definimos como un tmaño maximo de 768px

//       const subMenu = elementoClick.parentElement.children[1];
//       console.log(subMenu);

//   // sie el valor actual del viewPort es menor a 768px quiero que se ejecute cierto codigo
//       if(window.innerWidth < 768){

//           let heigth = (subMenu.clientHeight == 0)
//                       ? subMenu.scrollHeight : 0;

//           subMenu.style.heigth = `${heigth}px`

//       }else{

//       }

//   });







// _______________________________________________________
        // window.addEventListener('resize', ()=>{})

// efecto de ocultar los ul del menu al hacer mas grande la pantalla 




window.addEventListener('resize', ()=>{
  cerrarElemento(elementoActivo);
  
  if(window.innerWidth > 768){
    // toma todos los inners que son los elementos <UL>
    const navInners = document.querySelectorAll('.nav__inner')

    // y todos estos inner de forma individual quitales su estilo higt, restealo
    navInners.forEach(navIinner=>{
      navIinner.style.height = '';
    })
  }
})