/* You will create a constructor to generate an employee object which will be
  rendered in the main section from your app.js file. */

'use strict';
/*You will create a constructor to generate an employee
  object which will be rendered in the main section from your app.js file.*/

// Employee ID
// Full Name
// Department:
     /*      Administration
             Marketing
             Development
             Finance         */
// Level:
      /*      Junior
              Mid-Senior
              Senior         */
// Image URL
// Salary

// function Employee(employeeID, fullName, department=[], level=[], imageUrl, salary){

// this.employeeID = employeeID;
// this.fullName = fullName;
// this.department = department;
// this.level=level;
// this.imageUrl=imageUrl;
// this.salary = salary
// }


let arr=[];
function Employee(employeeID, fullName, department, level, imageUrl, salary){

  this.employeeID = employeeID;
  this.fullName = fullName;
  this.department = department;
  this.level=level;
  this.imageUrl=imageUrl;
  this.salary = salary;
  arr.push(this);
  }
function calculateSalary (min, max){
  let difference = max - min;
  let rand = Math.random();
  rand = Math.floor( rand * difference);
  rand = rand + min;
  return rand;
}
// console.log(calculateSalary(1000,1500))

// function getSalary (emp) {
  Employee.prototype.getSalary = function (emp){

  if(emp.level == 'Senior'){
    console.log("calc salary for senior");

    let netSalary = calculateSalary(1500, 2000);
    let ssAmount = netSalary * 0.075;
    let finalVal=netSalary-ssAmount; //final salary
    emp.salary=finalVal;
    console.log(arr)
  }

  else if(emp.level  == 'Mid-Senior'){
    console.log("calc salary for Mid senior");
    let netSalary = calculateSalary(1000, 1500);
    let ssAmount = netSalary * 0.075;
    let finalVal=netSalary-ssAmount; //final salary
    emp.salary=finalVal;
    console.log(arr)

  }

  else if(emp.level == 'Junior'){
    console.log("calc salary for Junior");

    let netSalary = calculateSalary(500, 1000);
    let ssAmount = netSalary * 0.075;
    let finalVal=netSalary-ssAmount; //final salary
    emp.salary=finalVal;
    console.log(arr)

  }
}

// let obj2 = new Employee(1001, 'Lana Ali','Finance','Senior','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fperson-white-background.html&psig=AOvVaw0bugLllwSOSq8VVeAPT-Za&usce=images&cd=vfe&ved=0CBEQjRxqFwoTCMCo8fnfpv4CFQAAAAAdAAAAABAEt=1681471686837000&sour', 1);

// let arr=[];

let obj1 = new Employee(1000, 'Ghazi Samer','Administration','Senior','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fperson-white-background.html&psig=AOvVaw0bugLllwSOSq8VVeAPT-Za&usce=images&cd=vfe&ved=0CBEQjRxqFwoTCMCo8fnfpv4CFQAAAAAdAAAAABAEt=1681471686837000&sour', 1) ;
let obj2 = new Employee(1001, 'Lana Ali','Finance','Senior','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fperson-white-background.html&psig=AOvVaw0bugLllwSOSq8VVeAPT-Za&usce=images&cd=vfe&ved=0CBEQjRxqFwoTCMCo8fnfpv4CFQAAAAAdAAAAABAEt=1681471686837000&sour', 1);
let obj3 = new Employee(1002, 'Tamara Ayoub','Marketing','Senior','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fperson-white-background.html&psig=AOvVaw0bugLllwSOSq8VVeAPT-Za&usce=images&cd=vfe&ved=0CBEQjRxqFwoTCMCo8fnfpv4CFQAAAAAdAAAAABAEt=1681471686837000&sour', 1);
let obj4 = new Employee(1003, 'Safi Walid','Administration','Mid-Senior','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fperson-white-background.html&psig=AOvVaw0bugLllwSOSq8VVeAPT-Za&usce=images&cd=vfe&ved=0CBEQjRxqFwoTCMCo8fnfpv4CFQAAAAAdAAAAABAEt=1681471686837000&sour', 1);
let obj5 = new Employee(1004, 'Omar Zaid','Development','Senior','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fperson-white-background.html&psig=AOvVaw0bugLllwSOSq8VVeAPT-Za&usce=images&cd=vfe&ved=0CBEQjRxqFwoTCMCo8fnfpv4CFQAAAAAdAAAAABAEt=1681471686837000&sour', 1);
let obj6 = new Employee(1005, 'Rana Saleh','Development','Junior','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fperson-white-background.html&psig=AOvVaw0bugLllwSOSq8VVeAPT-Za&usce=images&cd=vfe&ved=0CBEQjRxqFwoTCMCo8fnfpv4CFQAAAAAdAAAAABAEt=1681471686837000&sour', 1);
let obj7 = new Employee(1006, 'Hadi Ahmad','Finance','Mid-Senior','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fperson-white-background.html&psig=AOvVaw0bugLllwSOSq8VVeAPT-Za&usce=images&cd=vfe&ved=0CBEQjRxqFwoTCMCo8fnfpv4CFQAAAAAdAAAAABAEt=1681471686837000&sour', 1);

