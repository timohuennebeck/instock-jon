import "./SelectCategoryField.scss";

function SelectCategoryField({ label, placeholder, value, name, errors, type, onChange }) {
    const isError = errors.indexOf(name) > -1;

    return (
        <>
            <div className="select-field">
                <h3 className="select-field__label">{label}</h3>
                <select
                    className="select-field__value"
                    value={value}
                    placeholder={placeholder}
                    name={name}
                    type={type}
                    onChange={onChange}
                >
                    <option type="text" value=''>Please Select</option>
                    <option type='text' value='Electronics'>Electronics</option>
                    <option type='text' value='Gear'>Gear</option>
                    <option type='text' value='Apparel'>Apparel</option>
                    <option type='text' value='Accessories'>Accessories</option>
                    <option type='text' value='Health'>Health</option>
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

export default SelectCategoryField;
