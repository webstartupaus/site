const helper = {
    seo: (meta) => {
        document.title = meta.title;
        document.querySelector('meta[name="description"]').setAttribute('content', meta.description);
        const link = window.location;
        document.querySelector('link[rel="canonical"]').setAttribute('href', link);
    }
}

export default helper;