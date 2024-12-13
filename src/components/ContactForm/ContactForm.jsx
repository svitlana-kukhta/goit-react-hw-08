import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const contactSchema = Yup.object().shape({
       name: Yup.string().min(3).max(50).required("Вкажіть своє ім'я"),
       number: Yup.string() .matches(/^[0-9]{10}$/, "Має бути 10 знаків")
      .required("Вкажіть свій номер")
});

const ContactForm = () => {
  const dispatch = useDispatch();
  
  const handleSubmit = (values, actions) => {

  const newContact = {
    id: crypto.randomUUID(),
      ...values,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
 };
    
  return (
    <Formik validationSchema={contactSchema} initialValues={{ name: "", number: "" }} onSubmit={handleSubmit}>
         {({ isSubmitting }) => (<Form className={css.form}>
        <label className={css.labelText} htmlFor="name">
          <span >Name</span>
          <Field className={css.field} type="text" name="name" id="name" required/>
          <ErrorMessage className={css.error} name='name' component='span' />
        </label>
        <label className={css.labelText} htmlFor="number">
              <span >Number</span>
			        <Field className={css.field} type="tel" name="number" id="number" required/>
              <ErrorMessage className={css.error} name='number' component='span' />
        </label>
        <button className={css.button} type="submit" disabled={isSubmitting}>Add contact</button>
      </Form>
          )}
    </Formik>
  );
};
export default ContactForm;