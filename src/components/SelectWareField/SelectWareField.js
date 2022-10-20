import "./SelectWareField.scss";

function SelectWareField({ label, placeholder, value, name, errors, type }) {
    const isError = errors.indexOf(name) > -1;

    return (
        <>
            <div className="selectware-field">
                <h3 className="selectware-field__label">{label}</h3>
                <select
                    className="selectware-field__value"
                    value={value}
                    placeholder={placeholder}
                    name={name}
                    type={type}
                >
                    <option type="text" value=''>Please Select</option>
                    <option type='text' value='Manhattan'>Manhattan</option>
                    <option type='text' value='Washington'>Washington</option>
                    <option type='text' value='Jersey'>Jersey</option>
                    <option type='text' value='San Fran'>San Fran</option>
                    <option type='text' value='Santa Monica'>Santa Monica</option>
                    <option type='text' value='Seattle'>Seattle</option>
                    <option type='text' value='Miami'>Miami</option>
                    <option type='text' value='Boston'>Boston</option>
                </select>
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

export default SelectWareField;