import { useState } from "react";
import { FormEvent } from "react";
import { useForm } from "react-hook-form";

function Form() {
  const form = useForm();

  const [person, setPerson] = useState({
    name: "",
    age: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          value={person.name}
          id="name"
          type="text"
          className="form-control"
          onChange={(event) => setPerson({ ...person, name: event.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          value={person.age}
          id="age"
          type="number"
          className="form-control"
          onChange={(event) => setPerson({ ...person, age: parseInt(event.target.value) })}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
