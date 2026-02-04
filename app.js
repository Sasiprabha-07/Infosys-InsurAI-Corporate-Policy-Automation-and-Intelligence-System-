function login() {
    let u = document.getElementById("username").value;
    let p = document.getElementById("password").value;

    if(u === "admin" && p === "1234") {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("msg").innerText = "Invalid Login!";
    }
}

function loadPolicies() {
    document.getElementById("policyList").innerHTML = `
        <h3>Policies</h3>
        <ul>
            <li>Health Insurance - ₹5,00,000</li>
            <li>Life Insurance - ₹10,00,000</li>
            <li>Vehicle Insurance - ₹3,00,000</li>
        </ul>
    `;
}

function logout() {
    window.location.href = "login.html";
}
