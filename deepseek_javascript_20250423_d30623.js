async function refreshPredictions() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/predictions');  //  ***CORRECTED URL***
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        fillTable(data);
    } catch (error) {
        console.error("Error fetching predictions:", error);
        alert("Error getting predictions. Please try again.");
    }
}