const pizzas = [
  {   id:1,
      nombre: "Pizza muzzarella",
      ingredientes: ["Queso muzzarella", "Tomate"],
      precio: 700
  },
  {   id:2,
      nombre: "Pizza 4 quesos",
      ingredientes: ["Queso roquefort", "Queso muzzarella", "Queso parmesano", "Queso gouda", "Tomate"],
      precio: 900
  },
  {   id:3,
      nombre: "Pizza margarita",
      ingredientes: ["Tomate", "Queso muzzarella", "albahaca"],
      precio: 950
  },
  {   id:4,
      nombre: "Pizza de champiñones",
      ingredientes: ["Tomate", "Queso muzzarella", "champiñones", "aceitunas", "jamon"],
      precio: 1000
  },
  {   id:5,
      nombre: "Pizza de anana",
      ingredientes: ["Tomate", "Anana", "Queso fresco", "Jamon"],
      precio: 1100
  },
  {   id:6,
      nombre: "Pizza de palmitos",
      ingredientes: ["Tomate", "Queso fresco", "Palmitos", "Jamon", "Salsa golf"],
      precio: 1200
  }, 
 
];
  
  window.onload = (e) => {
    let precioPizza = document.getElementById('precioPizza');
    let nombrePizza = document.getElementById('nombrePizza');
    let ingredientesPizza = document.getElementById('ingredientesPizza');
  
    if (localStorage.length > 0) {
        precioPizza.textContent = localStorage.getItem("precioPizza");
  
        nombrePizza.textContent = localStorage.getItem("nombrePizza");
  
        ingredientesPizza.textContent = localStorage.getItem("ingredientesPizza");
  
    }
  };
  
  
  let listado = document.getElementById('listadoPizzas');
  
  const buscarPizza = () => {
    let valueid = document.getElementById('valueId').value;
    let precioPizza = document.getElementById('precioPizza');
    let nombrePizza = document.getElementById('nombrePizza');
    let ingredientesPizza = document.getElementById('ingredientesPizza');
    let inputVacio = document.getElementById('inputVacio');
    inputVacio.textContent = "";
    precioPizza.textContent = "";
    nombrePizza.textContent = "";
    ingredientesPizza.textContent = "";
  
    
  
    let found = pizzas.find(function(post, i) {
        inputVacio.textContent = ""
        if (post.id == valueid) {
            precioPizza.textContent = post.precio;
            localStorage.setItem("precioPizza", post.precio);
  
            nombrePizza.textContent = post.nombre;
            localStorage.setItem("nombrePizza", post.nombre);
  
            ingredientesPizza.textContent = post.ingredientes.join(" , ");
            localStorage.setItem("ingredientesPizza", post.ingredientes);
            return true;
        }
    });
  
    if (found == undefined) return inputVacio.textContent = "El valor ingresado es incorrecto."
    if (valueid === "") return inputVacio.textContent = "Debes ingresar un valor numerico."
  
}