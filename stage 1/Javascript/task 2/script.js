function buttonRun(){
    let x1 = document.getElementById('x1').value;
    let x2 = document.getElementById('x2').value;
    
    if(x1 == '' || x2 == ''){
        alert("Поля x1 и x2 должны быть заполнены")
    } else if(Number.isNaN(+x1) || Number.isNaN(+x2)) {
        alert("В поля x1 и x2 должны быть введены числовые значения")
    } else {
        x1 = +x1;
        x2 = +x2;
        let resultDiv = document.getElementById('result');
        resultDiv.innerText = '';
        if(getRadioValue("switcher") == "sum"){
            let sum = 0;
            for(let i = x1; i <= x2; i++)
                sum += i;
            resultDiv.append("Сумма всех чисел от x1 до x2 = ", sum);
        }
        if(getRadioValue("switcher") == "mult"){
            let mult = 1;
            for(let i = x1; i <= x2; i++)
                mult *= i;
            resultDiv.append("Произведение всех чисел от x1 до x2 = ", mult);
        }
    }
}

function buttonClear(){
    document.getElementById('x1').value = '';
    document.getElementById('x2').value = '';
}

function getRadioValue(name)
{
    for (var i = 0; i < document.getElementsByName(name).length; i++)
    {
        if (document.getElementsByName(name)[i].checked)
        {
            return document.getElementsByName(name)[i].value;     
        }
    }
}
    