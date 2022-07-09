var data = {
    "urbanizaciones" : [
        {
            "id_residente": 1,
            "manzana": 1,
            "villa": 1,
            "telefono": "0979981856",
            "estado": "yellow"
        },
        {
            "id_residente": 2,
            "manzana": 1,
            "villa": 2,
            "telefono": "0979981058",
            "estado": "green"
        },
        {
            "id_residente": 3,
            "manzana": 1,
            "villa": 3,
            "telefono": "0979981810",
            "estado": "yellow"
        },
        {
            "id_residente": 4,
            "manzana": 1,
            "villa": 4,
            "telefono": "0979981820",
            "estado": "green"
        },
        {
            "id_residente": 5,
            "manzana": 2,
            "villa": 1,
            "telefono": "0979925856",
            "estado": "green"
        },
        {
            "id_residente": 6,
            "manzana": 2,
            "villa": 2,
            "telefono": "0979991856",
            "estado": "green"
        },
        {
            "id_residente": 7,
            "manzana": 2,
            "villa": 3,
            "telefono": "0975674856",
            "estado": "grey"
        },
        {
            "id_residente": 8,
            "manzana": 2,
            "villa": 4,
            "telefono": "0979555856",
            "estado": "green"
        },
        {
            "id_residente": 9,
            "manzana": 2,
            "villa": 5,
            "telefono": "0979922256",
            "estado": "yellow"
        },
        {
            "id_residente": 10,
            "manzana": 3,
            "villa": 1,
            "telefono": "0979981986",
            "estado": "yellow"
        },
        {
            "id_residente": 11,
            "manzana": 3,
            "villa": 2,
            "telefono": "0979981866",
            "estado": "red"
        },
        {
            "id_residente": 12,
            "manzana": 3,
            "villa": 3,
            "telefono": "0989981856",
            "estado": "green"
        },
        {
            "id_residente": 13,
            "manzana": 3,
            "villa": 4,
            "telefono": "0996981856",
            "estado": "green"
        },
        {
            "id_residente": 14,
            "manzana": 4,
            "villa": 1,
            "telefono": "0998991856",
            "estado": "yellow"
        },
        {
            "id_residente": 15,
            "manzana": 4,
            "villa": 2,
            "telefono": "0979981777",
            "estado": "green"
        },
        {
            "id_residente": 16,
            "manzana": 4,
            "villa": 3,
            "telefono": "0979966656",
            "estado": "green"
        },
        {
            "id_residente": 17,
            "manzana": 4,
            "villa": 4,
            "telefono": "0979999856",
            "estado": "grey"
        },
        {
            "id_residente": 18,
            "manzana": 4,
            "villa": 5,
            "telefono": "0976522146",
            "estado": "green"
        },
        {
            "id_residente": 19,
            "manzana": 4,
            "villa": 6,
            "telefono": "0998981856",
            "estado": "green"
        },
        {
            "id_residente": 20,
            "manzana": 5,
            "villa": 1,
            "telefono": "0955981856",
            "estado": "red"
        },
        {
            "id_residente": 21,
            "manzana": 5,
            "villa": 2,
            "telefono": "0965201856",
            "estado": "green"
        },
        {
            "id_residente": 22,
            "manzana": 5,
            "villa": 3,
            "telefono": "0970081856",
            "estado": "green"
        },
        {
            "id_residente": 23,
            "manzana": 5,
            "villa": 4,
            "telefono": "0979920856",
            "estado": "green"
        }
    ]
}


function traerdatos(){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'user.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var datos = JSON.parse(this.responseText);
            console.log(datos);
        }
    }
}
traerdatos();


