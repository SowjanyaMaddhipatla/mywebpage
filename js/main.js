document.addEventListener("DOMContentLoaded", () => {
    // Log initial page view
    logEvent("view", document.body);

    // Function to log events
    function logEvent(eventType, target) {
        const timestamp = new Date().toISOString();
        let objectType = "unknown";

        if (target.tagName) {
            const tag = target.tagName.toLowerCase();
            if (tag === "img") objectType = "image";
            else if (tag === "a") objectType = "link";
            else if (tag === "p" || tag === "h1" || tag === "h2" || tag === "h3" || tag === "h4") objectType = "text";
            else if (tag === "ul" || tag === "li") objectType = "list";
            else if (tag === "button") objectType = "button";
            else objectType = tag;
        }

        console.log(`${timestamp}, ${eventType}, ${objectType}`);
    }

    // Capture all click events
    document.addEventListener("click", (e) => {
        logEvent("click", e.target);
    });
});
