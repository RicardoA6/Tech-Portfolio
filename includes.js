function loadInclude(id, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to load ${file}`);
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(err => console.error(err));
}

// Load header & footer automatically
document.addEventListener("DOMContentLoaded", () => {
    loadInclude("header", "header.html");
    loadInclude("footer", "footer.html");
});