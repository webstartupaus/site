import { useState } from "react";

const Form = ({ button, inputs }) => {
    const [formVals, setFormVals] = useState(
        { name: '', email: '', message: '' }
    )

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    function netlifySubmit(e) {
        e.preventDefault();

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', ...this.state })
        })
            .then(() => console.log('success'))
            .catch((e) => console.log(e));
    }

    function validate(e, pattern) {
        let input = e.currentTarget;
        const val = input.value;
        const name = input.name;

        if (input.attributes.required && val.length <= 0) return input.classList.add('error');

        if (pattern && !val.match(pattern)) return input.classList.add('error');

        input.classList.remove('error');
        let form = { ...formVals };
        form[name] = val;
        setFormVals(form);
    }

    return (
        <form onSubmit={netlifySubmit}>
            {inputs.map((input, i) =>
                <Input onValidate={e => validate(e, input.pattern)} val={{ ...input }} key={i} />)
            }
            <button type="submit">{button}</button>
        </form>
    );
}

const Input = ({ onValidate, val: { tag, type, name, required } }) => {
    let html;

    switch (tag) {
        case 'textarea':
            html = <textarea name={name} onChange={onValidate} onBlur={onValidate} required={required}></textarea>
            break;
        case 'input':
            html = <input type={type} name={name} onChange={onValidate} onBlur={onValidate} required={required} />
            break;
        default:
            return;
    }

    return (
        <div className="frm-grp">
            <label>
                <span>{name}</span>
                {html}
            </label>
        </div>
    );
}

export default Form;