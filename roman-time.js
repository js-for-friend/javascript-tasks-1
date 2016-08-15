var hours = process.argv[2];
var minutes = process.argv[3];
if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59 hours) {
    console.log('Время указано неверно')
} else {
    var time = toRome(hours)+ ':' + toRome(minutes);
    console.log(time+'\n');
}

function toRome(numb) {
    var arabNumb=[1,4,5,9,10,40,50];
    var romNumb= ["I", "IV", "V", "IX", "X", "XL", "L"];
    if ((!numb)||(numb == 0)) {
        return '';
    }
    var result = '';
    var n = arabNumb.length - 1;
    while (numb >0) {
        if (numb>=arabNumb[n])  {
            result += romNumb[n];
            numb-=arabNumb[n];
        } else {
            n--;
        }
    }
    return result;
}
