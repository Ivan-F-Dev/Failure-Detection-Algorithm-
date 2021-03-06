let numberOfChangedCase // ввод пользователя
let currentCase //переменная для присвоения выбранного сценария
const insertSetStartCase = document.querySelector('#inputSetStartCase')
const buttonSetStartCase = document.querySelector('#buttonSetStartCase')
buttonSetStartCase.onclick = play
 function play () {
     switch (insertSetStartCase.value) {
         case "10": numberOfChangedCase = 0; break
         case "11": numberOfChangedCase = 1; break
         case "20": numberOfChangedCase = 2; break
         case "21": numberOfChangedCase = 3; break
         case "30": numberOfChangedCase = 4; break
         case "31": numberOfChangedCase = 5; break
         case "40": numberOfChangedCase = 6; break
         case "41": numberOfChangedCase = 7; break
         case "50": numberOfChangedCase = 8; break
         case "51": numberOfChangedCase = 9; break
         case "60": numberOfChangedCase = 10; break
         case "61": numberOfChangedCase = 11; break
         case "70": numberOfChangedCase = 12; break
         case "71": numberOfChangedCase = 13; break
         default: numberOfChangedCase = 0
     }
     insertSetStartCase.value = ''
     currentCase = failureCases[numberOfChangedCase]
     console.log(currentCase)
     for (i = 0; i < currentCase.length; i++) {
         allSensors[i].setValue(currentCase[i])
     }
 }



class Sensor {
    constructor(type, value, number) {
        this.type = type
        this.value = value
        this.number = number
        this.elemSensor = document.querySelector('#sensor' + number)
    }
    _setColor = () => {
        let newColor
        switch (this.value) {
            case '+' : newColor = 'red'
                break
            case '-' : newColor = 'gainsboro'
                break
            default: newColor = 'green'
        }
        document.querySelector('#sensor' + this.number).style.borderColor = newColor
        console.log(newColor)
    }
    setValue = (newValue) => {
        this.value = newValue
        this._setColor()
        console.log(`Sensor of ${this.type} number ${this.number} was update with new value: '${this.value}'`)
    }
}

const currentSensor1 = new Sensor('current', 'H', 1)
const currentSensor2 = new Sensor('voltage', 'H', 2)
const currentSensor3 = new Sensor('current', 'H', 3)
const currentSensor4 = new Sensor('current', 'H', 4)
const currentSensor5 = new Sensor('voltage', 'H', 5)
let allSensors = [
    currentSensor1,currentSensor2,currentSensor3,currentSensor4,currentSensor5
]

failureCases = [
    ['-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-'],

    ['-', 'H', '-', '-', '-'],
    ['+', '-', '-', '-', '-'],

    ['-', 'H', '-', '-', '-'],
    ['+', '-', '-', '-', '-'],

    ['-', 'H', '-', '-', '-'],
    ['+', '-', '+', '-', '-'],

    ['-', 'H', '-', '-', '-'],
    ['+', '-', '+', '-', '-'],

    ['-', 'H', '-', '-', 'H'],
    ['+', '-', '+', '+', '-'],

    ['-', 'H', '-', '-', 'H'],
    ['+', '-', '+', '+', '-'],
] // массив с разными сценариями отказа



