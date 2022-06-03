const biblioteca = [ 
    {nota2:2 ,nota3:3  ,fundamental: "",nombre:  " no exite"},
    {nota2:2 ,nota3:4  ,fundamental: "",nombre:  " no exite"},
    {nota2:2 ,nota3:5  ,fundamental:2  ,nombre:  " min(no5)maj7" },
    {nota2:2 ,nota3:6  ,fundamental:2  ,nombre:  " maj7"},
    {nota2:2 ,nota3:7  ,fundamental:7  ,nombre:  " 5#11"},
    {nota2:2 ,nota3:8  ,fundamental:2  ,nombre:  " maj7(no3 b5)"},
    {nota2:2 ,nota3:9  ,fundamental:2  ,nombre:  " maj7(no3)"},
    {nota2:2 ,nota3:10 ,fundamental:2  ,nombre:  " maj7(no3 #5"},
    {nota2:2 ,nota3:11 ,fundamental:11 ,nombre:  " min(no5)add 9"},
    {nota2:2 ,nota3:12 ,fundamental: "",nombre:  " no exite"},
    {nota2:3 ,nota3:4  ,fundamental:1  ,nombre:  " min(no5) add9"},
    {nota2:3 ,nota3:5  ,fundamental:1  ,nombre:  " maj(no5) 9"},
    {nota2:3 ,nota3:6  ,fundamental:3  ,nombre:  " min7"},
    {nota2:3 ,nota3:7  ,fundamental:1  ,nombre:  " sus2(b5)"},
    {nota2:3 ,nota3:8  ,fundamental:1  ,nombre:  " sus2"},
    {nota2:3 ,nota3:9  ,fundamental:9  ,nombre:  " maj(b5)"},
    {nota2:3 ,nota3:10 ,fundamental:3  ,nombre:  " 7(no3)"},
    {nota2:3 ,nota3:11 ,fundamental:11 ,nombre:  " maj(no5) 9"},
    {nota2:3 ,nota3:12 ,fundamental:"" ,nombre:  " no exite"},
    {nota2:4 ,nota3:5  ,fundamental:5  ,nombre:  " maj7(no3 #5)"},
    {nota2:4 ,nota3:6  ,fundamental:6  ,nombre:  " 7(no3)"},
    {nota2:4 ,nota3:7  ,fundamental:1  ,nombre:  " dim"},
    {nota2:4 ,nota3:8  ,fundamental:1  ,nombre:  " min"},
    {nota2:4 ,nota3:9  ,fundamental:9  ,nombre:  " maj"},
    {nota2:4 ,nota3:10 ,fundamental:10 ,nombre:  " dim"},
    {nota2:4 ,nota3:11 ,fundamental:1  ,nombre:  " min7"},
    {nota2:4 ,nota3:12 ,fundamental:1  ,nombre:  " min(no5) maj7"},
    {nota2:5 ,nota3:6  ,fundamental:6  ,nombre:  " maj7(no3)"},
    {nota2:5 ,nota3:7  ,fundamental:1  ,nombre:  " maj(b5)"},
    {nota2:5 ,nota3:8  ,fundamental:1  ,nombre:  " maj"},
    {nota2:5 ,nota3:9  ,fundamental:1  ,nombre:  " aug"},
    {nota2:5 ,nota3:10 ,fundamental:10 ,nombre:  " min"},
    {nota2:5 ,nota3:11 ,fundamental:11 ,nombre:  " sus2(b5)"},
    {nota2:5 ,nota3:12 ,fundamental:1  ,nombre:  " maj7"},
    {nota2:6 ,nota3:7  ,fundamental:7  ,nombre:  " maj7(no3 b5)"},
    {nota2:6 ,nota3:8  ,fundamental:1  ,nombre:  " sus4"},
    {nota2:6 ,nota3:9  ,fundamental:6  ,nombre:  " min"},
    {nota2:6 ,nota3:10 ,fundamental:6  ,nombre:  " maj"},
    {nota2:6 ,nota3:11 ,fundamental:6  ,nombre:  " sus4"},
    {nota2:6 ,nota3:12 ,fundamental:6  ,nombre:  " 5 #11"},
    {nota2:7 ,nota3:8  ,fundamental:1  ,nombre:  " 5 #11"},
    {nota2:7 ,nota3:9  ,fundamental:7  ,nombre:  " sus2(b5)"},
    {nota2:7 ,nota3:10 ,fundamental:7  ,nombre:  " dim"},
    {nota2:7 ,nota3:11 ,fundamental:7  ,nombre:  " maj(b5)"},
    {nota2:7 ,nota3:12 ,fundamental:1  ,nombre:  " maj7(no3 b5)"},
    {nota2:8 ,nota3:9  ,fundamental:9  ,nombre:  " maj7"},
    {nota2:8 ,nota3:10 ,fundamental:10 ,nombre:  " min7"},
    {nota2:8 ,nota3:11 ,fundamental:1  ,nombre:  " 7(no3)"},
    {nota2:8 ,nota3:12 ,fundamental:1  ,nombre:  " maj7(no3)"},
    {nota2:9 ,nota3:10 ,fundamental:10 ,nombre:  " min(no5) maj7"},
    {nota2:9 ,nota3:11 ,fundamental:9  ,nombre:  " maj(no5)9"},
    {nota2:9 ,nota3:12 ,fundamental:1  ,nombre:  " maj7(no3 #5)"},
    {nota2:10,nota3:11 ,fundamental:"" ,nombre:  " no exite"},
    {nota2:10,nota3:12 ,fundamental:10 ,nombre:  " min(no5)add9"},   
    {nota2:11,nota3:12 ,fundamental:"" ,nombre:  " no exite"},
]


