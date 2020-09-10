import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { NavLink, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCopyright } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {
    selectLoginFetching,
    selectLoginPayload,
    selectLoginError,
    login
} from '../../redux/login/loginSlice';

import style from './login.module.css';


export default function Login() {
    const loginFetching = useSelector(selectLoginFetching);
    const loginPayload = useSelector(selectLoginPayload);
    const loginError = useSelector(selectLoginError);
    const dispatch = useDispatch();
    const history = useHistory();
    const MySwal = withReactContent(Swal);

    useEffect(() => {
        if (!loginFetching && !loginError && !!loginPayload) {
            MySwal.close();
            history.push('/');
        } else if (loginError) {
            const messages = Object.values(loginError.message).reduce((acc, value) => (acc = acc + `${value}`), "")
            MySwal.fire({
                title: 'Error de registro',
                text: messages,
                icon: 'error',
                allowOutsideClick: false
            })
        } else if (loginFetching) {
            MySwal.fire({
                title: 'Espere..',
                text: 'Verificando Información',
                icon: 'info',
                allowOutsideClick: false
            })
            MySwal.showLoading();
        }
    });

    const icon = <FontAwesomeIcon
        icon={faUserCircle}
        size="3x"
        className={style.Form__icon}
    />;
    const icon_copyRights = <FontAwesomeIcon icon={faCopyright} />;

    // TODO Extraer a un componente reusable
    // const spinner = <FontAwesomeIcon
    //     icon={faCircleNotch}
    //     spin
    // />

    const formSchema = Yup.object().shape({
        email: Yup.string()
            .required("Campo requerido")
            .email('Correo no valido'),
        password: Yup.string()
            .required("Campo requerido")
    })

    return (
        <div className={`${style.container} ${style.container_position}`}>
            <div className={`${style.container__FormContainer} ${style.container__FormContainer_position}`}>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                        save: false
                    }}
                    validationSchema={formSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        dispatch(login(values.email, values.password));
                        setSubmitting(false);
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
                                <div className={`${style.Form__content}`}>
                                    <Field
                                        id="email"
                                        name="email"
                                        type="text"
                                        required
                                        disabled={loginFetching}
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
                                        disabled={loginFetching}
                                        className={` ${style.Form__input} ${style.Form__input_event} `}
                                    />
                                    <label htmlFor="password" className={`${style.Form_label}`}>Contraseña</label>
                                </div>
                                <ErrorMessage name="password" render={(msg) => <div className={`${style.ErrroMessage}`}>{msg}</div>} />
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
                                disabled={loginFetching}
                                className={style.Form__button}
                            >
                                Iniciar Sesión
                            </button>
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
