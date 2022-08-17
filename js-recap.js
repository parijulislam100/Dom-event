numbs=[1,2,3,4,5,6,7,8,9]
for(const numb of numbs){
    console.log(numb);
};

var girlFriends = ['ritu','lima','borsha'];
for(const gf of girlFriends){
    console.log(gf)
}

var girlFriends = ['biriani','morog ploou', 'kassi'];
for(const gf of girlFriends){
    var girl = gf + ' i love u';
    console.log(girl);
};

for(var i = 1; i <= 50;i++){
    console.log(i);
}

for(let i = 1; i  <= 50; i++){
    // console.log(i)
    if(i % 2== 0){
        console.log(i);
    }
}
console.log(`even number`)
for(var i = 1; i <= 50; i++){
    if(i %2 != 0){
        console.log(i)
    }
}

i =10
while(i >0){
    if(i == 6){
        break;
    }
    console.log(i);
    i = i -1
}
var  number = 100;
if(  number >= 80 && number <= 100){
     console.log( 'A+')
}
else if(  number >= 70 && number <= 79){
    console.log('A')
}
else if( number >= 60 && number <= 69){
    console.log('A-')
}
else  if(number >= 50 && number <= 59){
    console.log('B')
}
else if(number >= 40 && number <= 49){
    console.log('C')
}
else{
    console.log('FAIL');
}

// var letter = 'i'
// if(letter == 'a'){
//     console.log('vowel')
// }
// else if(letter == 'e'){
//     console.log('vowel')
// }
// else if(letter == 'i'){
//     console.log('vowel')
// }
// else if(letter == 'o'){
//     console.log('vowel')
// }
// else{
//     console.log('vowel')
// }

var letter = 's';
if(letter == 'a' || letter == 'i' || letter == 'o' || letter == 'e' || letter == 'u'){
    console.log('this is vowel')
}
else{
    console.log('this is consonant');
};

var southAsianCountry = 'bangladesh'
switch(southAsianCountry){
    case 'bangladesh':
        console.log('this  is SOUTH ASIAN COUNTRY');
        break;
    case 'india':
        console.log('this is SOUTH ASIAN COUNTRY');
        break;
        case 'nepal':
            console.log('this is SOUTH ASIAN  COUNTRY');
            break;
            case 'bhutan':
                console.log('this iss SOUTH ASIAN COUNTRY');
                break;
                default:
                    console.log('this is not a south asian  country .that is others country');
                    break;

}

var cricketer = 'rashid khan';
switch(cricketer){
    case 'sakib':
        console.log('he is form bangladesh');
        break;
        case 'virat kholi':
            console.log('he is form india');
            break;
            case 'AB DE VILIARES':
                console.log('he is south africa');
                break;
                case 'rashid khan':
                    console.log('he is form afganistan');
                    break;
                    default:
                        console.log('i dont know') ;

}

function add(){
    console.log('i love programmingg')
}
add();

function add(num1,num2){
    var total = num1 + num2;
    return total;
}
var result = add(15,12);
console.log(result);

function substition(first,second){
    var  result = first  - second;
    return  result;
}
var myResult = substition(28,15);
console.log(myResult);

function multiply(num1,num2){
    var  multiplyResult = num1 * num2;
    return  multiplyResult;
}
var  result = multiply(786546464,546464654564);
console.log(result);

function modulas(num1,num2){
    return num1%num2;
}
var result = modulas(3,2);
console.log(result);

console.log(`problem solving`);

var smartMobiles = [
    {phone : 'xiaomi', ram :2, processor:'mediatek' ,price :15000},
    {phone: 'realmi', ram:3, processor:'qualcom snapdragon',price:17000},
    { phone:'nokia',ram :4,processor:'heilo', price:20000},
    {phone:'vivo',ram :2, processor:'qualcom snapdragon',price:12000}
]
var chipSet = smartMobiles[0];
console.log(chipSet);
for(const smartPhone  of smartMobiles){
    if(smartPhone.price < chipSet.price){
        chipSet = smartPhone;
    };
}
console.log('chipset is :',  chipSet);


