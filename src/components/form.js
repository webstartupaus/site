import { useState, useEffect } from "react";

const Form = ({ button, inputs, name }) => {
    const [formVals, setFormVals] = useState({});

    function netlifySubmit(e) {
        e.preventDefault();

        let button = e.currentTarget.querySelector('button');
        button.innerHTML = 'sending';
        button.disabled = true;

        const myForm = e.target;
        const formData = new FormData(myForm);

        console.log(new URLSearchParams(formData).toString());
        // return;

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => {
                button.innerHTML = 'sent';
                myForm.reset();
                setTimeout(() => {
                    button.innerHTML = 'send'
                    button.disabled = false;
                    setFormVals({});
                }, 2000);
            })
            .catch((e) => {
                button.innerHTML = 'send'
                button.disabled = false;
                console.log(e);
            });
    }

    function validate(e, pattern) {
        let input = e.currentTarget;
        const val = input.value;
        const name = input.name;

        if (input.attributes.required && val.length <= 0) return input.classList.add('error');

        if (pattern && !val.match(pattern)) return input.classList.add('error');

        input.classList.remove('error');
        let vals = { ...formVals };
        vals[name] = val;
        setFormVals(vals);
    }

    useEffect(() => {
        let newFormVals = {};
        inputs.map(input => newFormVals[input.name] = '');
        setFormVals(newFormVals);
    }, [inputs]);

    return (
        <form onSubmit={netlifySubmit} netlify-honeypot="bot-field" data-netlify="true">
            {inputs.map((input, i) =>
                <Input onValidate={e => validate(e, input.pattern)} val={{ ...input }} key={i} />
            )}
            <button type="submit">{button}</button>
        </form>
    );
}

const Input = ({ onValidate, val: { tag, type, name, value, required }, label = true }) => {
    let html;

    switch (tag) {
        case 'textarea':
            html = <textarea name={name} rows='5' onChange={onValidate} onBlur={onValidate} required={required}></textarea>;
            break;
        case 'input':
            html = <input type={type} name={name} onChange={onValidate} onBlur={onValidate} required={required} />;
            break;
        case 'hidden':
            html = <input type="hidden" name={name} defaultValue={value} />;
            label = false;
            break;
        default:
            return;
    }

    if (label) {
        html = <label>
            <span>{name}</span>
            {html}
        </label>
    }

    return (
        <div className="frm-grp">
            {html}
        </div>
    );
}

export default Form;