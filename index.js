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

function createTimeInEvent(employeeRecord, timeInData) {
	let dateAndTime = timeInData.split(" ");
	let timeInObject = {
		type: "TimeIn",
		date: dateAndTime[0],
		hour: parseInt(dateAndTime[1]),
	};
	employeeRecord.timeInEvents.push(timeInObject);
	return employeeRecord;
}

function createTimeOutEvent(employeeRecord, timeOutData) {
	let dateAndTime = timeOutData.split(" ");
	let timeOutObject = {
		type: "TimeOut",
		date: dateAndTime[0],
		hour: parseInt(dateAndTime[1]),
	};
	employeeRecord.timeOutEvents.push(timeOutObject);
	return employeeRecord;
}
