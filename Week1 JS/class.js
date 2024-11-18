class Student
{
    constructor(namee,roll,section)
    {
        this.namee=namee;
        this.roll=roll;
        this.section=section;
    }
    info()   //Method ie Inside the class is called method ,outside the class is called function.
    {
            console.log("Student name is " +this.namee);
            console.log("roll number is "+this.roll);
            console.log("Section is "+this.section);
    }
 }
        
// let student1=new Student("Hari Krishna",149,"Beta");
// student1.info();

// let student2=new Student("Ganesh",139,"zeta");
// student2.info();

/*

const date=new Date();
console.log(date.getDate());
console.log(date.getMonth()+1);
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes())
console.log(date.getSeconds());
*/


const student='{"firstName":"Hari Krishna","roll":149,"class":"beta"}';
console.log(student);
console.log(JSON.parse(student));

//to convert string to Json and fetch objects

const js=JSON.parse(student);
console.log(js["firstName"]);

//to convert json to string
const str=JSON.stringify(js);
console.log(str);