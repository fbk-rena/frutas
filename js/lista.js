(function(){
    var lista = document.getElementById("lista");
    var agregaProducto = document.getElementById("agrega");
    var btnagregaLista = document.getElementById("btnAgrega")

    var agregaLista = function(){
        var producto = agregaProducto.value;
        var nuevaFruta = document.createElement("li");
        var frutita = document.createTextNode(producto);

        nuevaFruta.appendChild(frutita);

        lista.appendChild(nuevaFruta);

        agregaProducto.value = "";

        for(var i = 0; i <= lista.children.length-1; i++){
        lista.children[i].addEventListener("click", function(){
            this.parentNode.removeChild(this);
        });
        }

    }

    btnagregaLista.addEventListener("click",agregaLista);
    
}());
