//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('input[type="button"]');
    const colorSelect = document.getElementById("colorSelect");

    button.addEventListener("click", function () {
        const selectedIndex = colorSelect.selectedIndex;
        if (selectedIndex !== -1) {
            colorSelect.remove(selectedIndex);
        } else {
            alert("No item selected to remove.");
        }
    });
});