const nota = [
    {cifAme:"c" ,cifLat:  "do",number: 1}, 
    {cifAme:"c#",cifLat: "do#",number: 2}, 
    {cifAme:"db",cifLat: "reb",number: 2}, 
    {cifAme:"d" ,cifLat:  "re",number: 3}, 
    {cifAme:"d#",cifLat: "re#",number: 4}, 
    {cifAme:"eb",cifLat: "mib",number: 4}, 
    {cifAme:"e" ,cifLat:  "mi",number: 5}, 
    {cifAme:"f" ,cifLat:  "fa",number: 6}, 
    {cifAme:"f#",cifLat: "fa#",number: 7}, 
    {cifAme:"gb",cifLat:"solb",number: 7}, 
    {cifAme:"g" ,cifLat: "sol",number: 8}, 
    {cifAme:"g#",cifLat:"sol#",number: 9}, 
    {cifAme:"ab",cifLat: "lab",number: 9}, 
    {cifAme:"a" ,cifLat:  "la",number:10}, 
    {cifAme:"a#",cifLat: "la#",number:11}, 
    {cifAme:"bb",cifLat: "sib",number:11}, 
    {cifAme:"b" ,cifLat:  "si",number:12}, 
];


const convertidor = (parametro) => {
    let resultadoFinal = "";
    let resultado = nota.filter(y => y.cifAme === parametro.toLowerCase())
         if (resultado.length === 0) {
           resultado = nota.filter(x => x.cifLat === parametro.toLowerCase())
        }
    
        if (resultado.length > 0) { resultadoFinal = resultado[0].number;}
              else {resultadoFinal = "";}
    return resultadoFinal;
}

// let notita.toLowerCase

const triada = (uno,dos,tres) =>{
  let segunda = uno - dos;
     if(segunda>0){segunda = 12 - segunda + 1 ;}
         else if(segunda<0){segunda = -1*segunda + 1;}
             else{segunda = 0}
  let tercera = uno - tres;
     if(tercera>0){tercera = 12 - tercera + 1;}
         else if(tercera<0){tercera = -1*tercera + 1;}
             else{tercera = 0}
  if(segunda<tercera){return [uno,1,segunda,tercera]}
     else if(segunda>tercera){return [uno,1,tercera,segunda]}
         else if(segunda === 0 || tercera === 0){return "se repite el acorde" }
             else{ return "error"}
};



const detector = (acorde) =>{

const triada2 = biblioteca.filter(x => x.nota2 === acorde[2] );

const triada3 = triada2.filter(y => y.nota3 === acorde[3] );

const principal = nota.filter(z => z.number === acorde[0]) 
 
let printMay = principal[0].cifAme

return  printMay.toUpperCase() + triada3[0].nombre
}


let acorde = triada(convertidor(prompt("tonica")),convertidor(prompt("Segunda nota")),convertidor(prompt("Tercera nota")))

console.log(detector(acorde));
