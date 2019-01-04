// Functions


function checkLength(str){
    if((str.length)>4){
        return true;
    }
    else{
        return false;
    }
    

}
var sortASCII=(str)=>{
    if(checkLength(str)){
        return str.split("").sort().join("");
    }
    else{
        return str;
    }
      
         
    
      
};

var inOrder=sortASCII("San Jose");
console.log(inOrder);


---------------------------------------------------------------
//HTML Events

<html>
    <head></head>
    <body>

<button id="demo"  style="height: 105px; width: 300px" onclick="changeColor()">Change Color</button>
        <script src="events.js"> </script>
    </body>
</html>

	JAVASCRIPT:


function changeColor(){
    document.getElementById("demo").style.color="red";
}

----------------------------------------------------------------

//Arrays

function mergeWithPattern(str1,str2){
    var str3=str1+" "+str2;
    let arr=str3.split(" ");

    arr.shift();
    var patternString=arr.join("*");
    return patternString;
}

console.log(mergeWithPattern("Apple is sweet","and red in colour"));

----------------------------------------------------------------

//Regular expressions

function checkVehicleNumber(str){
    var res= /[A-Z]{2} \d{2} [A-Z]{2} \d{4}$/.test(str);
    return res;
}

if(checkVehicleNumber("MH 20 CX 9098dfdf")){
    console.log("Vehicle number is correct");
}else{
    console.log("Vehicle number is incorrect");
}


----------------------------------------------------------------

//Strict Mode using use strict

'use strict';

var x=20;

function checkIfDiscountApplicable(obj1,obj1,obj2){
    if(obj1.university=="SJSU" && obj1.degree=="graduate"){
            if(obj2.year>2017){
                console.log("discount is applicable");
            }
            else{
                console.log("discount is not applicable");
            }
    }
    else{
        console.log("discount is not applicable");
    }

}
ComputeMultiply({university:"SJSU",city:"San Jose"},{degree:graduate},{year:2018});

----------------------------------------------------------------

//Errors:

function checkIfValid(str) {
    var regex1 = /^[a-zA-Z]/,regex2 = /[^@][a-zA-Z]/,regex3 = /[a-zA-Z][^@]/;
    try{
    if (regex1.test(str)) {
      throw new Error("Invalid String");
    } else if (regex2.test(str)) {
        throw new Error("Invalid String");
    } else if (regex3.test(str)) {
        throw new Error("Invalid String");

    } else {
      console.log("The string matched successfully");
    }
    }catch(e){
        console.log("In catch.."+e.message);
    }
    finally{
        console.log("Code executed successfully");
    }
  
  
           
  }
     

  checkIfValid("@e@T@/U");                                                                      
  

----------------------------------------------------------------

//Default Params:

function computeSalary(employee){
 
    //Specifying default values
    var{name,baseSalary=100000,incentive=5}=employee; //Array destructuring 

    var finalSalary=(baseSalary*(100+incentive))/100;

    return finalSalary;
}

EmployeeSalary=computeSalary({name:"shubham",baseSalary:150000});

console.log("The final salary of employee is" +" "+EmployeeSalary+" "+"$");


----------------------------------------------------------------

//Includes and typeof

