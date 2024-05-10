export default {
    port: 4321,
    public: "public",
    features: [
        // "compress",
        // "image",
        // "alpine",
        // "fontawesome",
        // "tailwind",
        // "htmx",
        // "sse",
        // "markdown",
        // "typescript",
        process.env.NODE_ENV !== "production" && "refresh",
        "template",
        "static",
    ]
};
