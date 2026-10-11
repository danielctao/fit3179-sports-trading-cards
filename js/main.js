// =====================================================
// VISUALISATION 1
// Australian football vs rugby league participation
// =====================================================

vegaEmbed(
  "#vis1",
  "json/v01_choropleth.json",
  {
    actions: false,
    renderer: "svg"
  }
)
  .then(function (result) {
    console.log("Visualisation 1 loaded successfully.");
  })
  .catch(function (error) {
    console.error(
      "Error loading Visualisation 1:",
      error
    );
  });