var mobiles =[
    {mobile:'nokia', ram :.500, price:2500},
    {mobile:'symphony',ram :1, price:1900},
    {mobile:'sprint',ram:2,price:2100}
]
lowPrice = mobiles[0]
for(var i = 0; i < mobiles.length; i++){
    var mobile  = mobiles[i];
   if(mobile.price < lowPrice.price){
        lowPrice = mobile;
   }
}
console.log('low  price is:' , lowPrice);


function  isLeapYear(num){
     if(num % 4 == 0){
        console.log( 'this is leap  year')
     }
     else{
        console.log('this is not leap year');
     }
}
num = 2047
isLeapYear(num)
// var result = isLeapYear(num);
// console.log('the year is :', )

function leapYear(number){
    var num = number %4;
    if(num == 0){
        return true;
    }
    else{
        return false;
    }
}
var numb = 2031
var result = leapYear(numb);
console.log(`result is:`, result);

function totalAnimal(miles){
    if(miles <= 10){
        totalAnimal = miles*10;
        return totalAnimal; 
    }
    else if(miles <= 20){
        var first10MilesTotalAnimalCount = 10 *  10;
        var restMiles = miles - 10;
        var second10MilesTotalAnimalCount = restMiles  * 20;
        var totalMilesAnimalCountIs = first10MilesTotalAnimalCount + second10MilesTotalAnimalCount;
        return totalMilesAnimalCountIs;

    }
    else{
        first10MilesTotalAnimalCount = 10 * 10;
        second10MilesTotalAnimalCount = 10 * 20;
        restMiles = miles - 20 ;
        var restMilesAnimalCount = restMiles * 50;
        var totalAnimals = first10MilesTotalAnimalCount + second10MilesTotalAnimalCount + restMilesAnimalCount;
        return totalAnimals
    }
}
miles = 28
var totalAnimals = totalAnimal(miles);
console.log( `total animal is :`, totalAnimals);

console.log(`divisible by 3 and 5`)
function divisibleBy3and5(number){
    for(var number =1 ;number <= 50; number++){
        if(number % 3 == 0 && number % 5 ==0){
            console.log('football')
        }
        else if(number % 3 == 0){
            console.log('foot')
        }
        else if(number % 5 == 0){
            console.log('ball')
        }
        else{
            console.log(number)
        }
    }

}
divisibleBy3and5(50);

var shopings=[
    
    {name:'shirt', price:450,quantity:2},
    {name:'pant', price:450,quantity:2},
    {name:'shoes', price:1550,quantity:4},
    {name:'t-shirt', price:100,quantity:2},
    {name:'bleser', price:1700,quantity:3},

];

// jog = 0;
// for(var i = 0; i <= shopings.length; i++){
//     var shoping = shopings[i];
//     var shopingCost =  shoping.price * shoping.quantity;
//     jog = jog + shopingCost
// }
jog = 0;
for(const shoping of shopings){
    totalCost=shoping.price  * shoping.quantity;
    jog = totalCost + jog
  
}
console.log(jog);

function totalWood(chairQuantity,tableQuantity,bedQuantity){
    var chairWood = 5;
    var tablewood = 10;
    var bedWood  = 20;
    var totalChairWood = chairWood * chairQuantity;
    var  totalTableWood = tablewood *  tableQuantity;
    var totalBedWood = bedWood * bedQuantity;
    var totalWood = totalChairWood + totalTableWood + totalBedWood;
    return totalWood;
}
var totalCost = totalWood(5,5,5);
console.log(`total cost is :`,  totalCost) 

