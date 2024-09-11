let buttonShape = document.getElementById('buttonShape');

function changeTheme()
{
    if(buttonShape.style.float == 'left')
    {
        buttonShape.classList.remove('active');
        buttonShape.style.float = 'right';
        document.body.style.backgroundColor = 'black';
    }
    else
    {
        buttonShape.classList.add('active');
        buttonShape.style.float = 'left';
        document.body.style.backgroundColor = 'white';
    }
}

let outPut = document.getElementById('result');
let x = '';

function numberZeroFunction()
{
    x = '0';
    outPut.value += x;
    if (outPut.value.charAt(0) == '0')
        outPut.value = outPut.value.slice(0, 0);
}

function numberOneFunction()
{
    x = '1';
    outPut.value += x;
}

function numberTwoFunction()
{
    x = '2';
    outPut.value += x;
}

function numberThreeFunction()
{
    x = '3';
    outPut.value += x;
}

function numberFourFunction()
{
    x = '4';
    outPut.value += x;
}

function numberFiveFunction()
{
    x = '5';
    outPut.value += x;
}

function numberSixFunction()
{
    x = '6';
    outPut.value += x;
}

function numberSevenFunction()
{
    x = '7';
    outPut.value += x;
}

function numberEightFunction()
{
    x = '8';
    outPut.value += x;
}

function numberNineFunction()
{
    x = '9';
    outPut.value += x;
}

function decimalSignFunction()
{
    outPut.value += '.';
    if (outPut.value.charAt(0) == '.')
        outPut.value = '0.';
    else if (outPut.value.includes('..')) {
        let length = outPut.value.length;
        outPut.value = outPut.value.slice(0, length-1);
    }
}

function clearAllFunction()
{
    outPut.value = '';
}

function clearFunction()
{
    outPut.value = outPut.value.slice(0, -1);
}

function sumFunction()
{
    outPut.value += '+';
    if (outPut.value.charAt(0) == '+')
        outPut.value = outPut.value.slice(0, 0);
    else if (outPut.value.includes('++') || outPut.value.includes('-+') || outPut.value.includes('×+') || outPut.value.includes('÷+')) {
        let length = outPut.value.length;
        outPut.value = outPut.value.slice(0, length-1)
    }
}

function subFunction()
{
    outPut.value += '-';
    if (outPut.value.charAt(0) == '-')
        outPut.value = outPut.value.slice(0, 0);
    else if (outPut.value.includes('--') || outPut.value.includes('+-') || outPut.value.includes('×-') || outPut.value.includes('÷-')) {
        let length = outPut.value.length;
        outPut.value = outPut.value.slice(0, length-1);
    }
}

function mulFunction()
{
    outPut.value += '×';
    if (outPut.value.charAt(0) == '×')
        outPut.value = outPut.value.slice(0, 0);
    else if (outPut.value.includes('××') || outPut.value.includes('÷×') || outPut.value.includes('+×') || outPut.value.includes('-×')) {
        let length = outPut.value.length;
        outPut.value = outPut.value.slice(0, length-1);
    }
}

function divFunction()
{
    outPut.value += '÷';
    if (outPut.value.charAt(0) == '÷')
        outPut.value = outPut.value.slice(0, 0);
    else if (outPut.value.includes('÷÷') || outPut.value.includes('×÷') || outPut.value.includes('+÷') || outPut.value.includes('-÷')) {
        let length = outPut.value.length;
        outPut.value = outPut.value.slice(0, length-1);
    }
}

function equalFunction()
{
    if (outPut.value == '')
        outPut.value = '';
    else if (outPut.value.endsWith('+') || outPut.value.endsWith('-') || outPut.value.endsWith('÷') || outPut.value.endsWith('×') || outPut.value.endsWith('.'))
        outPut.value = outPut.value;
    else if (outPut.value.includes('÷0'))
        outPut.value = 'Undefind!';
    else {
        outPut.value = outPut.value.replaceAll('÷', '/');
        outPut.value = outPut.value.replaceAll('×', '*');
        outPut.value = eval(outPut.value);
    }
}