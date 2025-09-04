document.addEventListener("DOMContentLoaded", () => {  //docu es el html . Espera y esucha hasta q suceda un evento
    //DOMContentLoade= se a cargado el contenido
    let btnSumar = document.getElementById("sum") //define una variable BTNSumar es el nombre q le da a la variable
    //= document.getElementById("sum") es el dato que se le asigna. encuentra en el html un elem con Id sum 
    let btnrest = document.getElementById("rest")
    let btnmult = document.getElementById("mult")
    let btndiv = document.getElementById("div")

    let input1 = document.getElementById("num1") //input=ingresar ingreso num 1 y 2
    let input2 = document.getElementById("num2")

    let resultado = document.getElementById("resultado")

    btnSumar.addEventListener("click", () => {  // boton sumar va a esperar por un evento=click 
        let num1 = parseInt(input1.value) //crea una nueva variable "num1" 
        // = parseInt convierte el text a numero (input1.value) valor del input1
        let num2 = parseInt(input2.value)
        
        let suma = num1 + num2  //cuenta
        resultado.textContent = suma // muestra el resultado
        
    })
    btnrest.addEventListener("click", () => {
        let num1 = parseInt(input1.value)
        let num2 = parseInt(input2.value)
        
        let resta = num1 - num2
        resultado.textContent = resta
    })
    btnmult.addEventListener("click", () => {
        let num1 = parseInt(input1.value)
        let num2 = parseInt(input2.value)
        
        let mult = num1 * num2
        resultado.textContent = mult
    })
    btndiv.addEventListener("click", () => {
        let num1 = parseInt(input1.value)
        let num2 = parseInt(input2.value)
        
        let division = num1 / num2
        resultado.textContent = division
    })
})