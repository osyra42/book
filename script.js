/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

function loadChapter(fileName) {
    var mainDiv = document.getElementById("main");

    // Fetch the content of the specified file
    fetch(fileName)
        .then(response => response.text())
        .then(text => {
            // Create a <pre> element
            var preElement = document.createElement("pre");
            // Set the content of the <pre> element to the text content of the file
            preElement.textContent = text;
            // Clear existing content in the #main div
            mainDiv.innerHTML = '';
            // Append the <pre> element to the #main div
            mainDiv.appendChild(preElement);
        })
        .catch(error => console.error('Error fetching chapter:', error));
}
