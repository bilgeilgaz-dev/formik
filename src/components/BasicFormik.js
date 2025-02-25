import { Formik, Field, Form } from "formik";

function BasicFormik() {
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "Bilge",
          lastName: "Ilgaz",
          email: "bilgeilgaz@gmail.com",
          gender: "female",
          hobbies: [],
          country: ""
        }}
        onSubmit={async (values) => {
          console.log('values', values)
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="Jane" />
          
          <br />
          <br />
          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />
          <br />
          <br />
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default BasicFormik;
