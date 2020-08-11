import React from 'react';
import { Formik, Field, Form } from 'formik';
import { NavLink } from 'react-router-dom';
import style from './signup.module.css';

const Signup = () => {

    const validate = values => {
        const errors: any[] = [];
        if (!values.firstName) {
            errors.push('Required');
        } else if (values.firstName.length > 15) {
            errors.push('Must be 15 characters or less');
        }

        if (!values.lastName) {
            errors.push('Required');
        } else if (values.lastName.length > 20) {
            errors.push('Must be 20 characters or less');
        }

        if (!values.email) {
            errors.push('Required');
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.push('Invalid email address');
        }

        console.log(errors)

        return errors;
    };

    return (
        <div className={`${style.container} ${style.container_position}`}>
            <div className={`${style.container__FormContainer} ${style.container__FormContainer_position}`}>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: ''
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    <Form className={`${style.Form} ${style.Form__position}`}>
                        <div className={`${style.Form__container} ${style.Form__tittle_position}`}>
                            <h2 className={`${style.Form__tittle}`}>Registro</h2>
                        </div>
                        <div className={`${style.Form__container}`}>
                            <div className={`${style.Form__container_short}`}>
                                <Field
                                    id="firstName"
                                    name="firstName"
                                    placeholder="firstName"
                                    type="text"
                                    required
                                    className={` ${style.Form__input} ${style.Form__input_event} `}
                                />
                                <label htmlFor="firstName" className={`${style.Form_label}`}>Nombre</label>
                            </div>
                            <div className={`${style.Form__container_short}`}>
                                <Field
                                    id="lastName"
                                    name="lastName"
                                    placeholder="lastName"
                                    type="text"
                                    required
                                    className={` ${style.Form__input} ${style.Form__input_event} `}
                                />
                                <label htmlFor="lastName" className={`${style.Form_label}`}>Apellidos</label>
                            </div>
                        </div>
                        <div className={`${style.Form__container}`}>
                            <div className={`${style.Form__container_large}`}>
                                <Field
                                    id="email"
                                    name="email"
                                    placeholder="email"
                                    type="text"
                                    required
                                    className={` ${style.Form__input} ${style.Form__input_event} `}
                                />
                                <label htmlFor="email" className={`${style.Form_label}`}>Correo</label>
                            </div>
                            <div className={`${style.Form__container_large}`}>
                                <Field
                                    id="password"
                                    name="password"
                                    placeholder="password"
                                    type="text"
                                    required
                                    className={` ${style.Form__input} ${style.Form__input_event} `}
                                />
                                <label htmlFor="password" className={`${style.Form_label}`}>Contraseña</label>
                            </div>
                        </div>
                        <div className={style.Form__container}>
                            <button type='submit' className={style.Form__button}>Registrar</button>
                        </div>
                        <div className={`${style.Form__container} ${style.Form__nav_position} `}>
                            <NavLink className={`${style.Form__nav}`} to="/login">Tienes una cuenta? Inicia Sesión</NavLink>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div >
    )
}

export default Signup
