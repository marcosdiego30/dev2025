function insert(number){
    const numero = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = numero + number
}

function clean(){
    document.getElementById('result').innerHTML = '';
}

function back(){
    const resultado = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular(){
    const resultado = document.getElementById('result').innerHTML;
    if(resultado){
        document.getElementById('result').innerHTML = eval(resultado);

    }else{
        document.getElementById('result').innerHTML = 'Sem valor'
    }
}