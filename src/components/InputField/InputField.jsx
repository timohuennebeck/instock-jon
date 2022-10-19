import "./InputField.scss"

function InputField({ label, placeholder, value }) {
    return (
        <>
            <div className="input-field">
                <label className="input-field__label">{label}</label>
                <input className="input-field__value" value={value} placeholder={placeholder} />
            </div>
        </>
    );
}

export default InputField;
