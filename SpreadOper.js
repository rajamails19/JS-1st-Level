const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};
 
const updatedPerson = { ...person, age: 31, job: 'Developer' };
console.log(updatedPerson);

/* 
{
  age: 31,
  city: "New York",
  job: "Developer",
  name: "John"
}
*/
