const Pizzas = [
  {
      nombre : 'muzzarella',
      id : 1,
      precio : 100,
      ingredientes : ['muzzarella', 'salsa'],
      img : 'muzzarella.jpg'
  },
  {
      nombre : 'napolitana',
      id : 2,
      precio : 110,
      ingredientes : ['tomate', 'jamon', 'salsa'],
      img : 'napolitana.jpg'
  },
  {
      nombre : 'salchicha',
      id : 3,
      precio : 110,
      ingredientes : ['salchicha', 'salsa', 'queso'],
      img : 'salchicha.png'
  },
  {
      nombre : 'calabresa',
      id : 4,
      precio : 130,
      ingredientes : ['calabresa', 'queso', 'salsa'],
      img : 'calabresa.jpg'
  },
  {
      nombre : 'fugazzeta',
      id : 5,
      precio : 100,
      ingredientes : ['cebolla', 'queso', 'salsa'],
      img : 'fugazzetta.jpg'
  },
  {
      nombre : 'jamon y morron',
      id : 6,
      precio : 100,
      ingredientes : ['jamon', 'queso', 'morron', 'salsa'],
      img : 'jamon y morron.jpg'
  },
]


const inputNumber = document.getElementById('inputNumber');
const form = document.getElementById('form');
const card = document.querySelector('.card');
const ul = document.querySelector('.ul')


let pizzaFiltrada = [];

// aca entendi que solo habia que guardar el array entero, por lo que dijeron en la clase el otro dia. o no se si entendi al reves

const saveLocalStorage = pizzaList => {
localStorage.setItem('Pizzas', JSON.stringify(pizzaList))
}



const showPizza = () => {
let pizza = pizzaFiltrada;
let {nombre, id, precio, ingredientes, img} = pizza;
ingredientes = ingredientes.join(' - ')

card.innerHTML = `
<div class="container--card">
  <small class="hidden"></small>
  <h2 class="h2">Proba nuestra pizza de ${nombre}.</h2>
  <img class="container--img"src="./assets/img/${img}" alt="pizza de ${pizza.nombre}">
  <\div>
  <p class="p">${ingredientes}</p>
  <h4 class="h4">A tan solo $${precio}.</h4>
  `

//hubiera preferido hacer una lista que renderice cada elemento li por cada ingrediente pero lo vi tarde y no me dio el tiempo, aun asi no supe bien como hacerlo, por eso el p. 

}

const filtrarID = () => {
const filterId = inputNumber.value;
let pizzaID = Pizzas.find(pizza => pizza.id == filterId);

if(!filterId.length || filterId == 0){   
  card.style.border = 'none'
  card.innerHTML = `
      <small>No ingresaste ninguna ID.</small>
      <h2 class="hidden"></h2>
      <h4 class="hidden"></h4>
      <img class="hidden" src="">
      `
    return;

  } else if(!pizzaID){
    card.innerHTML = `
      <small>Lo sentimos!, no disponemos de pizzas con ese ID.</small>
      <h2 class="hidden"></h2>
      <h4 class="hidden"></h4>
      <img class="hidden" src="">
      `
    return;

  } else (pizzaFiltrada = pizzaID);
    showPizza();
}
  

const init = () => {
form.addEventListener('submit', e => {
  e.preventDefault();
  filtrarID();
  saveLocalStorage(Pizzas)
})
}


init();
