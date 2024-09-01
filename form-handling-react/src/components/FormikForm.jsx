import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={Yup.object({
        username: Yup.string().required("Username is required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
        password: Yup.string().required("Password is required"),
      })}
      onSubmit={() => {
        // Handle form submission without using values or setSubmitting
        setTimeout(() => {
          alert("Form submitted successfully");
          // Any async tasks completed, setSubmitting(false) can be placed here.
        }, 400);
      }}
    >
      <Form>
        <Field type="text" name="username" placeholder="Username" />
        <ErrorMessage name="username" component="div" />

        <Field type="email" name="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" />

        <Field type="password" name="password" placeholder="Password" />
        <ErrorMessage name="password" component="div" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