function checkCity(cities,searchCity){
var i;

    if(typeof(searchCity)=="string"){  //Checking the type==string

        if(cities.includes(searchCity)){ //check if city is present in array
            
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}

if(checkCity(["San Jose","Modesto","Santa Cruz"],"Modesto")){
    console.log("The city is available in the list of cities");
}else{
    console.log("City is not present");
}


----------------------------------------------------------------

//Use of import and export

var eval=function evalExpression(x1,x2){
    let res=[];
    let i=0;
    if(x1>x2){
        
        for(i=x2;i<x1;i++){
            res.push(i);
        }
        res.push(x1);
    }else{
        
        for(i=x1;i<x2;i++){
            res.push(i);
        }
        res.push(x2);
    }
    

    return res;
}
module.exports=eval;

//import file

var evalExpression=require('./comptuteValue.js');

var findRange=evalExpression(1,6);
console.log(findRange);

----------------------------------------------------------------

//Type Conversion

function computeSimpleInterest(p,r,t){
    let principal=Number(p);   
    let rate=Number(r);
    let time=Number(t);           //Explicit conversion from string to number

    let si=(principal*rate*time)/100;

    return si;

}

var si=computeSimpleInterest(1000,10,"5"); //typeof si=Number

/// Implicit conversion from number to string
console.log("The Simple interest to be paid is"+" "+si); 



----------------------------------------------------------------
//JSON

var updateAmount=(str)=>{

    //convert JSON string to JavaScript OBject
    var obj=JSON.parse(str); 
   obj.amountDue=10000;
    //console.log(obj);

    //convert JavascriptObject to JSON string
    var JSONstr=JSON.stringify(obj);
    return JSONstr;
};

console.log(updateAmount('{"name":"Alex","admittedOn":"2018-08-31T23:29:58.163Z","amountDue":1000}'));

----------------------------------------------------------------

//Objects and Classes


class miles{
    constructor(mile,rate,discount){   //class constructor
        this.mile=mile;
        this.rate=rate;
        this.discount=discount;
    }

    calculateAmt(){                       //class method
        return (this.mile*this.rate)-this.discount;
    }
}

let m1 = new miles(100,16,200);         //class instantiation
console.log(m1.calculateAmt());

----------------------------------------------------------------
//Object.assign

function mergeObjects(obj1,obj2,obj3){

    //merge voter information into one object
    var voterInformation=Object.assign({},obj1,obj2,obj3); 

    return voterInformation;
}

var obj=mergeObjects({firstname:'Shubham',lName:'sand', city: 'San Jose'},{voterNum:123065,county:'Santa Clara'},{state:"CA"});

console.log(obj);

----------------------------------------------------------------
//STATIC METHOD

class volume{
    constructor(length,breadth,height){
        this.length=length;
        this.breadth=breadth;
        this.height=height;
    }

    static compareVolume(v1,v2){
        var v1=v1.length*v1.breadth*v1.height;
        var v2=v2.length*v2.breadth*v2.height;

        if(v1>v2){
            return v1;
        }
        else{
            return v2;
        }
    }

}

const volume1=new volume(10,20,10);
const volume2=new volume(5,10,5);

console.log(volume.compareVolume(volume1,volume2));


----------------------------------------------------------------
//Inheritance using sub-classes in Java Script

class Car{
constructor(name,make){
    this.name=name;
    this.make=make;
}
    break(){
        console.log("Car is braking");
    }
    drive(){
        console.log("Car is moving");
    }
}
class LMV extends Car{  //LMV extends car-->inheritance
    constructor(name,make){
        super(name,make);
    }

    sportsMode(){
        console.log("Car is in sports mode");
    }
}

let c=new LMV("Accord","Honda");
c.drive();
c.sportsMode();

----------------------------------------------------------------
//Method Overriding

function Area(side1,side2){ //constructor function
    this.side1=side1;
    this.side2=side2;
}

Area.prototype.calArea=function(){  //area of rectangle
    return this.side1*this.side2;

}

Area.prototype.calArea=function(){ //overided method area of asquare
    return this.side1*this.side1;

}

var a1=new Area(10,20);

console.log("The area of square is"+ " "+a1.calArea());

----------------------------------------------------------------
//Use of get(In classes)

class surfaceArea{
    constructor(side){
        this.side=side;
    }

    get sArea(){   // getter method to get surface area 
        return 4*this.side;
    }
}

var s1=new surfaceArea(4);
//call to getter
console.log("The surface area of the square is"+" "+ s1.sArea);


----------------------------------------------------------------
//Use of fetch()

var a;
fetch('http://www.colr.org/json/colors/random/7')
  .then(response => response.json())
  .then(json => {
      console.log(json.colors);
    //   a=JSON.parse(json); 
      document.getElementById("demo").innerHTML=json.colors.map(col => col.hex);
    });










