import "./InputField.scss"

function InputField({ label, placeholder, value, name }) {
    return (
        <>
            <div className="input-field">
                <h3 className="input-field__label">{label}</h3>
                <input className="input-field__value" value={value} placeholder={placeholder} name={name}/>
            </div>
        </>
    );
}

export default InputField;
