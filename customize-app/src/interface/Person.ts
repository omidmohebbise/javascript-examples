interface Person {
  name: string;
  family: string;
  age: number;
}

// example
function personFactory(
  firstName: string,
  lastName: string,
  age: number
): Person {
  const p: Person = {
    name: "omid",
    family: "mohebbi",
    age: 12,
  };
  return p;
}
