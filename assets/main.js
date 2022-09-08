const Pizzas = [
    {
        nombre : 'muzzarella',
        id : 1,
        precio : 100,
        ingredientes : ['muzzarella', 'salsa']
    },
    {
        nombre : 'napolitana',
        id : 2,
        precio : 110,
        ingredientes : ['tomate', 'jamon', 'salsa']
    },
    {
        nombre : 'salchicha',
        id : 3,
        precio : 110,
        ingredientes : ['salchicha', 'salsa', 'queso']
    },
    {
        nombre : 'calabresa',
        id : 4,
        precio : 130,
        ingredientes : ['calabresa', 'queso', 'salsa']
    },
    {
        nombre : 'fugazzeta',
        id : 5,
        precio : 100,
        ingredientes : ['cebolla', 'queso', 'salsa']
    },
    {
        nombre : 'jamon y morron',
        id : 6,
        precio : 100,
        ingredientes : ['jamon', 'queso', 'morron', 'salsa']
    },
]


const inputNumber = document.getElementById('inputNumber')
const form = document.getElementById('form')
const h2Nombre = document.querySelector('h2')
const h4Precio = document.querySelector('h4')
const small = document.querySelector("small")



let pizzaFiltrada = [];

const showPizza = () => {
    let pizza = pizzaFiltrada

    small.textContent = ''
    h2Nombre.textContent = `Proba nuestra pizza de ${pizza.nombre}`
    h2Nombre.classList.add('h2')
    h2Nombre.classList.remove('hidden')

    h4Precio.textContent = `A tan solo $${pizza.precio}`
    h4Precio.classList.add('h4')
    h4Precio.classList.remove('hidden')

    inputNumber.value = 0
    
}

const filtrarID = () => {
  const filterId = inputNumber.value;

  if(!filterId.length){   
      small.textContent = 'Error, no ingresaste un ID';
      h2Nombre.classList.add('hidden');
      h4Precio.classList.add('hidden') ;
      pizzaFiltrada = [];
      inputNumber.value = 0;
      return;

    } else if(filterId < 1 || filterId > 6){
      small.textContent = 'No se encuentran pizzas con ese ID'; 
      h2Nombre.classList.add('hidden'); 
      h4Precio.classList.add('hidden');
      pizzaFiltrada = [];
      inputNumber.value = 0;
      return;

    } else if( pizzaFiltrada = Pizzas.find(pizza => pizza.id === parseInt(filterId))
    ) showPizza();
  }
    

const init = () => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    filtrarID();
  })
  }


init();



