'use strict';

   let x =localStorage.getItem('employees');
  //  console.log(x)
   let y = JSON.parse(x)
   console.log(y)



//calculate 
let administrationTotalSalary =0;
let numOfAdministration=0; 
let avgOfAdministration = 0;

let financeTotalSalary=0;
let numOfFinance=0; 
let avgOfFinance=0;

let marketingTotalSalary=0;
let numOfMarketing=0;
let avgOfMarketing=0;

let developmentTotalSalary=0;
let numOfdevelopment=0;
let avgOfdevelopment=0;

for(let i=0 ; i<y.length ; i++){
 
  if (y[i].department === 'Administration' || y[i].department === 'administration'){
    numOfAdministration++;
    console.log("numOfAdministration  "+numOfAdministration);
    administrationTotalSalary += y[i].salary;
    console.log("administrationTotalSalary  "+administrationTotalSalary);

    avgOfAdministration = administrationTotalSalary/numOfAdministration;
    console.log("avgOfAdministration  "+avgOfAdministration);


  }
   else if (y[i].department === 'Finance' || y[i].department === 'finance'){
    numOfFinance++;
    console.log("numOfFinance  "+numOfFinance)

    financeTotalSalary += y[i].salary;
    console.log("financeTotalSalary  "+financeTotalSalary);

    avgOfFinance = financeTotalSalary/numOfFinance;
    console.log("avgOfFinance  "+avgOfFinance);


  }
  else if (y[i].department === 'Marketing' || y[i].department === 'marketing'){
    numOfMarketing++;
    console.log("numOfMarketing " +numOfMarketing);
    marketingTotalSalary += y[i].salary;
    console.log("marketingTotalSalary "+marketingTotalSalary);

    avgOfMarketing = marketingTotalSalary/numOfMarketing;
    console.log("avgOfMarketing  "+avgOfMarketing);


  }
  else if (y[i].department === 'Development' || y[i].department === 'development'){
    numOfdevelopment++;
    console.log("numOfdevelopment  "+numOfdevelopment)

    developmentTotalSalary += y[i].salary;
    console.log("developmentTotalSalary " + developmentTotalSalary);
    
    avgOfdevelopment = developmentTotalSalary/numOfdevelopment;
    console.log("avgOfdevelopment  "+avgOfdevelopment);

  }
}
let totalSalaryForAllEmployee = administrationTotalSalary + financeTotalSalary + marketingTotalSalary + developmentTotalSalary;

console.log("totalSalary  " + totalSalaryForAllEmployee);

let totalNumForAllEmployee = numOfAdministration + numOfdevelopment + numOfMarketing + numOfFinance;


let avgSalary = totalSalaryForAllEmployee/totalNumForAllEmployee ;
// let arr=[];

// function show(Employee){
  function show(){
      let table_1 = `<tr>
      <th>department</th>
      <th>EmployeesNum</th>
      <th>Avg</th>
      <th>TotalSalary
      </tr>`;
      
      table_1+= `<tr><td>adminstraion</td><td>${numOfAdministration}</td><td>${avgOfAdministration}</td><td>${administrationTotalSalary}</td></tr>
      <tr><td>development</td><td>${numOfdevelopment}</td><td>${avgOfdevelopment}</td><td>${developmentTotalSalary}</td></tr>
      <tr><td>finance</td><td>${numOfFinance}</td><td>${avgOfFinance}</td><td>${financeTotalSalary}</td></tr>
      <tr><td>markiting</td><td>${numOfMarketing}</td><td>${avgOfMarketing}</td><td>${marketingTotalSalary}</td></tr>
    
      <td>totalNumEmployee for all</td><td>TotalSalary for all</td><td>Avg salary for all employee</td></tr>


      <td>${totalNumForAllEmployee}</td>
      <td>${totalSalaryForAllEmployee}</td>
      <td>${avgSalary}</td>


      
      </tr>`
      ;


      //  }
      // `<td>${y.department}</td>`

      document.getElementById("table1").innerHTML= table_1;

       
    }
    
    show();
  