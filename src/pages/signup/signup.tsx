import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCopyright } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { selectSignupFetching, selectSignupUser, selectSignupError, signup } from '../../redux/signup/signupSlice';
import style from './signup.module.css';
import './theme-dark/dark.min.css';

const Signup = () => {

    const signupFetching = useSelector(selectSignupFetching);
    const signupUser = useSelector(selectSignupUser);
    const signupError = useSelector(selectSignupError);
    const dispatch = useDispatch();
    const histroy = useHistory();
    const MySwal = withReactContent(Swal);

    useEffect(() => {
        if (signupUser && !signupFetching && !signupError) {
            MySwal.close();
            histroy.push('/');
        } else if (signupError) {
            const messages = Object.values(signupError.message).reduce((acc, value) => (acc = acc + `${value}`), "")
            MySwal.fire({
                title: 'Error de registro',
                text: messages,
                icon: 'error',
                allowOutsideClick: false
            })
        } else if (signupFetching) {
            MySwal.fire({
                title: 'Espere..',
                text: 'Guradando Información',
                icon: 'info',
                allowOutsideClick: false
            })
            MySwal.showLoading();
        }
    })

    const icon = <FontAwesomeIcon
        icon={faUserCircle}
        size="3x"
        className={style.Form__icon}
    />;
    const icon_copyRights = <FontAwesomeIcon icon={faCopyright} />;

    const formSchema = Yup.object().shape({
        firstName: Yup.string()
            .required("Campo requerido")
            .matches(/^[a-zA-Z][a-zA-Z\s]*$/, 'Solo letras y espacios')
        ,
        lastName: Yup.string()
            .required("Campo requerido")
            .matches(/^[a-zA-Z][a-zA-Z\s]*$/, 'Solo letras y espacios')
        ,
        email: Yup.string()
            .required("Campo requerido")
            .email('Correo no valido')
        ,
        password: Yup.string()
            .required("Campo requerido")
            .matches(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/, 'Contraseña débil')
        ,
        confirm_password: Yup.string()
            .oneOf(
                [Yup.ref('password'), null],
                "Las contraseñas no son iguales"
            )
    });

    return (
        <div className={`${style.container} ${style.container_position}`}>
            <div className={`${style.container__FormContainer} ${style.container__FormContainer_position}`}>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: '',
                        confirm_password: '',
                        save: false
                    }}
                    validationSchema={formSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        dispatch(signup(values));
                        setSubmitting(false);
                    }}
                >
                    <Form className={`${style.Form} ${style.Form__position}`}>
                        <div className={`${style.Form__container} ${style.Form__position_center}`}>
                            {icon}
                        </div>
                        <div className={`${style.Form__container} ${style.Form__position_center}`}>
                            <h2 className={`${style.Form__tittle}`}>Registro</h2>
                        </div>
                        <div className={`${style.Form__container}`}>
                            <div className={`${style.Form__container_short}`}>
                                <div className={`${style.Form__content}`}>

                                    <Field
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        required
                                        className={` ${style.Form__input} ${style.Form__input_event} `}
                                    />
                                    <label htmlFor="firstName" className={`${style.Form_label}`}>Nombre</label>
                                </div>
                                <ErrorMessage name="firstName" render={(msg) => <div className={`${style.ErrroMessage}`}>{msg}</div>} />
                            </div>

                            <div className={`${style.Form__container_short}`}>
                                <div className={`${style.Form__content}`}>
                                    <Field
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        required
                                        disabled={signupFetching}
                                        className={` ${style.Form__input} ${style.Form__input_event} `}
                                    />
                                    <label htmlFor="lastName" className={`${style.Form_label}`}>Apellidos</label>
                                </div>
                                <ErrorMessage name="lastName" render={(msg) => <div className={`${style.ErrroMessage}`}>{msg}</div>} />
                            </div>
                        </div>
                        <div className={`${style.Form__container}`}>
                            <div className={`${style.Form__container_large}`}>
                                <div className={`${style.Form__content}`}>
                                    <Field
                                        id="email"
                                        name="email"
                                        type="text"
                                        required
                                        disabled={signupFetching}
                                        className={` ${style.Form__input} ${style.Form__input_event} `}
                                    />
                                    <label htmlFor="email" className={`${style.Form_label}`}>Correo</label>
                                </div>
                                <ErrorMessage name="email" render={(msg) => <div className={`${style.ErrroMessage}`}>{msg}</div>} />
                            </div>
                            <div className={`${style.Form__container_large}`}>
                                <div className={`${style.Form__content}`}>
                                    <Field
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        disabled={signupFetching}
                                        className={` ${style.Form__input} ${style.Form__input_event} `}
                                    />
                                    <label htmlFor="password" className={`${style.Form_label}`}>Contraseña</label>
                                </div>
                                <ErrorMessage name="password" render={(msg) => <div className={`${style.ErrroMessage}`}>{msg}</div>} />
                            </div>
                            <div className={`${style.Form__container_large}`}>
                                <div className={`${style.Form__content}`}>
                                    <Field
                                        id="confirm_password"
                                        name="confirm_password"
                                        type="password"
                                        required
                                        disabled={signupFetching}
                                        className={` ${style.Form__input} ${style.Form__input_event} `}
                                    />
                                    <label htmlFor="confirm_password" className={`${style.Form_label}`}>Repetir contraseña</label>
                                </div>
                                <ErrorMessage name="confirm_password" render={(msg) => <div className={`${style.ErrroMessage}`}>{msg}</div>} />
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
                            <button
                                type='submit'
                                disabled={signupFetching}
                                className={style.Form__button}>Registrar</button>
                        </div>
                        <div className={`${style.Form__container} ${style.Form__nav_position} `}>
                            <NavLink className={`${style.Form__nav}`} to="/login">Tienes una cuenta? Inicia Sesión</NavLink>
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

export default Signup