console.log(`duplicate number removee`);
function removeDuplicate(numbers){
    var unique = [];
    for(const number of numbers){
        if(unique.indexOf(number) == -1){
            unique.push(number)
        }
    }
    return unique;
}
num = [100,101,102,103,104,101,102,105,104,104,106,107,107,108,108,109,110,110,111,112,11,112,113,114,114,115,116,116,117,117,117,118,118,100,101,102,103,104,101,102,105,104,104,106,107,107,108,108,109,110,110,111,112,11,112,113,114,114,115,116,116,117,117,117,118,118,100,101,102,103,104,101,102,105,104,104,106,107,107,108,108,109,110,110,111,112,11,112,113,114,114,115,116,116,117,117,117,118,118,100,101,102,103,104,101,102,105,104,104,106,107,107,108,108,109,110,110,111,112,11,112,113,114,114,115,116,116,117,117,117,118,118,100,101,102,103,104,101,102,105,104,104,106,107,107,108,108,109,110,110,111,112,11,112,113,114,114,115,116,116,117,117,117,118,118,100,101,102,103,104,101,102,105,104,104,106,107,107,108,108,109,110,110,111,112,11,112,113,114,114,115,116,116,117,117,117,118,118,100,101,102,103,104,101,102,105,104,104,106,107,107,108,108,109,110,110,111,112,11,112,113,114,114,115,116,116,117,117,117,118,118,100,101,102,103,104,101,102,105,104,104,106,107,107,108,108,109,110,110,111,112,11,112,113,114,114,115,116,116,117,117,117,118,118,100,101,102,103,104,101,102,105,104,104,106,107,107,108,108,109,110,110,111,112,11,112,113,114,114,115,116,116,117,117,117,118,118,100,101,102,103,104,101,102,105,104,104,106,107,107,108,108,109,110,110,111,112,11,112,113,114,114,115,116,116,117,117,117,118,118,100,101,102,103,104,101,102,105,104,104,106,107,107,108,108,109,110,110,111,112,11,112,113,114,114,115,116,116,117,117,117,118,118,118,119,119,112,113,114,120]
var uniqeNumber = removeDuplicate(num);
console.log(uniqeNumber);

function oneToFifty(num){
    sum = 0;
    for(const n of num){
        sum = n + sum;
    }
    return sum
}
num =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]
var  result = oneToFifty(num);
console.log(result);

function searchLargest(num){
    var largest = num[0]
    for(const n of num){
        if(n >largest){
            largest = n
        }
    }
    return largest;
}
num = [35,36,37,38,39,40,41,100,42,43,44,45,46,47,48,49,50,49,47,30]
var largestNumber = searchLargest(num);
console.log(`biggest number is :`, largestNumber);

function searchSmallest(number){
    var smallest = number[0];
    for(const num of number){
        if(num < smallest){
            smallest = num;
        }
    }
    return smallest;
}
number = [-2,1,3,-5,-3,1,2,-7,0,-10]
var smallNumber = searchSmallest(number);
console.log(` your smallest number is  `,  smallNumber);

console.log(`fibonacci number`);
function getFibonacci(number){
    fibo=[0,1]
    for(const num of number){
       fibo[num] =  fibo[num - 1] + fibo[num - 2];
    }
    return fibo
}
var numb = [2,3,4,5,6,7,8,9,10]
var fibonacciNumber  = getFibonacci(numb);
console.log(`fibonacci number is  :`, fibonacciNumber);

console.log(`factorial number `);
function factorial(number){
    var factorial = 1;
    for(var i = 1; i <= number; i++){
        factorial = factorial * i
    }
    return  factorial;
}
var  factorialNumber =  factorial(7);
console.log(factorialNumber);

console.log(`inch to feet`);
function inchToFeet(inch){
    var feet = inch / 12;
    return  feet;
}
var feetResult = inchToFeet(446747646746476464640164604064646212416546478879);
console.log(`feet is:`, feetResult);

function feetToInch(feet){
    var inch = feet * 12;
    return inch;
}
var feet = 100;
var feetNum = feetToInch(feet);
console.log(`feet is :`, feetNum,'inch')

console.log( `kilo to mile or mile to kilo`);

function mile(km){
    var mile = km * 0.621;
    return mile;
}
var km = 9
var mileResult = mile(km);
console.log(`mile is:`, mileResult);

function  kilometers(miles){
    var  km = miles / 0.6;
    return km;
}
var kmNum = kilometers(5.589);
console.log(`kilo is`, kmNum);