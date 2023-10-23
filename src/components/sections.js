const Section = ({ id, content }) => {
    let s = content[id];

    if (!s) return;

    return (
        <section id={id}>
            <div className={s.container}>
                {s.title ? <h2>{s.title}</h2> : ''}
                {s.fn()}
            </div>
        </section>
    );
}

export default Section;