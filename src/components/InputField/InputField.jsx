import "./InputField.scss";

function InputField({ label, placeholder, value, name, errors, type }) {
    const isError = errors.indexOf(name) > -1;

    return (
        <>
            <div className="input-field">
                <h3 className="input-field__label">{label}</h3>
                <input
                    className="input-field__value"
                    value={value}
                    placeholder={placeholder}
                    name={name}
                    type={type}
                />
                {isError && (
                    <>
                        <div className="error">
                            <p className="error__sign p-small">!</p>
                            <p className="error__message p-small">This field is required</p>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default InputField;
