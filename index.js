function createEmployeeRecord(employeeInfo) {
	const employee = {
		firstName: employeeInfo[0],
		familyName: employeeInfo[1],
		title: employeeInfo[2],
		payPerHour: employeeInfo[3],
		timeInEvents: [],
		timeOutEvents: [],
	};
	return employee;
}

function createEmployeeRecords(arrayOfArrays) {
	let employees = [];
	arrayOfArrays.forEach((array) => {
		employees.push(createEmployeeRecord(array));
	});
	return employees;
	console.log(employees);
}
