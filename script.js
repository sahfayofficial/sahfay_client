// Simulating the file list from the "data" folder with different variations of the same file
const files = [
  { name: "beautymad", path: "data/beautymad.html" }
];

// Function to search files and show results in a modal
function searchFiles() {
  const query = document.getElementById("searchBar").value.toLowerCase().trim();
  const resultsContainer = document.getElementById("results");
  const errorMessage = document.getElementById("error-message");

  // Clear previous results and error message
  resultsContainer.innerHTML = "";
  errorMessage.textContent = "";

  // Check if query is empty
  if (!query) {
    errorMessage.textContent = "Please enter a search term.";
    $('#resultsModal').modal('show');  // Show the modal with the error message
    return;
  }

  // Filter files based on the query (partial or fuzzy matching)
  const results = files.filter(file => file.name.toLowerCase().includes(query));

  if (results.length > 0) {
    results.forEach(file => {
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.textContent = file.name;
      link.href = file.path;
      link.target = "_blank";
      listItem.appendChild(link);
      resultsContainer.appendChild(listItem);
    });
  } else {
    errorMessage.textContent = "No matching files found.";
  }

  // Show the modal with results
  $('#resultsModal').modal('show');
}
