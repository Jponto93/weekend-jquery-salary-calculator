console.log('JS');

$(readyNow);

let employeeList = [];

function readyNow () {
    console.log('JQ');

    // CLICK EVENTS
    $('#submitEmployee').on('click', submitEmployee)
    
} // end readyNow

function submitEmployee () {
    console.log('in submit employee');

   const firstName = $('#firstIn').val(); //getting First Name input
   const lastName = $('#lastIn').val();
   const id = $('#idIn').val();
   const title = $('#titleIn').val();
   const annualSalary = $('#salaryIn').val();
   //test logs
  let newEmployee = {
      firstName: firstName,
      lastName: lastName,
      id: id,
      title: title,
      annualSalary: annualSalary
  }
 
  employeeList.push(newEmployee);
  console.log(employeeList);

    
} // submitEmployee