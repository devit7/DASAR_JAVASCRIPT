const beratbadan=90,tinggibadan=170
var bmi=beratbadan/((tinggibadan/100)**2)
console.log("BMI : "+bmi)
console.log("Status Berat Badan : ")
if(bmi < 18.5){
    console.log("kekurangan beratbadan")
}else if(bmi >= 18.5 && bmi <=24.9){
    console.log("normal")
}else if(bmi >= 25.0 && bmi <= 29.9){
    console.log("kelebihan berat badan")
}else if(bmi >= 30.0){
    console.log("kegemukan")
}else{
    console.log("eror")
}

