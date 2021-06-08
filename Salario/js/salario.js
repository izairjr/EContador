// Faixa Salarial, base INSS
var F_INSS = [ F1 = 1100,
               F2 = 2203.48,
               F3 = 3305.22,
               F4 = 6433.57];
// Faixa Salarial , base IRPF
var F_IRPF = [ Fa1 = 1903.98,
               Fa2 = 2826.65,
               Fa3 = 3751.05,
               Fa4 = 4664.68];

// Aliquota INSS
var A_INSS = [A1 = 0.075, 
              A2 = 0.09,
              A3 = 0.12,
              A4=  0.14];
// Aliquota IRPF
var A_IRPF = [I = 0,
              Ab1 = 0.075,
              Ab2 = 0.15,
              Ab3 = 0.225,
              Ab4 = 0.275];
// Dedução IRPF
var DED_IRPF = [d1 = 142.80,
                d2 = 354.80,
                d3 = 636.13,
                d4 = 869.36];
ALIQGFGTS = 0.08;
dias_uteis = 24;
var salario , INSS, ALIQINSS, FTGS, ALIQGFGTS, ALIQIRPF, IRPF, base_irpf, sal_bruto , salario_final, horas, hr_vl ;

//recebe valores

    
function confirmasal(){
salario = document.getElementById("salario").value;
horas = document.getElementById("carga_hr").value;
console.log(horas);
console.log(salario);
alert("O salario informado é de  $" + salario);


 
//ALIQ INSS
if (salario <= F1){
    ALIQINSS = A1;
    console.log(ALIQINSS);
   } else if (salario > F1  && salario <= F2){
    ALIQINSS = A2;
    console.log(ALIQINSS);
   } else if (salario > F2 && salario <= F3){
    ALIQINSS = A3;
    console.log(ALIQINSS);
   } else if (salario > F3){
    ALIQINSS = A4;
    console.log(ALIQINSS);
   } else{
       console.log("INVALID");}
// Aliq IRRF
if (salario <= Fa1) {
    ALIQIRPF = I;
    console.log(ALIQIRPF);
} else if (salario > Fa1 && salario <=Fa2 ){
    ALIQIRPF = Ab1;
    console.log(ALIQIRPF);
}else if (salario > Fa2 && salario <= Fa3){
    ALIQIRPF = Ab2;
    console.log(ALIQIRPF);
}else if (salario > Fa2 && salario <= Fa4){
    ALIQIRPF = Ab3;
    console.log(ALIQIRPF);
}else if (salario > Fa4){
    ALIQIRPF = Ab4;
    console.log(ALIQIRPF);
}
document.getElementById("ALIQINSS").innerHTML= ("A Aliquota de INSS será de " + ALIQINSS * 100 + "%");
document.getElementById("ALIQFGTS").innerHTML= ("A Aliquota de FGTS será de " + ALIQGFGTS * 100 + "%");
document.getElementById("ALIQIRPF").innerHTML= ("A Aliquota de IRPF será de " + ALIQIRPF  * 100 + "%");
}




//Calcula valores salario
function Calcular(){
//INSS
INSS = (salario * (ALIQINSS));
//FGTS
FGTS = (salario * (ALIQGFGTS));
//IRPF
base_irpf = ((salario - INSS) * ALIQIRPF);
console.log(base_irpf);
if (ALIQIRPF == I) {
    IRPF = 0;
    console.log(IRPF);
} else if (ALIQIRPF == Ab1){
    IRPF = ( base_irpf - d1);
    console.log(IRPF);
}else if (ALIQIRPF == Ab2){
    IRPF = ( base_irpf - d2);
    console.log(IRPF);
}else if (ALIQIRPF == Ab3){
    IRPF = ( base_irpf - d3);
    console.log(IRPF);
}else if (ALIQIRPF == Ab4){
    IRPF = ( base_irpf - d4);
    console.log(IRPF);}
//Salario Final
salario_final = ((salario - INSS) - IRPF);
console.log(salario_final);
hr_vl = ((salario_final/dias_uteis) / horas);
console.log(hr_vl);

//Demonstra resultado
document.getElementById("INSS").innerHTML= ("O valor devido de INSS é de $"+(parseFloat(INSS).toFixed(2)));
document.getElementById("FGTS").innerHTML= ("O valor devido de FGTS é de $"+(parseFloat(FGTS).toFixed(2)));
if (IRPF <= 0){
document.getElementById("IRPF").innerHTML= ("Para sua faixa Salarial, o IRPF é isento.");
}else{
document.getElementById("IRPF").innerHTML= ("O valor devido de IRPF é de $"+(parseFloat(IRPF).toFixed(2)));}
document.getElementById("SALARIO_F").innerHTML= ("O Saldo final do salario é de $"+ (parseFloat(salario_final).toFixed(2)));
document.getElementById("hora_vl").innerHTML= ("O valor por hora trabalhada é de $"+ (parseFloat(hr_vl).toFixed(2)));
alert("Salario Calculado com sucesso");
}
//Horas extras
var totalextra , hr_vl50, hr_vl100;
function hora50(){
    hr_vlex = ((hr_vl * 0.5) + hr_vl);
    console.log(hr_vlex);
}

function hora100(){
    hr_vlex = ((hr_vl * 2) + hr_vl);
    console.log(hr_vlex);
}
function calcula_extras(){
    horas_extras = document.getElementById("Horasfeitas").value;
    console.log(horas_extras);
    totalextra = (horas_extras * hr_vlex);
    console.log(totalextra);
    document.getElementById("totalextra").innerHTML= ("O total de hora extra é  $"+ (parseFloat(totalextra).toFixed(2)));

}

