module.exports = function toReadable (number) {
    let strNum = number.toString();
    let result;
    if (number >= 0 && number < 10) {
        return result = getDigits(strNum);
    } else if (number >= 10 && number < 20) {
        return result = getTeens(strNum);
    } else if (number >= 20 && number < 100) {
        if (strNum[1] === '0') {
         return result = getTens(strNum);
        } else {
           return result = `${getTens(strNum[0] + 0)} ${getDigits(strNum[1])}`;
        }
    } else if (number >= 100 && number < 1000) {
        let hundred = `${getDigits(strNum[0])} hundred`;
        if (strNum[1] === '0' && strNum[2] === '0' ) {
         return result = hundred;
        }
        else if ((strNum[1] === '0' && strNum[2] < 10)) {
           return result = `${hundred} ${getDigits(strNum[2])}`;
        }
        else if (strNum.slice(1,3) >= 10 && strNum.slice(1,3) < 20) {
            return result = `${hundred} ${getTeens(strNum.slice(1,3))}`;
        }
        else if (strNum.slice(1,3) >= 20 && strNum.slice(1,3) < 100) {
            if (strNum[2] === '0') {
              return result = `${hundred} ${getTens(strNum.slice(1,3))}`;
            } else {
              return result = `${hundred} ${getTens((strNum[1]+ 0))} ${getDigits(strNum[2])}`;
            }
        }
    }

    function getDigits(number) {
        switch (number) {
            case '0': return 'zero';
            break;
            case '1': return 'one';
            break;
            case '2': return 'two';
            break;
            case '3': return 'three';
            break;
            case '4': return 'four';
            break;
            case '5': return 'five';
            break;
            case '6': return 'six';
            break;
            case '7': return 'seven';
            break;
            case '8': return 'eight';
            break;
            case '9': return 'nine';
            break;
        }
    }
    function getTeens(number) {
        switch (number) {
            case '10': return 'ten';
            break;
            case '11': return 'eleven';
            break;
            case '12': return 'twelve';
            break;
            case '13': return 'thirteen';
            break;
            case '14': return 'fourteen';
            break;
            case '15': return 'fifteen';
            break;
            case '16': return 'sixteen';
            break;
            case '17': return 'seventeen';
            break;
            case '18': return 'eighteen';
            break;
            case '19': return 'nineteen';
            break;
        }
    }
    function getTens(number) {
        switch (number) {
            case '20': return 'twenty';
            break;
            case '30': return 'thirty';
            break;
            case '40': return 'forty';
            break;
            case '50': return 'fifty';
            break;
            case '60': return 'sixty';
            break;
            case '70': return 'seventy';
            break;
            case '80': return 'eighty';
            break;
            case '90': return 'ninety';
        }
    }
  }
