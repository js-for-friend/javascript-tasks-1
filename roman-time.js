var hours = process.argv[2];
var minutes = process.argv[3];
if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59 hours) {
    console.log('Время указано неверно')
} else {
    var romanRes = convert(hours)+ ':' + convert(minutes);
    console.log(romanRes+'\n');
    writeASCII(romanRes);
}
