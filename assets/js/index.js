function dailyProduction () {
    const valueShedA = parseInt(document.getElementById("quantityInputA").value);
    document.getElementById("dailyShedA").innerHTML = "Your production in Shed A is " + valueShedA + " litres per day"
    console.log(valueShedA)

    const valueShedB = parseInt(document.getElementById("quantityInputB").value);
    document.getElementById("dailyShedB").innerHTML = "Your production in Shed B is " + valueShedB + " litres per day"
    console.log(valueShedB)  

    const valueShedC= parseInt(document.getElementById("quantityInputC").value);
    document.getElementById("dailyShedC").innerHTML = "Your production in Shed C is " + valueShedC + " litres per day"
    console.log(valueShedC)

    const valueShedD = parseInt(document.getElementById("quantityInputD").value);
    document.getElementById("dailyShedD").innerHTML = "Your production in Shed D is " + valueShedD + " litres per day"
    console.log(valueShedD)

    const totalProduction = parseInt(valueShedA + valueShedB + valueShedC + valueShedD)
    document.getElementById("totalDailySheds").innerHTML = "Your production in all sheds is " + totalProduction + " litres per day"
    console.log(totalProduction)   
}
submitButton.addEventListener("click",dailyProduction)