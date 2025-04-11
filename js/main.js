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


function analyzeText() {
    const text = document.getElementById("textInput").value;
    const output = document.getElementById("output");

    // Basic counts
    const totalSize = text.length;
    const letters = (text.match(/[a-zA-Z]/g) || []).length;
    const words = (text.match(/\b\w+\b/g) || []).length;
    const spaces = (text.match(/ /g) || []).length;
    const newlines = (text.match(/\n/g) || []).length;
    const specialSymbols = (text.match(/[^a-zA-Z0-9\s]/g) || []).length;

    // Tokenize
    const tokens = text.toLowerCase().match(/\b\w+\b/g) || [];

    // Pronouns
    const pronouns = [
        "i", "you", "he", "she", "it", "we", "they",
        "me", "him", "her", "us", "them", "my", "your", "his",
        "its", "our", "their", "mine", "yours", "hers", "ours", "theirs"
    ];
    const pronounCounts = {};
    pronouns.forEach(p => pronounCounts[p] = 0);
    tokens.forEach(t => {
        if (pronounCounts.hasOwnProperty(t)) pronounCounts[t]++;
    });

    // Prepositions
    const prepositions = [
        "in", "on", "at", "by", "with", "about", "against", "between", "into",
        "through", "during", "before", "after", "above", "below", "to", "from",
        "up", "down", "over", "under", "off", "of", "for"
    ];
    const prepositionCounts = {};
    prepositions.forEach(p => prepositionCounts[p] = 0);
    tokens.forEach(t => {
        if (prepositionCounts.hasOwnProperty(t)) prepositionCounts[t]++;
    });

    // Indefinite articles
    const articleCounts = { "a": 0, "an": 0 };
    tokens.forEach(t => {
        if (articleCounts.hasOwnProperty(t)) articleCounts[t]++;
    });

    // Display results
    output.innerHTML = `
        <h2>Basic Counts</h2>
        <ul>
            <li><strong>Total Input Size (Characters):</strong> ${totalSize}</li>
            <li><strong>Letters:</strong> ${letters}</li>
            <li><strong>Words:</strong> ${words}</li>
            <li><strong>Spaces:</strong> ${spaces}</li>
            <li><strong>Newlines:</strong> ${newlines}</li>
            <li><strong>Special Symbols:</strong> ${specialSymbols}</li>
        </ul>

        <h2>Pronouns Count</h2>
        <ul>
            ${Object.entries(pronounCounts).map(([k, v]) => `<li>${k}: ${v}</li>`).join("")}
        </ul>

        <h2>Prepositions Count</h2>
        <ul>
            ${Object.entries(prepositionCounts).map(([k, v]) => `<li>${k}: ${v}</li>`).join("")}
        </ul>

        <h2>Indefinite Articles Count</h2>
        <ul>
            ${Object.entries(articleCounts).map(([k, v]) => `<li>${k}: ${v}</li>`).join("")}
        </ul>
    `;
}
