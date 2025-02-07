document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("dashboardChart").getContext("2d");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["January", "February", "March", "April", "May","June","July","August","September","October","November","December"],
            datasets: [{
                label: "Revenue",
                data: [12000, 19000, 3000, 5000, 20000, 10000, 13000, 10000, 5000, 15000, 12000, 18000],
                backgroundColor: ["#a855f7", "#2563eb", "#f97316", "#34d399", "#f43f5e"]
            }]
        }
    });

    const tableRows = document.querySelectorAll("tbody tr");
    tableRows.forEach(row => {
        row.addEventListener("click", () => {
            alert(`User: ${row.children[0].textContent}`);
        });
    });
});
