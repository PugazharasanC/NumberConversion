var ones = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ', 'Ten ', 'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen '];
var tens = ['', '', 'Twenty ', 'Thirty ', 'Forty ', 'Fifty ', 'Sixty ', 'Seventy ', 'Eighty ', 'Ninety '];
var numToWords = (value, str) => {
    var ansStr = '';
    if (value > 19)
        ansStr += tens[Math.floor(value / 10)] + ones[value % 10];
    else
        ansStr += ones[value];
    if (value)
        ansStr += str;
    return ansStr;
}
var convertNumToWords = (value, flag) => {
    var ansStr = '';
    if (typeof value != 'number')
        value = parseInt(value);
    var needAnd = 0;
    if (Math.floor(value / 100000000) > 0) {
        ansStr += convertNumToWords(Math.floor(value / 10000000), 1) + 'Crore';
        value = value % 10000000;
        if (value!=0)
        ansStr+=' and ';
        needAnd = 1;
    } else
        ansStr += numToWords(Math.floor(value / 10000000), 'Crore ');
    ansStr += numToWords((Math.floor(value / 100000) % 100), 'Lakh ');
    ansStr += numToWords((Math.floor(value / 1000) % 100), 'Thousand ');
    ansStr += numToWords((Math.floor(value / 100) % 10), 'Hundred ');
    if ((value > 100 && value % 100 != 0 && needAnd == 1) || (value > 100 && value % 100 != 0 && flag == 0))
        ansStr += 'and ';
    ansStr += numToWords((value % 100), '');
    return ansStr;
}
var convertNow = () => {
    var input = document.getElementById('inputNum').value;
    var ans = convertNumToWords(input, 0);
    var newDiv = document.createElement('div');
    newDiv.className = 'row';
    var newNumDiv = document.createElement('div');
    newNumDiv.classList.add('col-6');
    newNumDiv.classList.add('border');
    newNumDiv.classList.add('border-primary');
    newNumDiv.innerHTML = input;
    var newWordDiv = document.createElement('div');
    newWordDiv.classList.add('col-6');
    newWordDiv.classList.add('border');
    newWordDiv.classList.add('border-primary');
    newWordDiv.innerHTML = ans;
    newDiv.appendChild(newNumDiv);
    newDiv.appendChild(newWordDiv);
    var histotyDiv = document.getElementById('history');
    histotyDiv.insertBefore(newDiv, histotyDiv.firstChild);
}