console.log(arr);
obj1.getSalary(obj1);
obj2.getSalary(obj2);
obj3.getSalary(obj3);
obj4.getSalary(obj4);
obj5.getSalary(obj5);
obj6.getSalary(obj6);

// console.log(getSalary(obj1));
// console.log(getSalary(obj2));
// console.log(getSalary(obj3));
// console.log(getSalary(obj4));
// console.log(getSalary(obj5));
// console.log(getSalary(obj6));


  

//  let obj1 = new Employee(01, 'sami',['Administration', 'Marketing', 'Development', 'Finance'],['Junior','Mid-Senior','Senior'],'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fperson-white-background.html&psig=AOvVaw0bugLllwSOSq8VVeAPT-Za&usce=images&cd=vfe&ved=0CBEQjRxqFwoTCMCo8fnfpv4CFQAAAAAdAAAAABAEt=1681471686837000&sour', 22)
// let obj1 = new Employee(01, 'sami','Administration','Junior','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fperson-white-background.html&psig=AOvVaw0bugLllwSOSq8VVeAPT-Za&ust=1681471686837000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMCo8fnfpv4CFQAAAAAdAAAAABAE', `${this.salary}`);

// let getSalary = (Employee) => {
          
//   if(obj1.level === 'Senior'){
//     let netSalary = Employee.calculateSalary(1500, 200)
//     netSalary = netSalary* 0.075;
//      obj1.level1 = netSalary;
//   }
//   else if(obj1.level === 'Mid-Senior'){
//     let netSalary = Employee.calculateSalary(1000,1500)
//     netSalary = netSalary* 0.075;
//      obj1.level1 = netSalary;
//   }
//   else if(obj1.level === 'Junior'){
//     let netSalary = Employee.calculateSalary(500,1000)
//     netSalary = netSalary* 0.075;
//      obj1.level1 = netSalary;
//   }

//   }

function show(Employee){
  let table_1 = `<tr>
  <th>EmployeeID</th>
  <th>FullName</th>
  <th>Department</th>
  <th>Level</th>
  </tr>`;

  for(let i in arr){
  table_1+= `<tr>
  <td>${Employee[i].employeeID}</td>
   <td>${Employee[i].fullName}</td>
   <td>${Employee[i].department}</td>
   <td>${Employee[i].level}</td>
  </tr>`
  document.getElementById("table1").innerHTML= table_1;

  }
  
}
show(arr);

//render info
Employee.prototype.info = function (arr){
  return `Employee name is ${this.fullName}, and the salary is ${this.salary}`
  }
  
  // console.log(obj1.info());
  document.getElementById("p1").innerHTML= obj1.info();

  // console.log(obj2.info());
  document.getElementById("p2").innerHTML= obj2.info();

  // console.log(obj3.info());
  document.getElementById("p3").innerHTML= obj3.info();

  // console.log(obj4.info());
  document.getElementById("p4").innerHTML= obj4.info();

  // console.log(obj5.info());
  document.getElementById("p5").innerHTML= obj5.info();

  // console.log(obj6.info());
  document.getElementById("p6").innerHTML= obj6.info();
  