function residentes(){
    var datos = data.Urbanizaciones
    var c1= document.getElementsByClassName("cuadrado-1");
    var c2= document.getElementsByClassName("cuadrado-2");
    var c3= document.getElementsByClassName("cuadrado-3");
    var c4= document.getElementsByClassName("cuadrado-4");
    var c5= document.getElementsByClassName("cuadrado-5");
    var c6= document.getElementsByClassName("cuadrado-6");
    for (var datos=0; datos<c1.length; datos++){
        c1[datos].style.backgroundColor="#ffff00";
    }
    for (var datos=0; datos<c2.length; datos++){
        c2[datos].style.backgroundColor="#00ff00";
    }
    for (var datos=0; datos<c3.length; datos++){
        c3[datos].style.backgroundColor="#ffff00";
    }
    for (var datos=0; datos<c4.length; datos++){
        c4[datos].style.backgroundColor="#00ff00";
    }
    for (var datos=0; datos<c5.length; datos++){
        c5[datos].style.backgroundColor="#00ff00";
    }
    for (var datos=0; datos<c6.length; datos++){
        c6[datos].style.backgroundColor="#00ff00";
    }

    var c7= document.getElementsByClassName("cuadrado-7");
    var c8= document.getElementsByClassName("cuadrado-8");
    var c9= document.getElementsByClassName("cuadrado-9");
    var c10= document.getElementsByClassName("cuadrado-10");
    var c11= document.getElementsByClassName("cuadrado-11");
    for (var datos=0; datos<c7.length; datos++){
        c7[datos].style.backgroundColor="#b3b3b3";
    }
    for (var datos=0; datos<c8.length; datos++){
        c8[datos].style.backgroundColor="#00ff00";
    }
    for (var datos=0; datos<c9.length; datos++){
        c9[datos].style.backgroundColor="#ffff00";
    }
    for (var datos=0; datos<c10.length; datos++){
        c10[datos].style.backgroundColor="#ffff00";
    }
    for (var datos=0; datos<c11.length; datos++){
        c11[datos].style.backgroundColor="red";
    }

    var c12= document.getElementsByClassName("cuadrado-12");
    var c13= document.getElementsByClassName("cuadrado-13");
    var c14= document.getElementsByClassName("cuadrado-14");
    var c15= document.getElementsByClassName("cuadrado-15");
    for (var datos=0; datos<c12.length; datos++){
        c12[datos].style.backgroundColor="#00ff00";
    }
    for (var datos=0; datos<c13.length; datos++){
        c13[datos].style.backgroundColor="#00ff00";
    }
    for (var datos=0; datos<c14.length; datos++){
        c14[datos].style.backgroundColor="#ffff00";
    }
    for (var datos=0; datos<c15.length; datos++){
        c15[datos].style.backgroundColor="#00ff00";
    }

    var c16= document.getElementsByClassName("cuadrado-16");
    var c17= document.getElementsByClassName("cuadrado-17");
    var c18= document.getElementsByClassName("cuadrado-18");
    var c19= document.getElementsByClassName("cuadrado-19");
    for (var datos=0; datos<c16.length; datos++){
        c16[datos].style.backgroundColor="#00ff00";
    }
    for (var datos=0; datos<c17.length; datos++){
        c17[datos].style.backgroundColor="#b3b3b3";
    }
    for (var datos=0; datos<c18.length; datos++){
        c18[datos].style.backgroundColor="#00ff00";
    }
    for (var datos=0; datos<c19.length; datos++){
        c19[datos].style.backgroundColor="#00ff00";
    }

    var c20= document.getElementsByClassName("cuadrado-20");
    var c21= document.getElementsByClassName("cuadrado-21");
    var c22= document.getElementsByClassName("cuadrado-22");
    var c23= document.getElementsByClassName("cuadrado-23");
    for (var datos=0; datos<c20.length; datos++){
        c20[datos].style.backgroundColor="red";
    }
    for (var datos=0; datos<c21.length; datos++){
        c21[datos].style.backgroundColor="#00ff00";
    }
    for (var datos=0; datos<c22.length; datos++){
        c22[datos].style.backgroundColor="#00ff00";
    }
    for (var datos=0; datos<c23.length; datos++){
        c23[datos].style.backgroundColor="#00ff00";
    }
}

