// UI Elements Array
let uiElements = [];

// Form submission handler
document.getElementById("mod-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("mod-name").value;
  const category = document.getElementById("mod-category").value;
  const author = document.getElementById("mod-author").value;
  const code = document.getElementById("mod-code").value;
  const ui = JSON.stringify(uiElements, null, 2); // Generated UI JSON
  const source = document.getElementById("mod-source").value;
  const donation = document.getElementById("mod-donation").value;

  const mod = {
    data: {
      name,
    },
    category,
    info: {
      source: source || undefined,
      creator: author,
      donation: donation || undefined,
    },
    UI: JSON.parse(ui),
    subtitle: `(data) => \`Path: ${'${data.path}'}\``,
    compatibility: ["Any"],
    run: code,
  };

  // Generate JavaScript file content
  const fileContent = `module.exports = ${JSON.stringify(mod, null, 2)};`;
  const blob = new Blob([fileContent], { type: "application/javascript" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${name.replace(/\s+/g, "_")}_mod.js`;
  link.click();
});

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

// Update UI preview
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

  // Also update the JSON field in the form
  document.getElementById("mod-ui").value = JSON.stringify(uiElements, null, 2);
}