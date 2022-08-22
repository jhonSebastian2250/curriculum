import React, { useState } from 'react';
import '../style/contac.css'
import { Formik, Field, Form, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import ApiKey from '../services/ApiKey';
import emailjs from 'emailjs-com';
import ContactNetworks from '../components/contactNetworks';

const contactSchema = Yup.object().shape(
    {
        name: Yup.string()
            .required('Name is required')
            .min(3, 'His name is short')
            .max(15, 'His name is lake'),
        surname: Yup.string()
            .required('Surname is required')
            .min(5, 'His surname is short')
            .max(15, 'His surname is lake'),
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        message: Yup.string()
            .required('Message is required')
    }
);

const MyTextArea = ({ ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <textarea className="text-area" {...field} {...props} />
            {meta.touched && meta.error ? (
                <span className="error">{meta.error}</span>
            ) : null}
        </>
    );
};

const ContactPage = () => {

    const [send, setSend] = useState(false);

    const initialInput = {
        name: '',
        surname: '',
        email: '',
        message: ''
    }

    const clearForm = () => {
        document.getElementById('form').reset();
    }

    const sendEmail = (e) => {
        setSend(true);
        emailjs.sendForm(ApiKey.SERVICE_ID, ApiKey.TEMPLATE_ID, 'form', ApiKey.PUBLIC_KEY)
            .then((response) => {
                setSend(false);
                clearForm();
            }, (err) => {
                alert(JSON.stringify(err))
            })

    }

    return (
        <div>
            <Formik
                initialValues={initialInput}
                validationSchema={contactSchema}
                onSubmit={sendEmail}
            >
                {({
                    values,
                    touched,
                    errors
                }
                ) => (
                    <div className='form'>
                        <Form id='form'>
                            <div className='name'>
                                <div>
                                    <Field id='name' name='name' placeholder='name' type='text' />
                                    {
                                        errors.name && touched.name &&
                                        (
                                            <span className='error'><ErrorMessage name='name' /></span>
                                        )
                                    }
                                </div>

                                <div>
                                    <Field id='surname' name='surname' placeholder='surname' type='text' />
                                    {
                                        errors.surname && touched.surname &&
                                        (
                                            <span className='error'><ErrorMessage name='surname' /></span>
                                        )
                                    }
                                </div>
                            </div>

                            <div>

                                <Field id='email' name='email' placeholder='Example@gmail.com' type='email' />
                                {
                                    errors.email && touched.email &&
                                    (
                                        <span className='error'><ErrorMessage name='email' /></span>
                                    )
                                }
                            </div>
                            <MyTextArea
                                name="message"
                                placeholder="Message"
                            />
                            <button type='submit'>{send ? 'Sending...' : 'Send'}</button>
                            <div className='networks'>
                                <ContactNetworks></ContactNetworks>
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    );
}

export default ContactPage;
