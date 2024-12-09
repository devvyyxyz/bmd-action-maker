// Helper function to generate the mod object and its content
function generateModContent(isPreview = false) {
  const name = document.getElementById("mod-name").value;
  const category = document.getElementById("mod-category").value;
  const author = document.getElementById("mod-author").value;
  const code = document.getElementById("mod-code").value;
  const ui = document.getElementById("mod-ui").value; // UI JSON
  const source = document.getElementById("mod-source").value;
  const donation = document.getElementById("mod-donation").value;

  const mod = {
    data: { name },
    category,
    info: {
      source: source || undefined,
      creator: author,
      donation: donation || undefined,
    },
    UI: JSON.parse(ui),  // UI is still JSON parsed for correct format
    subtitle: `(data) => \`Path: ${'${data.path}'}\``,
    compatibility: ["Any"],
    run: code,
  };

  // Manually generate JavaScript-like object format (without quotes around keys)
  const fileContent = `
module.exports = {
  data: {
    name: "${mod.data.name}", //Mods name
  },
  category: "${mod.category}", //Category that will group actions together
  info: {
    source: "${mod.info.source}",
    creator: "${mod.info.creator}", //Creators Name
    donation: "${mod.info.donation}"
  },
  UI: ${JSON.stringify(mod.UI, null, 2)},
  subtitle: ${mod.subtitle},
  compatibility: ${JSON.stringify(mod.compatibility)},

  //Script
  ${mod.run}
};
  `;

  return fileContent;
}

// Handle form submission for mod generation
document.getElementById("mod-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("mod-name").value;

  // Generate file content for the mod
  const fileContent = generateModContent();

  // Trigger download when generating the mod
  const blob = new Blob([fileContent], { type: "application/javascript" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${name.replace(/\s+/g, "_")}_MOD.js`;
  link.click();
});

// Handle Preview Mod button click
document.getElementById("preview-mod").addEventListener("click", () => {
  // Generate file content for preview
  const fileContent = generateModContent(true);

  // Get the preview area and set the content
  const previewArea = document.getElementById("mod-preview-area").querySelector("code");
  previewArea.textContent = fileContent;

  // Reapply Prism.js syntax highlighting to the updated content
  Prism.highlightElement(previewArea);
});
