//Objects are a way to store multiple values with keyvalue pairs.

const names=
{
  "firstname":"hari Krishna",
   "age":20,
   "Skill": "WebDevelopment"

}
console.log(names["Skill"]);

/*
Way to declare Array of Objects
{} points to array 0
{} points to array 1
{} points to array 2
...Soo on

*/

const students=[
    {
        "firstname":"hari Krishna",
        "age":20,
        "Skill": "WebDevelopment"
    },
    {
        "firstname":"hari",
        "age":22,
        "Skill": "Data Analytics"
    },
    {
        "firstname":"Raju",
         age:22,
         skill:"sql",
    }
]
console.log(students[2]["skill"]);