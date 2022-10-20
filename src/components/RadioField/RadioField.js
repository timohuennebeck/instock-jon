import "./RadioField.scss";

function RadioField({ label, placeholder, value, name, errors, type }) {
    const isError = errors.indexOf(name) > -1;

    return (
        <>
            <div className="radio-field">
                <h3 className="radio-field__label">{label}</h3>
                <div className='radio-field__status'>
                    <div className='radio-field__status-container'>
                        <input
                            className="radio-field__value"
                            value={value}
                            placeholder={placeholder}
                            name={name}
                            type={type}
                        />
                        <p className='radio-field__status-text'>In stock</p>
                    </div>
                    <div className='radio-field__status-container'>
                        <input
                            className='radio-field__status-radio'
                            type='radio'
                            name='status'
                            errors={errors}
                        />
                        <p className='radio-field__status-text'>Out of stock</p>
                    </div>
                </div>
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

export default RadioField;
