import React from 'react';
import { Formik, Field, Form } from 'formik';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCopyright } from '@fortawesome/free-solid-svg-icons';

import style from './login.module.css';

export default function Login() {
    const icon = <FontAwesomeIcon
        icon={faUserCircle}
        size="3x"
        className={style.Form__icon}
    />;
    const icon_copyRights = <FontAwesomeIcon icon={faCopyright} />;

    return (
        <div className={`${style.container} ${style.container_position}`}>
            <div className={`${style.container__FormContainer} ${style.container__FormContainer_position}`}>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                        confirm_password: '',
                        save: false
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    <Form className={`${style.Form} ${style.Form__position}`}>
                        <div className={`${style.Form__container} ${style.Form__position_center}`}>
                            {icon}
                        </div>
                        <div className={`${style.Form__container} ${style.Form__position_center}`}>
                            <h2 className={`${style.Form__tittle}`}>Iniciar Sesión</h2>
                        </div>
                        <div className={`${style.Form__container}`}>
                            <div className={`${style.Form__container_large}`}>
                                <Field
                                    id="email"
                                    name="email"
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
                                    type="password"
                                    required
                                    className={` ${style.Form__input} ${style.Form__input_event} `}
                                />
                                <label htmlFor="password" className={`${style.Form_label}`}>Contraseña</label>
                            </div>
                            
                        </div>
                        <div className={`${style.Form__container} ${style.Form__checkbox_position}`}>
                            <label htmlFor="save" className={`${style.Form__checkbox_text}`}>
                                <Field type="checkbox" id="save" name="save" className={`${style.Form__checkbox}`} />
                                <span className={`${style.Form__checkmark}`}></span>
                                Recordar credenciales?
                            </label>
                        </div>
                        <div className={style.Form__container}>
                            <button type='submit' className={style.Form__button}>Iniciar Sesión</button>
                        </div>
                        <div className={`${style.Form__container} ${style.Form__nav_position} `}>
                            <NavLink className={`${style.Form__nav}`} to="/signup"> No tienes una cuenta?</NavLink>
                        </div>
                        <div className={`${style.Form__container} ${style.Form__position_center}`}>
                            <p className={`${style.Form_copyrights}`}>
                                {icon_copyRights} 2023 La App del taco.
                            </p>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div >
    )
}
