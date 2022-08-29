document.getElementById("btn").onclick=function(){
    // alert("This is simple alert")
    toastifySuccess("This is simple alert")
}
document.getElementById("print-name").onclick=function(){
    var name =prompt("Enter Your name:")
    document.getElementById("result").innerHTML=name
}
document.getElementById("clear").onclick=function(){
    document.getElementById("result").innerHTML= " "
}

//Chapter No 15 Arrays
//Example of arrays:
// var cities = [ "0" , "1" , "2" , "3" , "4" , "5" , "6", .............. so on janty hum ko cahiy ]

var cities = ["Islamabad" , "Karachi" , "Lahore" , "Peshawar" , "Queta"] // ["0" , "1" , "2" , "3" , "4"]
console.log("Agar hum ko is array ma sy city Queta chaiy to hum index 4 ko ly gay jasy =>" + cities[4])


//.push sy last ma ay ga.  jo bi hum kwe new cites add kar rahy hai ye koch or. 

var cities = ["Islamabad" , "Karachi" , "Lahore" , "Peshawar" , "Queta"]
cities.push("Faisalabad")     //push kaya karta hai: push sy hum new city ko push  kar kar sakty hai.Hum nay faisalabad ko psh karwaya ye ab Queta kay bad may ay ga.phaly hamary index ki value total 5 thi faisalabad kay bad ab ye 6 ho gi.is trahaa sy hum or bi city ko push karwa sakty hai.  
console.log("New city push =>", cities)

// .unshift sy Start ma ay ga.  jo bi hum kwe new cites add kar rahy hai ye koch or. 

var cities = ["Islamabad" , "Karachi" , "Lahore" , "Peshawar" , "Queta"]
cities.unshift("Faisalabad")     //unshift kaya karta hai: unshift sy hum new city ko add  kar kar sakty hai.Hum nay faisalabad ko add karwaya ye ab Islamabad kay Start may ay ga.phaly hamary index ki value total 5 thi faisalabad kay bad ab ye 6 ho gi.is trahaa sy hum or bi city ko add karwa sakty hai.  
console.log("New city unshift =>", cities)


// .pop sy index ma laka wova last wala element remove ho jata hai

var cities = ["Islamabad" , "Karachi" , "Lahore" , "Peshawar" , "Queta"]
cities.pop()
console.log("Last wala elemet remove ho ha jo kay Queta  =>", cities)

// .shift sy index ma laka wova Start wala  element remove ho jata hai

var cities = ["Islamabad" , "Karachi" , "Lahore" , "Peshawar" , "Queta"]
cities.shift()
console.log("Start wala elemet remove ho ha jo kay Islamabad  =>", cities)

// .splice sy hum apny array may kasi bi index ka bad elment ko insert karwa sakty hai or remove bi karwa sakty hai.

var cities = ["Islamabad" , "Karachi" , "Lahore" , "Peshawar" , "Queta"]
cities.splice( 2, 1 ,  "Faisalabad")   // .splice( 2 means kay hum hai index 2 ko select kya jo kay lahore hai or hum nay os ko remove karna hai , 1 means  kay hum nay jo remove kiya hai os ki jaga par hum hai ek city add karwani hai agar hum nay doo city ko karwa hai tab 2 laky gy. "Faisalabad " is ko hum os remove ki jaga par add karwana chaty hai  )  
console.log("Cities =>", cities)

// .slice sy hum kasi element ye array ko copy kary gy 

var cities = ["Islamabad" , "Karachi" , "Lahore" , "Peshawar" , "Queta", " Sheikhpura " ,"Multan" , " Janag"]
var newcities =cities.slice(2,4)  // .slice(2 means kay to sy start ho or 4 means kay kay 4 element sy phaly jo hai osy ko show karay jasy index 4 sy phaly peshawar hai.) 
console.log("New city =>", newcities) 


// Chapter No 18 for loop

var cities = ["Islamabad" , "Karachi" , "Lahore" , "Peshawar" , "Queta", " Sheikhpura " ,"Multan" , " Janag"]

document.getElementById("print-city").onclick =function(){
   
    for(var index = 0; index < cities.length;index++){
        document.getElementById("result").innerHTML = result.innerHTML + "City Name:" +cities[index] + "<br>"
        //result.innerHTMl += "City Name:" +cities[index] + "<br>" ye short from hai asy bi lak sakty hai
        
      
      }

}

//Add City into list

var cities = ["Islamabad" , "Karachi" , "Lahore" , "Peshawar" , "Queta", " Sheikhpura " ,"Multan" , " Janag"]

document.getElementById("add-city").onclick =function(){
    var city = prompt("Enter your City");
     cities.push(city)
     alert(city + " City has been added into Arrays" )
}
//ye same opar wala method hai
document.getElementById("print-city").onclick = function(){
    document.getElementById("result").innerHTML =  " " ;
    for(var index = 0; index < cities.length;index++){
        document.getElementById("result").innerHTML = result.innerHTML + "City Name:" +cities[index] + "<br>"
    }
}



///////////////////////////////////////////////////////////

var cities = ["Islamabad" , "Karachi" , "Lahore" , "Peshawar" , "Queta", " Sheikhpura " ,"Multan" , " Janag"]

var cleanestcity ="Islamabad ";  

var matchFound = "no";
for(var index = 0; index < cities.length;index++){
    if(cleanestcity === cities[index]){
        matchFound = "yes";
        document.getElementById("result").innerHTML = result.innerHTML + "City Name:" +cities[index] + "<br>"
        break;
    }
}
if( matchFound = "no"){
   // alert("City no found")
}



//Generate a table 
document.getElementById("table").onclick = function(){
    let number =prompt("Enter your Number:")
    for(let a= 1; a <= 10; a++)
    document.getElementById("result").innerHTML += number + " X " + a + " = " +(number*a) + "<br>";
}


//orginal statemnet 
var cities = ["Islamabad" , "Karachi" , "Lahore" , "Peshawar" , "Quetta", " Sheikhpura " ,"Multan" , " Jhang"]
for(let i=0 ; i <cities.length; i++){
    let num = i + 1;
    document.getElementById("Original").innerHTML += " " + "(" +num + ')' + " "+ cities[i]

}

//Toastify 
const toastifySuccess = (msg) =>{
    Toastify({
    text: msg,
    duration: 3000,
    //destination: "https://github.com/apvarun/toastify-js",
    //newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    
  }).showToast();
} 


// clear output 
document.getElementById("clear").onclick =function(){
    document.getElementById("result").innerHTML=" ";
    toastifySuccess("The output has been cleared")
     audio.play();

    
}