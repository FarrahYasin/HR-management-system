'use strict';

let arr=[];
function Employee(employeeID,fullName, department, level, imgurl, salary){
  // this.employeeID =0;
  this.employeeID = employeeID;
  this.fullName = fullName;
  this.department = department;
  this.level=level;
  this.imgurl=imgurl;
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


// for lab7
let obj1 = new Employee(1000,'Ghazi Samer','Administration','Senior','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fperson-white-background.html&psig=AOvVaw0bugLllwSOSq8VVeAPT-Za&usce=images&cd=vfe&ved=0CBEQjRxqFwoTCMCo8fnfpv4CFQAAAAAdAAAAABAEt=1681471686837000&sour', 1) ;
let obj2 = new Employee(1001,'Lana Ali','Finance','Senior','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fperson-white-background.html&psig=AOvVaw0bugLllwSOSq8VVeAPT-Za&usce=images&cd=vfe&ved=0CBEQjRxqFwoTCMCo8fnfpv4CFQAAAAAdAAAAABAEt=1681471686837000&sour', 1);
let obj3 = new Employee(1001,'Tamara Ayoub','Marketing','Senior','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fperson-white-background.html&psig=AOvVaw0bugLllwSOSq8VVeAPT-Za&usce=images&cd=vfe&ved=0CBEQjRxqFwoTCMCo8fnfpv4CFQAAAAAdAAAAABAEt=1681471686837000&sour', 1);
let obj4 = new Employee(1001,'Safi Walid','Administration','Mid-Senior','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fperson-white-background.html&psig=AOvVaw0bugLllwSOSq8VVeAPT-Za&usce=images&cd=vfe&ved=0CBEQjRxqFwoTCMCo8fnfpv4CFQAAAAAdAAAAABAEt=1681471686837000&sour', 1);
let obj5 = new Employee(1001,'Omar Zaid','Development','Senior','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fperson-white-background.html&psig=AOvVaw0bugLllwSOSq8VVeAPT-Za&usce=images&cd=vfe&ved=0CBEQjRxqFwoTCMCo8fnfpv4CFQAAAAAdAAAAABAEt=1681471686837000&sour', 1);
let obj6 = new Employee(1001,'Rana Saleh','Development','Junior','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fperson-white-background.html&psig=AOvVaw0bugLllwSOSq8VVeAPT-Za&usce=images&cd=vfe&ved=0CBEQjRxqFwoTCMCo8fnfpv4CFQAAAAAdAAAAABAEt=1681471686837000&sour', 1);
let obj7 = new Employee(1002,'Hadi Ahmad','Finance','Mid-Senior','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fperson-white-background.html&psig=AOvVaw0bugLllwSOSq8VVeAPT-Za&usce=images&cd=vfe&ved=0CBEQjRxqFwoTCMCo8fnfpv4CFQAAAAAdAAAAABAEt=1681471686837000&sour', 1);

console.log(arr);
obj1.getSalary(obj1);
obj2.getSalary(obj2);
obj3.getSalary(obj3);
obj4.getSalary(obj4);
obj5.getSalary(obj5);
obj6.getSalary(obj6);

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
  document.getElementById("p2").innerHTML= obj2.info();
  document.getElementById("p3").innerHTML= obj3.info();
  document.getElementById("p4").innerHTML= obj4.info();
  document.getElementById("p5").innerHTML= obj5.info();
  document.getElementById("p6").innerHTML= obj6.info();
  //end lab7

   //function
//Create a function 
//to generate a unique four digits employee id number.


Employee.prototype.generateDigits = function () {//we wrote min and max because we said we need the random number between 2numbers
  this.employeeID = Math.floor(1000 + Math.random() * 9000);
  }
  // obj1.generateDigits();

  Employee.prototype.render = function(){
    const employee = document.getElementById('employee');

    //  const imgEle = document.createElement('img');
    //  employee.appendChild(imgEle);
    // const div2Ele = document.createElement('card');//new can remove it
    // employee.appendChild(div2Ele);//new can remove it

    const divEle = document.createElement('div');
    employee.appendChild(divEle);
    
    const imgEle = document.createElement('img');
    divEle.appendChild(imgEle);

    // const src = document.createElement('src');
    imgEle.src = `${this.imgurl}`;
    // imgEle.appendChild(src);
   
      const pEle = document.createElement('p');
      pEle.textContent = `Name : ${this.fullName} - ID: ${this.employeeID}`;
      divEle.appendChild(pEle);

      const p2Ele = document.createElement('p');
     p2Ele.textContent = `Department: ${this.department} - Level: ${this.level} `;
      divEle.appendChild(p2Ele);

      const p3Ele = document.createElement('p');
      p3Ele.textContent = `Salary : ${this.salary} `;
      divEle.appendChild(p3Ele);

  }
  function addNewEmployee(e){
    e.preventDefault();
    let fullname = e.target.fullname.value;
    let department = e.target.department.value;
    let level = e.target.level.value;
    let imgurl = e.target.imgurl.value;
    // let employeeID =e.target.employeeID.value

    const newEmployee= new Employee(1,fullname, department, level, imgurl,1);
    newEmployee.generateDigits();
    newEmployee.getSalary(newEmployee);
    newEmployee.render();


    console.log(newEmployee);  
  }
  const employeeForm = document.getElementById("employeeForm");
  employeeForm.addEventListener("submit", addNewEmployee);


