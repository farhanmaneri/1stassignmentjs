// // chapter 1
alert("Error! Please enter a valid passward");

alert("Welcome to JS Land..." +   "Happy Coding!"); 

alert("Welcome to Js Land...")

alert("Happy codding!" + "<br>" + "Prevent this page from creating additional dialogs")

alert("Hello.. I can run JS through web browser console")
console.log(alert)


// // chapter 2

//  var userName;
//  myName = "Farhan Khan";

 var message;
 message = "Hello World!";
alert(message);

// var student;
// name = "Jhone Doe";
// age = "45 years old"
// certificate = "certified Mobile Application Development"
// alert(studnet);
// document.write(alert);

var  x = "pizza";
for (var i = 5;  i > 0; i--) {
    for ( var j = 0; j< i; j++){
        document.write(x[j]);
    }
    document.write("<br>"); 
}


var email = "farhanmaneri@gmail.com.";
alert("My email address is" + " " + email);

var book = "A Smarter way to learn JavaScript";
alert( "I am trying to learn from the book" + " " + book);
  
var  message = "Yah! I can write HTML content through JavaScript.";
document.write(message);

var end = "---------*******@@@@@@*******----------"
alert(end);

// chapter 3

 var age = "I am 15 years old";
 alert(age);

var birthYear = "1988";
document.write("My birth Year is" + birthYear + "<br>" + "Date type of my date of birth is number");


// chapter 4

// 5 legal variables = letters, numbers, dollor sign and underscore.
// 5 illegal variabls = userAlert, myVar, for, false. true.
 
var  heading = "Rules for naming JS Variable" ;
    document.write( heading  + "<br>");
var variableNames = "Variable names can only cotain letters, numbers, dollor sign and underscore.";
     document.write(variableNames + "<br>" + "for example: $my_1stVariabel");
var variableRules = "Variables must begin with letters, $ or _"
    document.write(variableRules + "<br>" + "for example $name or name." + "<br>" + "variable names are Case Sensitive." + "<br>" + "variable names should not be JS keywords")
 
// Chapter 5
// 1.
var x = +prompt("enter value");
var sign = prompt("enter operater");
var y = +prompt("enter value");

 if ( sign === "+"){
     document.write("Sum of" + " " + x + " " + "and"+ " " + y + "is" + " " +(+x)+(+y));
 }else if( sign === "-"){
    document.write(x-y);
 }else if( sign === "*"){
     document.write(x +" " + "*" + " " + y + " " + "is" + " " + x*y);

 }else if ( sign === "/"){
      document.write( x + "/" + y + " "+ "is" + " " + x/y);
    }else if ( sign === "%"){
      document.write( x + "%" + y + " "+ "is" + " " + x%y);
  }

// Q 4.
        var movieTicket = 600;
        var quantity = 5;
        document.write("Total cost to buy"+ " " + quantity + " "+ "ticket to a movie is" + " "+ movieTicket*quantity + "PKR"+ "<br>")
//  // Q 5.
        for(var i = 1; i <= 10; i++){
            
               document.write( "4" + "x" + i + "=" + 4*i + "<br>") ;
    }

// // Q 7.
        var priceOfItem1    = 650;
        var quantityOfItem1 = 3;
        var priceOfItem2    = 100;
        var quantityOfItem2  = 7;
        var shippingCharges = 100;
        var firstItem = priceOfItem1*quantityOfItem1;
        var secondItem = priceOfItem2*quantityOfItem2;
        document.write("Total cost of your order is" + " " + (((+firstItem) + (+secondItem)) + (+shippingCharges))+ "<br>");
// Q 8.
        var totalMarks = 980
        var marksObt = 804;
        document.write("Percentage:" + " "+ marksObt/totalMarks*100 + "%" + "<br>");
// Q 9.
        var dollorUS = 10;
        var riyalSaudi = 25;
        document.write("Total Currency in PKR:" + " "+(( dollorUS*104.80) + (riyalSaudi*28)));
// Q 10.
         var x = 1; 
         x+5;
         document.write(((x + x+5) * 10) / 2 + "<br>");
// Q.11.
        var currentYear = 2016;
        var birthYear = 1992;
        document.write("Your age is" + " " + ((currentYear)-(birthYear)));

    