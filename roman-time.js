var hours = process.argv[2];
var minutes = process.argv[3];
if (num < 0 || num > 23) {
         console.log("Время указано не верно. Введите значение в диапозоне от 0 до 23");
          return;
        } else {
                  if (hours > 0 || hours < 24) {
                            console.log(hours);
                  }
        }



//На вход скрипт всегда принимает два числа через пробел:

вначале часы hours (от 0 до 23),
затем минуты minutes (от 0 до 59).
Вызов скрипта:

node roman-time.js 15 40
Должен выводить время римскими цифрами через «:»

XV:XL
Если время указано неверно:

node roman-time.js 25 40
Скрипт должен выводить «Время указано не верно».
