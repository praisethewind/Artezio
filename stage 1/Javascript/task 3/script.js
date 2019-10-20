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
        let arr = [];
        for(let i = 2; i < x2; i++){
            arr[i] = true;
        }
        var p = 2;
        do{
            for(let i = 2; i*p < x2; i++){
                arr[i*p] = false;
            }
            for(let i = p + 1; i < x2; i++){
                if(arr[i]){
                    p = i;
                    break;
                }
            }         
        } while(p * p < x2);

        for(let i = x1; i < arr.length; i++){
            if(arr[i])
                resultDiv.append(i + " ")
        }
    }
}

function buttonClear(){
    document.getElementById('x1').value = '';
    document.getElementById('x2').value = '';
}