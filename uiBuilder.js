let uiElements = [];

// Add UI Element handler
document.getElementById("add-ui-element").addEventListener("click", () => {
  const elementType = document.getElementById("ui-element-type").value;
  const elementName = document.getElementById("ui-element-name").value;
  const storeAs = document.getElementById("ui-element-store-as").value;

  if (!elementName || !storeAs) {
    alert("Please fill in all fields!");
    return;
  }

  const newElement = {
    element: elementType,
    name: elementName,
    storeAs,
  };

  uiElements.push(newElement);
  updateUIPreview();
});

// Update UI preview dynamically
function updateUIPreview() {
  const uiPreviewContainer = document.getElementById("ui-preview-container");
  uiPreviewContainer.innerHTML = ""; // Clear existing preview

  uiElements.forEach((element) => {
    const label = document.createElement("label");
    label.textContent = element.name;

    let input;
    if (element.element === "input") {
      input = document.createElement("input");
      input.type = "text";
      input.placeholder = `Enter ${element.name}`;
    } else if (element.element === "textarea") {
      input = document.createElement("textarea");
      input.rows = 3;
      input.placeholder = `Enter ${element.name}`;
    } else if (element.element === "checkbox") {
      input = document.createElement("input");
      input.type = "checkbox";
    }

    label.appendChild(input);
    uiPreviewContainer.appendChild(label);
  });

  // Update the JSON UI field in the main form
  document.getElementById("mod-ui").value = JSON.stringify(uiElements, null, 2);
}
