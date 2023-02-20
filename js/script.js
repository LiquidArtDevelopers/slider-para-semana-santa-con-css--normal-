/* declaradas las variables de los precios de las gasolinas y resto de constantes */
var sp95=1.643;
var sp98=1.814;
var diesel=1.609;
var diesela=1.706;
var electrico=0.213;

const rs_range_line=document.getElementById("rs_range_line");
const rs_bala=document.getElementById("rs_bala");
const combustible = document.getElementById("combustible");
const texto_cambiante = document.getElementById("texto_cambiante");
/* fin de declarar variables */


/* Evento de escucha para cuando cambio el valor del RANGE */
rs_range_line.addEventListener("input", function(){
    /* CAMBIAR EL KILOMETRAJE DE LA BALA */
    rs_bala.innerHTML=this.value;
    var posicion_bala=(rs_range_line.value /rs_range_line.max);
    rs_bala.style.left=(posicion_bala *578)+ "px";

    /* COGER EL VALOR ACTUAL DEL SELECT DE GASOLINAS */
    var tipoCoche ="", tipogasolina="", precio=0, media100km=0
    switch(combustible.value){
        case"sp95":
            tipoCoche = "gasolina";
            tipogasolina = "Sin Plomo 95";
            media100km=7
            precio = sp95*((this.value*media100km)/100);
            break;
        case"sp98":
            tipoCoche = "gasolina";
            tipogasolina = "Sin Plomo 98";
            media100km=7
            precio = sp98*((this.value*media100km)/100);
            break;
        case"diesel":
            tipoCoche = "diesel";
            tipogasolina = "Diesel normal";
            media100km=5
            precio = diesel*((this.value*media100km)/100);
            break;
        case"diesel+":
            tipoCoche = "diesel";
            tipogasolina = "Diesel A+";
            media100km=5
            precio = diesela*((this.value*media100km)/100);
            break;
        case"electrico":
            tipoCoche = "electrico";
            tipogasolina = "electricidad";
            media100km=15 //15kWh por 100km
            precio = electrico*((this.value*media100km)/100);
            break;
        default:
            tipoCoche = "gasolina";
            tipogasolina = "Sin Plomo 95";
            precio = sp95*((this.value*media100km)/100);
            media100km=7
            precio = sp95*((this.value*media100km)/100);
            break;
    }

    precio = precio.toFixed(2)

    if(combustible.value==="electrico"){
        /* CAMBIAR EL TEXTO EN FUNCIÓN DE LOS KM Y EL TIPO DE GASOLINA */
        texto_cambiante.innerHTML=`<p>Si llevas un coche <b>${tipoCoche}</b>, tu gasto sera de <b>${precio} euros</b> (teniendo en cuenta que tu coche consuma una media de ${media100km} kWh/100km).</p>`
    }else{
        /* CAMBIAR EL TEXTO EN FUNCIÓN DE LOS KM Y EL TIPO DE GASOLINA */
        texto_cambiante.innerHTML=`<p>Si llevas un coche <b>${tipoCoche}</b> y lo llenas con <b>${tipogasolina}</b>, tu gasto sera de <b>${precio} euros</b> (teniendo en cuenta que tu coche consuma una media de ${media100km} litros/100km).</p>`
    }
})
/* fin del evento de escucha del range */


/* evento de escucha para cuando cambio el select de tipo de gasolina */
combustible.addEventListener("input", function(){

    if(rs_range_line.value==0){
        texto_cambiante.innerHTML=`<p>Debes elegir un kilometraje</p>`
        return
    }


    /* COGER EL VALOR ACTUAL DEL SELECT DE GASOLINAS */
    var tipoCoche ="", tipogasolina="", precio=0, media100km=0
    switch(this.value){
        case"sp95":
            tipoCoche = "gasolina";
            tipogasolina = "Sin Plomo 95";
            media100km=7
            precio = sp95*((rs_range_line.value*media100km)/100);
            break;
        case"sp98":
            tipoCoche = "gasolina";
            tipogasolina = "Sin Plomo 98";
            media100km=7
            precio = sp98*((rs_range_line.value*media100km)/100);
            break;
        case"diesel":
            tipoCoche = "diesel";
            tipogasolina = "Diesel normal";
            media100km=5
            precio = diesel*((rs_range_line.value*media100km)/100);
            break;
        case"diesel+":
            tipoCoche = "diesel";
            tipogasolina = "Diesel A+";
            media100km=5
            precio = diesela*((rs_range_line.value*media100km)/100);
            break;
        case"electrico":
            tipoCoche = "electrico";
            tipogasolina = "electricidad";
            media100km=15 //15kWh por 100km
            precio = electrico*((rs_range_line.value*media100km)/100);
            break;
        default:
            tipoCoche = "gasolina";
            tipogasolina = "Sin Plomo 95";
            precio = sp95*((rs_range_line.value*media100km)/100);
            media100km=7
            precio = sp95*((rs_range_line.value*media100km)/100);
            break;
    }

    precio = precio.toFixed(2)



    if(combustible.value==="electrico"){
        /* CAMBIAR EL TEXTO EN FUNCIÓN DE LOS KM Y EL TIPO DE GASOLINA */
        texto_cambiante.innerHTML=`<p>Si llevas un coche <b>${tipoCoche}</b>, tu gasto sera de <b>${precio} euros</b> (teniendo en cuenta que tu coche consuma una media de ${media100km} kWh/100km).</p>`
    }else{
        /* CAMBIAR EL TEXTO EN FUNCIÓN DE LOS KM Y EL TIPO DE GASOLINA */
        texto_cambiante.innerHTML=`<p>Si llevas un coche <b>${tipoCoche}</b> y lo llenas con <b>${tipogasolina}</b>, tu gasto sera de <b>${precio} euros</b> (teniendo en cuenta que tu coche consuma una media de ${media100km} litros/100km).</p>`
    }
})
/* fin del evento de escucha del select */


