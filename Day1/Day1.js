//  Build a converte which converts Celsius to Fahrenheit and vice versa. The user should be able to input a value and select the conversion type (Celsius to Fahrenheit or Fahrenheit to Celsius). The converter should then display the converted value.

function Celsius(value){
    const celsius=(value-32)*5/9
    return console.log("The temperature in celsius",celsius,'C')
}
function Fahrenheit(value){
    const Fahrenheit=(value*1.8)+32
    return console.log("The temperature in Fahrenheit",Fahrenheit,'F')
}
// Celsius(1)
// Fahrenheit(1)

// make a BMI calculator that takes in a person's weight and height and calculates their BMI. The formula for BMI is weight (kg) / (height (m) * height (m)). The calculator should also categorize the BMI result into underweight, normal weight, overweight, or obese based on standard BMI ranges.

function BMI(weight,height){
    const BmiCal=(weight/(height*height))
    let Bmi;
    if(BmiCal<18.5){
        Bmi="Your are UnderWeight"
    }else if(BmiCal>18.5 && BmiCal<24.5){
         Bmi="Your are Normal-Weight"
    }else if(BmiCal>25 && BmiCal<29.9){
         Bmi="Your are Over-Weight"
    }else if(BmiCal>30 && BmiCal<34.9){
         Bmi="Your are obesity (class I)"
    }else if(BmiCal>35 && BmiCal<39.9){
         Bmi="Your are obesity (class II)"
    }else if(BmiCal>40){
         Bmi="Your are obesity (class III)"
    }
    else{
        Bmi=BmiCal
    }
  
    return console.log(`Your Bmi is ${BmiCal} & Your are ${Bmi}`)

    

}
BMI(50,1.70)
BMI(58,1.70)
BMI(86,1.70)
BMI(100,1.70)
BMI(102,1.70)
BMI(120,1.70)