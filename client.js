console.log('JS');

$(readyNow);

let employeeList = [];
let totalMonthly = 0;
let salaryList = [];

function readyNow() {
    console.log('JQ');
    // CLICK EVENTS
    $('#submitEmployee').on('click', submitEmployee)
    $('#employeeRows').on('click', 'tr', deleteEmployee)
} // end readyNow

function submitEmployee() {
    console.log('in submit employee'); // test log

    const firstName = $('#firstIn').val();      //getting first name input
    const lastName = $('#lastIn').val();        //getting last name input
    const id = $('#idIn').val();                //getting id input
    const title = $('#titleIn').val();          //getting title input
    const annualSalary = $('#salaryIn').val();  //getting annual salary input

    if (firstName && lastName && id && title && annualSalary) { // if all inputs are true

        //Create new employee object
        let newEmployee = {
            firstName: firstName,
            lastName: lastName,
            id: id,
            title: title,
            annualSalary: annualSalary
        } // end if
        //push new employee to list
        employeeList.push(newEmployee);
        salaryList.push(newEmployee.annualSalary)
        console.log(salaryList);
        console.log(employeeList);
        //append to dom
        calculateMonthly();
        render();
        //clear inputs
        $('#firstIn').val('');
        $('#lastIn').val('');
        $('#idIn').val('');
        $('#titleIn').val('');
        $('#salaryIn').val('');
    } else {   // inputs empty
        console.log('Input missing!');
        alert('Input missing!');
    }
} // submitEmployee

function render() {
    console.log('in render');
    //empty rows
    $('#employeeRows').empty();
    $('#monthlyDisplay').empty();
    // loop to append all employees from list
    for (let employee of employeeList) {
        // created row to append using employee object
        let row = $(`
    <tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.id}</td>
        <td>${employee.title}</td>
        <td>${formatSalary(employee.annualSalary)}</td>
        <td><button class="btn btn-dark" id="deleteButton">Delete</button></td>
    </tr>
    `);
        // append row
        $('#employeeRows').append(row);
    } // end for loop
    // monthly expense display
    let monthlyExpense = $(`<p class="displayBlock">Total Monthly: ${formatSalary(totalMonthly)}</p>`)

    if (totalMonthly > 20000) {
        $('#monthlyDisplay').addClass('warning')
        $('#monthlyDisplay').append(monthlyExpense);
    } else {
        $('#monthlyDisplay').append(monthlyExpense);
    }
} // end render

function calculateMonthly() {
    totalMonthly = 0;
    for (let employee of employeeList) {
        totalMonthly += Number(employee.annualSalary);
    } // end for loop 
    totalMonthly = (totalMonthly / 12);
    console.log(totalMonthly);
    return totalMonthly;

} // end calculateMonthly 

function deleteEmployee() {
    console.log('inside delete employee');
    $(this).closest('tr').remove();
} // end deleteEmployee

function formatSalary(number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    }).format(number);
} // end formatCurrency




