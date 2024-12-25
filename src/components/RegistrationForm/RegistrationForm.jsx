import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './RegistrationForm.module.css';
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        dispatch(register(values));
        resetForm();
    };

    return (
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form className={css.form} autoComplete="off">
                    <label className={css.label}>
                        Username
                        <Field type="text" name="name" className={css.input} />
                        <ErrorMessage name="name" component="div" className={css.error} />
                    </label>
                    <label className={css.label}>
                        Email
                        <Field type="email" name="email" className={css.input} />
                        <ErrorMessage name="email" component="div" className={css.error} />
                    </label>
                    <label className={css.label}>
                        Password
                        <Field type="password" name="password" className={css.input} />
                        <ErrorMessage name="password" component="div" className={css.error} /> 
                    </label>
                    <button type="submit" disabled={isSubmitting} className={css.button}>Register</button>
                </Form>
            )
            }
        </Formik>);
};