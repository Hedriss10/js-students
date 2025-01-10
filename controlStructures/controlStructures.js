// a one line comment

/* control structure if and else and do and while and for,
  multiline comment
*/

// control structure if and else and do and while and for
var num = 1;
if (num == 1) {
    console.log('num is 1');
} else {
    console.log('num is not 1');
}

var num = 1;
if (num == 1) {
    console.log('num is 1');
} else {
    console.log('num is not 1');
}

var num = 1;
if (num == 1) {
    num--;
} else {
    num++;
}

var month = 5;
if (month === 1) {
    console.log('January');
} else if (month === 2) {
    console.log('February');
} else if (month === 3) {
    console.log('');
} else if (month === 5) {
    console.log('March');
}

var month = 'May';
switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('');
        break;
    case 5:
        console.log('March');
        break;
    default:
        console.log('Invalid month');
        break;
}