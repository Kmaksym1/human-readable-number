module.exports = function toReadable (number) {
    let numSimple = {
        1: 'one', 
        2: 'two', 
        3: 'three', 
        4: 'four', 
        5: 'five', 
        6: 'six', 
        7: 'seven',
        8: 'eight', 
        9: 'nine'
    }
    let num20to99 = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    }
    let num1to19 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
    'eight', 'nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen',
'seventeen','eighteen','nineteen'];
    let stringifiredNumber = number.toString();
    
    if (0 <= number && number < 20) {
        return num1to19[number];
    } 
/////////////////////////////////////////////////////////
    else if (20 <= number && number < 100)
    {
        if (stringifiredNumber[1]==='0'){
            return num20to99[stringifiredNumber[0]];}
        else {
            return num20to99[stringifiredNumber[0]]+' '+numSimple[stringifiredNumber[1]];
        }
    }
////////////////////////////////////////////////////////////
    if (number >= 100 && number < 1000)
    {
        if (stringifiredNumber[1]==='0' && stringifiredNumber[2]==='0'){
            return numSimple[stringifiredNumber[0]]+' hundred';
        } 
        const from11to20 = Number(stringifiredNumber[1] + stringifiredNumber[2]);
        if (10 <= from11to20 && from11to20 < 20) {
            return numSimple[stringifiredNumber[0]] + ' hundred ' + num1to19[from11to20];
        }
        if (stringifiredNumber[1]==='0'){
            return numSimple[stringifiredNumber[0]] +' hundred'+' '+numSimple[stringifiredNumber[2]];
        } 
        if (stringifiredNumber[2]==='0'){
            return numSimple[stringifiredNumber[0]] +' hundred' +' '+num20to99[stringifiredNumber[1]];
        } 
        else {
            return numSimple[stringifiredNumber[0]] +' hundred' +' '+num20to99[stringifiredNumber[1]]+' '+numSimple[stringifiredNumber[2]];
        }
    }
}