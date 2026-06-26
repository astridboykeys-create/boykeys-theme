// ======================================
// Boykeys
// app.js
// ======================================

const API_URL = "https://boykeys-api.vercel.app/api";

async function api(url, options = {}) {

    const response = await fetch(API_URL + url, {
        headers: {
            "Content-Type": "application/json"
        },
        ...options
    });

    return await response.json();

}

function showMessage(message) {

    alert(message);

}

function confirmDelete(message = "Weet je het zeker?") {

    return confirm(message);

}

function formatDate(date) {

    return new Date(date).toLocaleDateString("nl-NL");

}

function formatDateTime(date) {

    return new Date(date).toLocaleString("nl-NL");

}
