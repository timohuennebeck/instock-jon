import "./InputFieldNoError.scss";

function InputFieldNoError({ label, placeholder, value, name, onChange }) {
    return (
        <>
            <div className="input-field">
                <h3 className="input-field__label">{label}</h3>
                <input
                    className="input-field__value"
                    value={value}
                    placeholder={placeholder}
                    name={name}
                    onChange={onChange}
                />
            </div>
        </>
    );
}

export default InputFieldNoError;
