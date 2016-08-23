var hours = Number(process.argv[2]);
var minutes = Number(process.argv[3]);

// Немного замечательного кода и магии
function toRim(n) {
    var ara = [50, 40, 10, 9, 5, 4, 1];
    var rim = ['L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    for (var i = 0; i < ara.length; i++) {
        if(n < 1)
            return "";
        if(n >= ara[i]) {
            return rim[i] + toRim(n - ara[i]);
        }
    }
}
if ( hours < 0 ||hours > 23 ||minutes < 0 ||minutes > 59  )
    console.log("В сутках 24 часа,исправь значения!");
else {
    var time = toRim(hours)+ ':' + toRim(minutes);
    console.log(time);
}