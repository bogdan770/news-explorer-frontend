import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import FormField from '../FormField/FormField';
import { useFormWithValid } from '../../hooks/useFormWithValid';

function Login(props) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValid();

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmitLogin({ values, resetForm });
  }

  return (
    <PopupWithForm
      header="Sign in"
      name="login"
      buttonTitle="Sign in"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      footer="Sign up"
      onOverlayClick={props.onOverlayClick}
      onModalClick={props.onModalClick}
      onRegisterClick={props.onRegisterClick}
      isValid={isValid}
    >
      <FormField
        label="Email"
        name="email"
        placeholder="Enter email"
        value={values.email || ''}
        onChange={(e) => handleChange(e)}
        error={errors.email}
      ></FormField>
      <FormField
        label="Password"
        name="password"
        placeholder="Enter password"
        value={values.password || ''}
        onChange={(e) => handleChange(e)}
        minLength="3"
        error={errors.password}
      ></FormField>
    </PopupWithForm>
  );
}

export default Login;