function residentes_sindeudas(){
    var datos = data.Urbanizaciones
    var c1= document.getElementsByClassName("cuadrado-1");
    var c2= document.getElementsByClassName("cuadrado-2");
    var c3= document.getElementsByClassName("cuadrado-3");
    var c4= document.getElementsByClassName("cuadrado-4");
    var c5= document.getElementsByClassName("cuadrado-5");
    var c6= document.getElementsByClassName("cuadrado-6");
    for (var datos=0; datos<c1.length; datos++){
        c1[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<c2.length; datos++){
        c2[datos].style.backgroundColor="#00ff00";
    }
    for (var datos=0; datos<c3.length; datos++){
        c3[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<c4.length; datos++){
        c4[datos].style.backgroundColor="#00ff00";
    }
    for (var datos=0; datos<c5.length; datos++){
        c5[datos].style.backgroundColor="#00ff00";
    }
    for (var datos=0; datos<c6.length; datos++){
        c6[datos].style.backgroundColor="#00ff00";
    }

    var c7= document.getElementsByClassName("cuadrado-7");
    var c8= document.getElementsByClassName("cuadrado-8");
    var c9= document.getElementsByClassName("cuadrado-9");
    var c10= document.getElementsByClassName("cuadrado-10");
    var c11= document.getElementsByClassName("cuadrado-11");
    for (var datos=0; datos<c7.length; datos++){
        c7[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<c8.length; datos++){
        c8[datos].style.backgroundColor="#00ff00";
    }
    for (var datos=0; datos<c9.length; datos++){
        c9[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<c10.length; datos++){
        c10[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<c11.length; datos++){
        c11[datos].style.backgroundColor="white";
    }

    var c12= document.getElementsByClassName("cuadrado-12");
    var c13= document.getElementsByClassName("cuadrado-13");
    var c14= document.getElementsByClassName("cuadrado-14");
    var c15= document.getElementsByClassName("cuadrado-15");
    for (var datos=0; datos<c12.length; datos++){
        c12[datos].style.backgroundColor="#00ff00";
    }
    for (var datos=0; datos<c13.length; datos++){
        c13[datos].style.backgroundColor="#00ff00";
    }
    for (var datos=0; datos<c14.length; datos++){
        c14[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<c15.length; datos++){
        c15[datos].style.backgroundColor="#00ff00";
    }

    var c16= document.getElementsByClassName("cuadrado-16");
    var c17= document.getElementsByClassName("cuadrado-17");
    var c18= document.getElementsByClassName("cuadrado-18");
    var c19= document.getElementsByClassName("cuadrado-19");
    for (var datos=0; datos<c16.length; datos++){
        c16[datos].style.backgroundColor="#00ff00";
    }
    for (var datos=0; datos<c17.length; datos++){
        c17[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<c18.length; datos++){
        c18[datos].style.backgroundColor="#00ff00";
    }
    for (var datos=0; datos<c19.length; datos++){
        c19[datos].style.backgroundColor="#00ff00";
    }

    var c20= document.getElementsByClassName("cuadrado-20");
    var c21= document.getElementsByClassName("cuadrado-21");
    var c22= document.getElementsByClassName("cuadrado-22");
    var c23= document.getElementsByClassName("cuadrado-23");
    for (var datos=0; datos<c20.length; datos++){
        c20[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<c21.length; datos++){
        c21[datos].style.backgroundColor="#00ff00";
    }
    for (var datos=0; datos<c22.length; datos++){
        c22[datos].style.backgroundColor="#00ff00";
    }
    for (var datos=0; datos<c23.length; datos++){
        c23[datos].style.backgroundColor="#00ff00";
    }
}

function residentes_condeudas(){
    var datos = data.Urbanizaciones
    var c1= document.getElementsByClassName("cuadrado-1");
    var c2= document.getElementsByClassName("cuadrado-2");
    var c3= document.getElementsByClassName("cuadrado-3");
    var c4= document.getElementsByClassName("cuadrado-4");
    var c5= document.getElementsByClassName("cuadrado-5");
    var c6= document.getElementsByClassName("cuadrado-6");
    for (var datos=0; datos<c1.length; datos++){
        c1[datos].style.backgroundColor="#ffff00";
    }
    for (var datos=0; datos<c2.length; datos++){
        c2[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<c3.length; datos++){
        c3[datos].style.backgroundColor="#ffff00";
    }
    for (var datos=0; datos<c4.length; datos++){
        c4[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<c5.length; datos++){
        c5[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<c6.length; datos++){
        c6[datos].style.backgroundColor="white";
    }

    var c7= document.getElementsByClassName("cuadrado-7");
    var c8= document.getElementsByClassName("cuadrado-8");
    var c9= document.getElementsByClassName("cuadrado-9");
    var c10= document.getElementsByClassName("cuadrado-10");
    var c11= document.getElementsByClassName("cuadrado-11");
    for (var datos=0; datos<c7.length; datos++){
        c7[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<c8.length; datos++){
        c8[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<c9.length; datos++){
        c9[datos].style.backgroundColor="#ffff00";
    }
    for (var datos=0; datos<c10.length; datos++){
        c10[datos].style.backgroundColor="#ffff00";
    }
    for (var datos=0; datos<c11.length; datos++){
        c11[datos].style.backgroundColor="red";
    }

    var c12= document.getElementsByClassName("cuadrado-12");
    var c13= document.getElementsByClassName("cuadrado-13");
    var c14= document.getElementsByClassName("cuadrado-14");
    var c15= document.getElementsByClassName("cuadrado-15");
    for (var datos=0; datos<c12.length; datos++){
        c12[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<c13.length; datos++){
        c13[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<c14.length; datos++){
        c14[datos].style.backgroundColor="#ffff00";
    }
    for (var datos=0; datos<c15.length; datos++){
        c15[datos].style.backgroundColor="white";
    }

    var c16= document.getElementsByClassName("cuadrado-16");
    var c17= document.getElementsByClassName("cuadrado-17");
    var c18= document.getElementsByClassName("cuadrado-18");
    var c19= document.getElementsByClassName("cuadrado-19");
    for (var datos=0; datos<c16.length; datos++){
        c16[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<c17.length; datos++){
        c17[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<c18.length; datos++){
        c18[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<c19.length; datos++){
        c19[datos].style.backgroundColor="white";
    }

    var c20= document.getElementsByClassName("cuadrado-20");
    var c21= document.getElementsByClassName("cuadrado-21");
    var c22= document.getElementsByClassName("cuadrado-22");
    var c23= document.getElementsByClassName("cuadrado-23");
    for (var datos=0; datos<c20.length; datos++){
        c20[datos].style.backgroundColor="red";
    }
    for (var datos=0; datos<c21.length; datos++){
        c21[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<c22.length; datos++){
        c22[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<c23.length; datos++){
        c23[datos].style.backgroundColor="white";
    }
}

function residentes_sinprop(){
    var datos = data.Urbanizaciones
    var c1= document.getElementsByClassName("cuadrado-1");
    var c2= document.getElementsByClassName("cuadrado-2");
    var c3= document.getElementsByClassName("cuadrado-3");
    var c4= document.getElementsByClassName("cuadrado-4");
    var c5= document.getElementsByClassName("cuadrado-5");
    var c6= document.getElementsByClassName("cuadrado-6");
    for (var datos=0; datos<c1.length; datos++){
        c1[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<c2.length; datos++){
        c2[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<c3.length; datos++){
        c3[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<c4.length; datos++){
        c4[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<c5.length; datos++){
        c5[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<c6.length; datos++){
        c6[datos].style.backgroundColor="white";
    }

    var c7= document.getElementsByClassName("cuadrado-7");
    var c8= document.getElementsByClassName("cuadrado-8");
    var c9= document.getElementsByClassName("cuadrado-9");
    var c10= document.getElementsByClassName("cuadrado-10");
    var c11= document.getElementsByClassName("cuadrado-11");
    for (var datos=0; datos<c7.length; datos++){
        c7[datos].style.backgroundColor="#b3b3b3";
    }
    for (var datos=0; datos<c8.length; datos++){
        c8[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<c9.length; datos++){
        c9[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<c10.length; datos++){
        c10[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<c11.length; datos++){
        c11[datos].style.backgroundColor="white";
    }

    var c12= document.getElementsByClassName("cuadrado-12");
    var c13= document.getElementsByClassName("cuadrado-13");
    var c14= document.getElementsByClassName("cuadrado-14");
    var c15= document.getElementsByClassName("cuadrado-15");
    for (var datos=0; datos<c12.length; datos++){
        c12[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<c13.length; datos++){
        c13[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<c14.length; datos++){
        c14[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<c15.length; datos++){
        c15[datos].style.backgroundColor="white";
    }

    var c16= document.getElementsByClassName("cuadrado-16");
    var c17= document.getElementsByClassName("cuadrado-17");
    var c18= document.getElementsByClassName("cuadrado-18");
    var c19= document.getElementsByClassName("cuadrado-19");
    for (var datos=0; datos<c16.length; datos++){
        c16[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<c17.length; datos++){
        c17[datos].style.backgroundColor="#b3b3b3";
    }
    for (var datos=0; datos<c18.length; datos++){
        c18[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<c19.length; datos++){
        c19[datos].style.backgroundColor="white";
    }

    var c20= document.getElementsByClassName("cuadrado-20");
    var c21= document.getElementsByClassName("cuadrado-21");
    var c22= document.getElementsByClassName("cuadrado-22");
    var c23= document.getElementsByClassName("cuadrado-23");
    for (var datos=0; datos<c20.length; datos++){
        c20[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<c21.length; datos++){
        c21[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<c22.length; datos++){
        c22[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<c23.length; datos++){
        c23[datos].style.backgroundColor="white";
    }
}



