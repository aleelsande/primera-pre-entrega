const productosMuebleria = [
    {id:1,nombre:"mesa ratona", tipo: "mesa", precio: 22000},
    {id:2,nombre:"sillita", tipo: "silla", precio: 22000},
    {id:3,nombre:"cama grande", tipo: "cama", precio: 22000},
    {id:4,nombre:"cama chica", tipo: "cama", precio: 22000},
    {id:5,nombre:"ropero grande", tipo: "ropero", precio: 22000},
    {id:6,nombre:"ropero chico", tipo: "ropero", precio: 22000},
    {id:7,nombre:"mesa cuadrada", tipo: "mesa", precio: 25000}
]


let ingresarId = prompt("ingresa el id)")
let buscarId = productosMuebleria.filter(el => el.id == (ingresarId))

buscarId.map(el => console.log(el.nombre+ " $"+ el.precio))

let Id = ""
if (buscarId.length !=0){
    let Id = buscarId.nombre + " $ " + buscarId.precio
    alert(Id)
} else{
    alert("sin stock")
}

