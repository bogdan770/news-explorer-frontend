function FormField(props) {
  return (
    <div className="form__field">
      <label className="form__label">{props.label}</label>
      <input
        className="form__input"
        name={props.name}
        type={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        required
        minLength={props.minlength || ""}
        maxLength={props.maxlength || ""}
        autoComplete=""
      />
      {props.error && (
        <span
        className="form__input-error form__input-error_active"
        id="formName-error"
        >
          {props.error}
         </span>
      )}
    </div>
  );
}

export default FormField;
