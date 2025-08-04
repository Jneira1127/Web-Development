//Global variables
let year = 2000
let method1 = true
let method2 = true

while (year <= 3000){

  //verifying leap years with both methods
  //verifying leap year with method 1
  if(year%4 == 0 && year%100 != 0){
    method1 = true
  }else{
    method1 = false
  }
  //verifying leap year with method 2
  if(year%400 == 0){
    method2 = true
  }else{
    method2 = false
  }

  //confirming if it is a leap year
  if(method1 == true || method2 == true){
    console.log(year + " is a leap year")
    year+=1
  }else{
    console.log(year + " is not a leap year")
    year+=1
  }
  
}
