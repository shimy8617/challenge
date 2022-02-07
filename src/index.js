import React from 'react';
 import ReactDOM from 'react-dom';
 import { Formik, Form, useField } from 'formik';
 import * as Yup from 'yup';
 import './App.css';
 
 const MyCheckbox = ({ children, ...props }) => {
   // React treats radios and checkbox inputs differently other input types, select, and textarea.
   // Formik does this too! When you specify `type` to useField(), it will
   // return the correct bag of props for you -- a `checked` prop will be included
   // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
   const [field, meta] = useField({ ...props, type: 'checkbox' });
   return (
     <div>
       <label className="checkbox-input">
         <input type="checkbox" {...field} {...props} />
         {children}
       </label>
       {meta.touched && meta.error ? (
         <div className="error">{meta.error}</div>
       ) : null}
     </div>
   );
 };
 
 const MySelect = ({ label, ...props }) => {
   const [field, meta] = useField(props);
   return (
     <div>
       <label htmlFor={props.id || props.name}>{label}</label>
       <select {...field} {...props} />
       {meta.touched && meta.error ? (
         <div className="error">{meta.error}</div>
       ) : null}
     </div>
   );
 };
 
 // And now we can use these
 const SignupForm = () => {
   return (
     <>
       <h1>Elige un Menu!</h1>
       <Formik
         initialValues={{
           firstName: '',
           lastName: '',
           email: '',
           acceptedTerms: false, // added for our checkbox
           jobType: '', // added for our select
         }}
         validationSchema={Yup.object({
           firstName: Yup.string()
             .max(15, 'Must be 15 characters or less')
             .required('Required'),
           lastName: Yup.string()
             .max(20, 'Must be 20 characters or less')
             .required('Required'),
           email: Yup.string()
             .email('Invalid email address')
             .required('Required'),
           acceptedTerms: Yup.boolean()
             .required('Required')
             .oneOf([true], 'You must accept the terms and conditions.'),
           jobType: Yup.string()
             .oneOf(
               ['designer', 'development', 'product', 'other'],
               'Invalid Job Type'
             )
             .required('Required'),
         })}
         onSubmit={(values, { setSubmitting }) => {
           setTimeout(() => {
             alert(JSON.stringify(values, null, 2));
             setSubmitting(false);
           }, 400);
         }}
       >
         <Form> 
           <MySelect label="Food Type" name="jobType">
             <option value="">Select a food type</option>
             <option value="designer">Vegan</option>
             <option value="development">Gluten-Free</option>
             <option value="product">Vegetarian</option>
           </MySelect>
 
           <button type="submit">Buscar</button>
         </Form>
       </Formik>
     </>
   );
 };
 
 function App() {
  return (
  <SignupForm />
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);