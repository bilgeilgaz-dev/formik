import { useFormik } from "formik";
import * as yup from 'yup';

const validations = yup.object().shape({
  email: yup.string().email('custom error message').required(),
  password: yup.string().min(8).required(),
  passwordConfirmation: yup.string().oneOf([yup.ref('password')], 'not a same pass').required()
});
function Validation() {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirmation: ""
    },
    onSubmit: async (values) => {
      console.log("values", values);
    },
    validationSchema: validations
  });
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />

        { errors.email && touched.email && <div className="error-messages">{errors.email}</div> }
        <br />
        <br />

        <label htmlFor="password">Password</label>
        <input name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
        { errors.password && touched.password && <div className="error-messages">{errors.password}</div> }

        <br />
        <br />

        <label htmlFor="passwordConfirmation">Confirm password</label>
        <input name="passwordConfirmation" onChange={handleChange} onBlur={handleBlur} value={values.passwordConfirmation} />
        { errors.passwordConfirmation && touched.passwordConfirmation && <div className="error-messages">{errors.passwordConfirmation}</div> }

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

export default Validation;
