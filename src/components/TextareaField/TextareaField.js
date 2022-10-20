import "./TextareaField.scss";

function TextareaField({ label, placeholder, value, name, errors, type }) {
    const isError = errors.indexOf(name) > -1;

    return (
        <>
            <div className="textarea-field">
                <h3 className="textarea-field__label">{label}</h3>
                <textarea
                    className="textarea-field__value"
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

export default TextareaField;
