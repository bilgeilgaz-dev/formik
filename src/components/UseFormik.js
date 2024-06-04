import { useFormik } from "formik";

function UseFormik() {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      firstName: "Bilge",
      lastName: "Ilgaz",
      email: "bilgeilgaz@gmail.com",
      gender: "female",
      hobbies: [],
      country: "",
    },
    onSubmit: async (values) => {
      console.log("values", values);
    },
  });
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          name="firstName"
          onChange={handleChange}
          value={values.firstName}
        />
        <br />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <input
          name="lastName"
          onChange={handleChange}
          value={values.lastName}
        />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <input name="email" onChange={handleChange} value={values.email} />
        <br />
        <br />
        <span>Male</span>
        <input
          name="gender"
          value="male"
          type="radio"
          onChange={handleChange}
          checked={values.gender === "male"}
        />
        <br />
        <span>Female</span>
        <input
          name="gender"
          value="female"
          type="radio"
          onChange={handleChange}
          checked={values.gender === "female"}
        />
        <br />
        <br />

        <input
          type="checkbox"
          name="hobbies"
          onChange={handleChange}
          value="football"
        />
        <span>Football</span>

        <input
          type="checkbox"
          name="hobbies"
          onChange={handleChange}
          value="cinema"
        />
        <span>Cinema</span>

        <input
          type="checkbox"
          name="hobbies"
          onChange={handleChange}
          value="photography"
        />
        <span>Photography</span>
        <br />
        <br />

        <select name="country" onChange={handleChange} value={values.country}>
          <option value="Turkey">Turkey</option>
          <option value="UK">UK</option>
          <option value="USA">USA</option>
        </select>

        <br />
        <br />

        <button type="submit">Submit</button>
        <br />
        <br />
        {JSON.stringify(values)}
        <br />
        <br />
      </form>
    </div>
  );
}

export default UseFormik;
