// Double using callback-
arr1 = [32,23,43,56,12,59,65];
let arr2 = arr1.map(function(value){
   return value * 2;
});
console.log(arr2);


// String Manipulation-
function manipulateString(strings){
    function final(){
        console.log("The manipulated string is:" + " " + strings.toUpperCase());
    }
    final();
}
manipulateString("hello world!");


// Age in Days-
function ageInDays(firstName,lastName,ageInYears){
this.firstName = firstName;
this.lastName = lastName;
this.ageInYears = ageInYears;
 let fullName = firstName +" "+ lastName;
let  ageInDays = ageInYears * 365;
 function final(){
console.log(`Persons full name is ${fullName} and age in days is ${ageInDays}`);
 }
final();
}
ageInDays("Tulsi","Gupta",23);


// Arrange in alphabetical order-
let listOfBooks = [
    {
         bookName: "Client Server Computing",
         authorName: "Lalit Kumar",
         publicationYear: 2012
     },
     {
         bookName: "Publish News Letter",
         authorName: "Amit Garg",
         publicationYear: 2011
     },
     {
         bookName: "Mobile Computing",
         authorName: "Vinay Kumar",
         publicationYear: 2011
     },
     {
         bookName: ".NET Framework & C#",
         authorName: "Sharad Kumar Verma",
         publicationYear: 2009
     },
     {
         bookName: "Computer Networks",
         authorName: "Sharad Kumar Verma",
         publicationYear: 2010
     },
     {
         bookName: "Data Structure Using C",
         authorName: "Sharad Kumar Verma",
         publicationYear: 2015
     }
 
 ]

 let newList = listOfBooks.map(function(bookName){
return bookName;
 });
console.log(listOfBooks.sort());


// Greeting Promise-
function hello(personName){
    let x = new Promise(function(resolve,reject){
        if(personName != null){
            resolve(`Hello, ${personName}!`)
        }else{
            reject("Sorry no user name has been given")
        }
    });
    
    // console.log(x);
    
    x.then(function yes(a){
        console.log(a);
    })
    x.catch(function no(b){
        console.log(b);
    })

}
hello("Shubhi");


// Fetch results asynchronously-
fetch("https://jsonplaceholder.typicode.com/todos/1").then(function(response){
    return console.log(response);
}).catch(function(error){
    console.log(error);
})


// Multiple requests-
function multipleReq(){
 let resp1 =fetch("https://jsonplaceholder.typicode.com/todos/1").then(function(res){
        return console.log(res);
    }).catch(function(err){
        console.log(err);
    })

 let resp2 =fetch("https://jsonplaceholder.typicode.com/posts/1").then(function(res){
        return console.log(res);
    }).catch(function(err2){
        console.log(err2);
    })
   
}
multipleReq();


// Get Data from API and Display it on the browser console-

function posts(){fetch("https://jsonplaceholder.typicode.com/posts").then(function(result){
    console.log(result);
}).catch(function(err){
    console.log("Error is:" + err);
})
}
posts();

// Error handling-

function errors(){
    fetch("https://jsonplaceholder.typicode.com/posts/123456789").then(function(resp){
        console.log(resp);
    }).catch(function(error){
        console.log("Error in your program:" + " " +error );
    })
}
errors();