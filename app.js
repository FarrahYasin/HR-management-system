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
  Employee.allEmployees.push(this);
  }
  Employee.allEmployees = [];

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
let obj1 = new Employee(1000,'Ghazi Samer','Administration','Senior','https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Ghazi.jpg?raw=true', 1) ;
let obj2 = new Employee(1001,'Lana Ali','Finance','Senior','https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Lana.jpg?raw=true', 1);
let obj3 = new Employee(1001,'Tamara Ayoub','Marketing','Senior','https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Tamara.jpg?raw=true', 1);
let obj4 = new Employee(1001,'Safi Walid','Administration','Mid-Senior','https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Safi.jpg?raw=true', 1);
let obj5 = new Employee(1001,'Omar Zaid','Development','Senior','https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Omar.jpg?raw=true', 1);
let obj6 = new Employee(1001,'Rana Saleh','Development','Junior','https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Rana.jpg?raw=true', 1);
let obj7 = new Employee(1002,'Hadi Ahmad','Finance','Mid-Senior','https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Hadi.jpg?raw=true', 1);

console.log(arr);
obj1.getSalary(obj1);
obj2.getSalary(obj2);
obj3.getSalary(obj3);
obj4.getSalary(obj4);
obj5.getSalary(obj5);
obj6.getSalary(obj6);
obj7.getSalary(obj7);


// function show(Employee){
//   let table_1 = `<tr>
//   <th>EmployeeID</th>
//   <th>FullName</th>
//   <th>Department</th>
//   <th>Level</th>
//   </tr>`;

//   for(let i in arr){
//   table_1+= `<tr>
//   <td>${Employee[i].employeeID}</td>
//    <td>${Employee[i].fullName}</td>
//    <td>${Employee[i].department}</td>
//    <td>${Employee[i].level}</td>
//   </tr>`
//   document.getElementById("table1").innerHTML= table_1;
//   }
// }

// show(arr);

//render info
// Employee.prototype.info = function (arr){
//   return `Employee name is ${this.fullName}, and the salary is ${this.salary}`
//   }
  // console.log(obj1.info());
  // document.getElementById("card1").innerHTML= obj1.info();
  // document.getElementById("card2").innerHTML= obj2.info();
  // document.getElementById("card3").innerHTML= obj3.info();
  // document.getElementById("card4").innerHTML= obj4.info();
  // document.getElementById("card5").innerHTML= obj5.info();
  // document.getElementById("card6").innerHTML= obj6.info();
  //end lab7

   //function
//Create a function 
//to generate a unique four digits employee id number.
Employee.prototype.generateDigits = function () {//we wrote min and max because we said we need the random number between 2numbers
  this.employeeID = Math.floor(1000 + Math.random() * 9000);
  }
  // obj1.generateDigits();
// console.log("hh"+Employee.allEmployees);

  Employee.prototype.render = function(){
    const employee = document.getElementById('employee');

    //  const imgEle = document.createElement('img');
    //  employee.appendChild(imgEle);
    // const div2Ele = document.createElement('card');//new can remove it
    // employee.appendChild(div2Ele);//new can remove it

    employee.innerHTML = '';

    for(let i = 0; i < Employee.allEmployees.length; i++){
      let sigleEmployee = Employee.allEmployees[i];
      
    const divEle = document.createElement('div');
    employee.appendChild(divEle);
    
    const imgEle = document.createElement('img');
    divEle.appendChild(imgEle);

    // const src = document.createElement('src');
    imgEle.src = `${sigleEmployee.imgurl}`;
    // imgEle.appendChild(src);
   
      const pEle = document.createElement('p');
      pEle.textContent = `Name : ${sigleEmployee.fullName} - ID: ${sigleEmployee.employeeID}`;
      divEle.appendChild(pEle);

      const p2Ele = document.createElement('p');
     p2Ele.textContent = `Department: ${sigleEmployee.department} - Level: ${sigleEmployee.level} `;
      divEle.appendChild(p2Ele);

      const p3Ele = document.createElement('p');
      p3Ele.textContent = `Salary : ${sigleEmployee.salary} `;
      divEle.appendChild(p3Ele);
    }
  }

  function addNewEmployee(e){
    e.preventDefault();
    let fullname = e.target.fullname.value;
    let department = e.target.department.value;
    let level = e.target.level.value;
    let imgurl = e.target.imgurl.value;

    const newEmployee= new Employee(1,fullname, department, level, imgurl,1);
    newEmployee.generateDigits();

    newEmployee.getSalary(newEmployee);

    newEmployee.render();

    console.log(newEmployee);  

    saveData();
  }

function saveData(){
  let data = JSON.stringify(Employee.allEmployees);
  localStorage.setItem('employees', data)
}

function getDataFromTheLocalStorage() {
  let stringObj = localStorage.getItem('employees');
  let parseObj = JSON.parse(stringObj);
  console.log(parseObj)
  if(parseObj !== null) {
    Employee.allEmployees=[];
    for(let i = 0; i < parseObj.length; i++) {

      new Employee(parseObj[i].employeeID,parseObj[i].fullName, parseObj[i].department, parseObj[i].level, parseObj[i].imgurl,parseObj[i].salary);
    }
    console.log(Employee.allEmployees);
    Employee.allEmployees[0].render();
  }

}

  const employeeForm = document.getElementById("employeeForm");
  employeeForm.addEventListener("submit", addNewEmployee);

  getDataFromTheLocalStorage();

  obj1.render();
  obj2.render();
  obj3.render();
  obj4.render();
  obj5.render();
  obj6.render();
  obj7.render();

  saveData();



