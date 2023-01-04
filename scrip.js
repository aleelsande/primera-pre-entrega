let nombre = prompt("ingresar nombre")
let apellido = prompt("ingrese apellido")
let opcion
let banana = 50
let manzana = 60
let pera = 70
let naranja = 80

alert("bienvenido "+ nombre + " "+ apellido+" a la verduleria online.")

while (opcion != 0) {
    opcion= parseInt(prompt("para consultar los precios precione 1\npara salir precione 0"))
    if (opcion ===1) {
        alert("banana " + banana + "$kg\n"+"manzana " + manzana + "$kg\n"+"pera " + pera + "$kg\n"+"naranja " + naranja + "$kg")
	    let compraB= parseInt(prompt("ingrese la cantidad de kgs de bananas que desea.\n en caso de no desear bananas precione 0"))
	    let compraP= parseInt(prompt("ingrese la cantidad de kgs de peras que desea.\n en caso de no desear peras precione 0"))
	    let compraN= parseInt(prompt("ingrese la cantidad de kgs de naranjas que desea.\n en caso de no desear naranjas precione 0"))
        
	    let compraM= parseInt(prompt("ingrese la cantidad de kgs de manzanas que desea.\n en caso de no desear manzanas precione 0"))
        alert("el total de los articulos seleccionados es: $" + ((compraB * banana)+(compraP * pera)+(compraM * manzana)+(compraN*naranja)))
        break
    }else if(opcion ===0){
        alert("que tenga un buen dia")
        break
    }else{
        alert("ingrese un numero valido")
    }
 }

 