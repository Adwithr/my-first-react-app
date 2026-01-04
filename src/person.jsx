import { useState } from "react";

export default function Person() {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Doe",
    age: 100,
  });

  const fullName = `${person.firstName} ${person.lastName}`;

  const handleClick = () => {
    setPerson((prev) => ({ ...prev, age: prev.age + 1 }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <h1>{fullName}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleClick}>Increase Age</button>
      <br />
      <label>
        First Name:
        <input type="text" name="firstName" value={person.firstName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Last Name: <input type="text" name="lastName" value={person.lastName} onChange={handleChange} />
      </label>
    </>
  );
}
