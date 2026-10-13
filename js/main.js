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


// =====================================================
// VISUALISATION 2
// AFL Footy Stars category growth
// =====================================================

vegaEmbed(
  "#vis2",
  "json/v02_category_growth.json",
  {
    actions: false,
    renderer: "svg"
  }
)
  .then(function (result) {
    console.log("Visualisation 2 loaded successfully.");
  })
  .catch(function (error) {
    console.error(
      "Error loading Visualisation 2:",
      error
    );
  });


// =====================================================
// VISUALISATION 3
// AFL Footy Stars category-family heatmap
// =====================================================

vegaEmbed(
  "#vis3",
  "json/v03_category_heatmap.json",
  {
    actions: false,
    renderer: "svg"
  }
)
  .then(function (result) {
    console.log("Visualisation 3 loaded successfully.");
  })
  .catch(function (error) {
    console.error(
      "Error loading Visualisation 3:",
      error
    );
  });


// =====================================================
// VISUALISATION 4
// 2026 AFL Footy Stars collection hierarchy
// =====================================================

vegaEmbed(
  "#vis4",
  "json/v04_collection_sunburst.json",
  {
    actions: false,
    renderer: "svg"
  }
)
  .then(function (result) {
    console.log("Visualisation 4 loaded successfully.");
  })
  .catch(function (error) {
    console.error(
      "Error loading Visualisation 4:",
      error
    );
  });


// =====================================================
// VISUALISATION 5
// Category evolution and scarcity Sankey
// =====================================================

vegaEmbed(
  "#vis5",
  "json/v05_sankey.json",
  {
    actions: false,
    renderer: "svg"
  }
)
  .then(function (result) {
    console.log("Visualisation 5 loaded successfully.");
  })
  .catch(function (error) {
    console.error(
      "Error loading Visualisation 5:",
      error
    );
  });


// =====================================================
// VISUALISATION 6
// Player representation by AFL position
// =====================================================

vegaEmbed(
  "#vis6",
  "json/v06_player_position_boxplot.json",
  {
    actions: false,
    renderer: "svg"
  }
)
  .then(function (result) {
    console.log("Visualisation 6 loaded successfully.");
  })
  .catch(function (error) {
    console.error(
      "Error loading Visualisation 6:",
      error
    );
  });