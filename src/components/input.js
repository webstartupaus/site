const Input = ({ type, name, label, onValidate, required }) => {
    let html;

    if (type === 'textarea') {
        html = <textarea name={name} onChange={onValidate} onBlur={onValidate} required={required}></textarea>
    }
    else {
        html = <input type={type} name={name} onChange={onValidate} onBlur={onValidate} required={required} />
    }

    return (
        <div className="frm-grp">
            <label>
                <span>{label}</span>
                {html}
            </label>
        </div>
    );
}

export default Input;