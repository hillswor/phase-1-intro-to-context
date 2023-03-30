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

function hoursWorkedOnDate(employeeRecord, date) {
	const timeInEvents = employeeRecord.timeInEvents.filter(
		(event) => event.date === date
	);
	const timeOutEvents = employeeRecord.timeOutEvents.filter(
		(event) => event.date === date
	);
	let totalHoursWorked = 0;
	for (let i = 0; i < timeInEvents.length; i++) {
		const hoursWorked =
			(timeOutEvents[i].hour - timeInEvents[i].hour) / 100;
		totalHoursWorked += hoursWorked;
	}
	return totalHoursWorked;
}

function wagesEarnedOnDate(employeeRecord, date) {
	const hours = hoursWorkedOnDate(employeeRecord, date);
	return hours * employeeRecord.payPerHour;
}

function allWagesFor(employeeRecord) {
	let dates = employeeRecord.timeInEvents.map((event) => {
		return event.date;
	});
	let wages = dates.map((date) => {
		return wagesEarnedOnDate(employeeRecord, date);
	});
	return wages.reduce((totalWages, dailyWages) => {
		return totalWages + dailyWages;
	}, 0);
}

function calculatePayroll() {}
