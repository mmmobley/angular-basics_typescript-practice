function sayHello(person: string): string {
	return "Hello, " + person;
}

var user = "Super Student";

document.getElementById("para").innerHTML = sayHello(user);

class Person
{
	FirstName: string;
	LastName: string;
	Age: number;
	PhoneNumber: string;
	State: string;
	ZipCode: number;
	Occupation: string;
	hourlyWage: number;
	certs: string[] = [];

	constructor(fname: string, lname: string, age: number, pnumber: string, state: string, zip: number, job: string, wage?: number) {
		this.FirstName = fname;
		this.LastName = lname;
		this.Age = age;
		this.PhoneNumber = pnumber;
		this.State = state;
		this.ZipCode = zip;
		this.Occupation = job;

		if(wage){
			this.hourlyWage = wage;
		}
		else{
			this.hourlyWage = 40;
		}
	}


	printUser(fname: string, lname: string, job: string): string {
		return fname + " " + lname + " is a[n] " + job;
	}

	printContact(fname: string, lname: string, pnumber: string, state: string, zip: number): string {
		return fname + " " + lname + " can be reached at " + pnumber + " and lives at " + state + ", " + zip;
	}

	basicinfo(): string{
		return this.FirstName + " " + this.LastName + " is " + this.Age + " years old.";
	}

	getHourlyWage(fname: string, lname: string, wage?: number){
		if(wage){
			return "Name: " + fname + " " + lname + "<br>Wage: " + wage*12;
		}else{
			return "Name: " + fname + " " + lname + "<br>Wage: " + 40*12;
		}
	}

	addCerts(fname: string, lname: string, ...certs: string[]){
		this.certs.push(...certs);
		for(var i = 0; i < certs.length; i++)
		{ 
   			return "Name: " + fname + " " + lname +"<br>Certifications: " + certs[i];
		}
	}

	
}

interface PersonOptions
{
	fname: string;
	lname: string;
	age?: number;
	pnumber?: string;
	state?: string;
	zip?: number;
	job?: string;
	certs?: string[];
}

function getPerson(person: PersonOptions){
	return "Person: " + JSON.stringify(person);
}

let person4 = {fname: "Patrick", lname: "Star", job: "service advisor"};

let person5 = {fname: "Mary", lname: "Poppins", age: 80, job: "nanny"};

var person1 = new Person("Janet", "Snakehole", 24, "384-587-847", "Ohio", 84739, "spy", 52)

var person2 = new Person("James", "Carter", 35, "239-498-858", "Colorado", 38904, "trucker", 41)

var person3 = new Person("Charlotte", "Pearson", 48, "589-243-578", "Kentucky", 28543, "pet sitter")

	document.getElementById("p1").innerHTML = person1.printUser("Janet", "Snakehole", "spy");

	document.getElementById("p2").innerHTML = person2.printContact("James", "Carter", "239-498-858", "Colorado", 38904);

	document.getElementById("p3").innerHTML = person3.basicinfo();

	document.getElementById("p4").innerHTML = person1.getHourlyWage("Janet", "Snakehole", 52);

	document.getElementById("p5").innerHTML = person2.getHourlyWage("James", "Carter", 41);

	document.getElementById("p6").innerHTML = person3.getHourlyWage("Charlotte", "Pearson");

	document.getElementById("p7").innerHTML = person3.addCerts("Charlotte", "Pearson", "Servesafe, Linguistics, BA");

	document.getElementById("p8").innerHTML = getPerson(person4);

	document.getElementById("p9").innerHTML = getPerson(person5);