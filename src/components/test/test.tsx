import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, selectTestValue, selectTestUser, selectTestFetching, selectTestError, login } from '../../redux/features/testSlice';

export default function Test() {
  const testValue = useSelector(selectTestValue);
  const testFetching = useSelector(selectTestFetching);
  const testUser = useSelector(selectTestUser);
  const testError = useSelector(selectTestError);

  const dispatch = useDispatch();
  // console.log('testUser:', testUser);
  const email = 'robe@gmail.com';
  const password = 'abcdAtomandoe ncuent41';
  return (
    <div>
      {/* {testValue}
      <button
        onClick={() => dispatch(increment())}
      >
        incrementar
      </button>
      <br /> */}
      <p>Email: {email}</p>
      <p>Contraseña: {password}</p>
      <button
        onClick={() => dispatch(login(email, password))}
      >
        login
      </button>
      {testFetching && (
        <p>Cargando...</p>
      )}
      {testUser && (
        <div>
          <p>Nombre: {testUser.name}</p>
          <p>Apellidos: {testUser.lastName}</p>
          <p>Email: {testUser.email}</p>
          <p>Rol: {testUser.role}</p>
        </div>
      )}
      {testError && (
        <p>Error: {testError.message}</p>
      )}
    </div>
  )
}
