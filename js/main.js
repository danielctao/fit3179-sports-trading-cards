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


// =====================================================
// VISUALISATION 7
// Proportional symbol map of participation
// =====================================================

vegaEmbed(
  "#vis7",
  "json/v07_proportional_symbol_map.json",
  {
    actions: false,
    renderer: "svg"
  }
)
  .then(function (result) {
    console.log("Visualisation 7 loaded successfully.");
  })
  .catch(function (error) {
    console.error(
      "Error loading Visualisation 7:",
      error
    );
  });


// =====================================================
// VISUALISATION 8
// Contiguous cartogram
// =====================================================

vegaEmbed(
  "#vis8",
  "json/v08_contiguous_cartogram_vega.json",
  {
    actions: false,
    renderer: "svg"
  }
)
  .then(function (result) {
    console.log("Visualisation 8 loaded successfully.");
  })
  .catch(function (error) {
    console.error(
      "Error loading Visualisation 8:",
      error
    );
  });


// =====================================================
// VISUALISATION 9
// Player Position × Card Category Family Chord Diagram
// =====================================================

vegaEmbed(
  "#vis9",
  "json/v09_position_category_chord.json",
  {
    actions: false,
    renderer: "svg"
  }
)
  .then(function (result) {
    console.log("Visualisation 9 loaded successfully.");
  })
  .catch(function (error) {
    console.error(
      "Error loading Visualisation 9:",
      error
    );
  });


// =====================================================
// VISUALISATION 10
// Connected-dot Plot
// =====================================================
vegaEmbed(
  "#vis10",
  "json/v10_category_family_dumbbell.json",
  {
    actions: false,
    renderer: "svg"
  }
)
.then(function () {
  console.log("Visualisation 10 loaded successfully.");
})
.catch(function (error) {
  console.error("Error loading Visualisation 10:", error);
});


// =====================================================
// VISUALISATION 11
// 2020 → 2026 Collection Evolution Slope Chart
// =====================================================

vegaEmbed(
  "#vis11",
  "json/v11_collection_evolution_slope.json",
  {
    actions: false,
    renderer: "svg"
  }
)
.then(function () {
  console.log("Visualisation 11 loaded successfully.");
})
.catch(function (error) {
  console.error("Error loading Visualisation 11:", error);
});