let listaNombresGastos = [];
let listaValoresGastos = [];

function clickBoton() {
    alert('Click del usuario');

    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    console.log(nombreGasto);
    console.log(valorGasto);

    console.log(listaNombresGastos); //inicializa vacio
    console.log(listaValoresGastos);

    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);

    console.log(listaNombresGastos); //muestra la lista
    console.log(listaValoresGastos);

    actualizarListaGastos();  //llamamos la funcion
}
function actualizarListaGastos() {

    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;
    listaNombresGastos.forEach((elemento, posicion) => { //se crea un html dentro de Js
       //declaro la variable para capturar por id del ul de html
       
        // htmlLista += " <li> " + elemento + " </li>";
        const valorGasto = Number(listaValoresGastos[posicion]);
        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)}
        <button onclick="eliminarGasto(${posicion});">Eliminar Gasto</button>
       
        </li> `;

        
       
        //Calculo del total de gastos
        totalGastos += Number(valorGasto);
        console.log(totalGastos);

        console.log(elemento);
        console.log(posicion);
    });
    console.log(htmlLista);
    
    listaElementos.innerHTML = htmlLista;  //aca captura todos los elementos de la lista
    totalElementos.innerHTML = totalGastos.toFixed(2); //captura los gastos totales de los elementos con 2 decimales

    limpiarCampos();    //llamamos la funcion
}
function limpiarCampos() {
     document.getElementById('nombreGasto').value = '';
     document.getElementById('valorGasto').value = '';
}
function eliminarGasto(posicion) {
    console.log(posicion);
    listaNombresGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    actualizarListaGastos();
}
