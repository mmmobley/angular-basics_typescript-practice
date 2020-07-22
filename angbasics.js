function sayHello(person) {
    return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);
var Person = /** @class */ (function () {
    function Person(fname, lname, age, pnumber, state, zip, job, wage) {
        this.certs = [];
        this.FirstName = fname;
        this.LastName = lname;
        this.Age = age;
        this.PhoneNumber = pnumber;
        this.State = state;
        this.ZipCode = zip;
        this.Occupation = job;
        if (wage) {
            this.hourlyWage = wage;
        }
        else {
            this.hourlyWage = 40;
        }
    }
    Person.prototype.printUser = function (fname, lname, job) {
        return fname + " " + lname + " is a[n] " + job;
    };
    Person.prototype.printContact = function (fname, lname, pnumber, state, zip) {
        return fname + " " + lname + " can be reached at " + pnumber + " and lives at " + state + ", " + zip;
    };
    Person.prototype.basicinfo = function () {
        return this.FirstName + " " + this.LastName + " is " + this.Age + " years old.";
    };
    Person.prototype.getHourlyWage = function (fname, lname, wage) {
        if (wage) {
            return "Name: " + fname + " " + lname + "<br>Wage: " + wage * 12;
        }
        else {
            return "Name: " + fname + " " + lname + "<br>Wage: " + 40 * 12;
        }
    };
    Person.prototype.addCerts = function (fname, lname) {
        var _a;
        var certs = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            certs[_i - 2] = arguments[_i];
        }
        (_a = this.certs).push.apply(_a, certs);
        for (var i = 0; i < certs.length; i++) {
            return "Name: " + fname + " " + lname + "<br>Certifications: " + certs[i];
        }
    };
    return Person;
}());
function getPerson(person) {
    return "Person: " + JSON.stringify(person);
}
var person4 = { fname: "Patrick", lname: "Star", job: "service advisor" };
var person5 = { fname: "Mary", lname: "Poppins", age: 80, job: "nanny" };
var person1 = new Person("Janet", "Snakehole", 24, "384-587-847", "Ohio", 84739, "spy", 52);
var person2 = new Person("James", "Carter", 35, "239-498-858", "Colorado", 38904, "trucker", 41);
var person3 = new Person("Charlotte", "Pearson", 48, "589-243-578", "Kentucky", 28543, "pet sitter");
document.getElementById("p1").innerHTML = person1.printUser("Janet", "Snakehole", "spy");
document.getElementById("p2").innerHTML = person2.printContact("James", "Carter", "239-498-858", "Colorado", 38904);
document.getElementById("p3").innerHTML = person3.basicinfo();
document.getElementById("p4").innerHTML = person1.getHourlyWage("Janet", "Snakehole", 52);
document.getElementById("p5").innerHTML = person2.getHourlyWage("James", "Carter", 41);
document.getElementById("p6").innerHTML = person3.getHourlyWage("Charlotte", "Pearson");
document.getElementById("p7").innerHTML = person3.addCerts("Charlotte", "Pearson", "Servesafe, Linguistics, BA");
document.getElementById("p8").innerHTML = getPerson(person4);
document.getElementById("p9").innerHTML = getPerson(person5);
