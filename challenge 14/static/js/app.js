// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    // Get the metadata field
    let metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number
    let resultArray = metadata.filter(sampleObj => sampleObj.id === sample);  // triple = needed to avoid errors 
    let result = resultArray[0];

    // Use d3 to select the panel with id of `#sample-metadata`
    let panel = d3.select('#sample-metadata');

    // Clear any existing metadata
    panel.html("");

    // Append new tags for each key-value in the filtered metadata
    Object.entries(result).forEach(([key, value]) => {
      panel.append('p').text(`${key}: ${value}`);
    });
  });
}

// Function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    // Get the samples field
    let samples = data.samples;

    // Filter the samples for the object with the desired sample number
    let filtersample = samples.filter(sampleObj => sampleObj.id === sample)[0];

    // Get the otu_ids, otu_labels, and sample_values
    let otu_ids = filtersample.otu_ids;
    let otu_labels = filtersample.otu_labels;
    let sample_values = filtersample.sample_values;

    // Build a Bubble Chart 
    let bubbleLayout = {
      title: "Bacteria Cultures Per Sample",     //title named on sample bubble chart
      margin: { t: 30 },
      xaxis: { title: "OTU ID" },
      yaxis: { title: "Number of Bacteria" }    
    };

    let bubbleData = [{
      x: otu_ids,                // x-coordinate OTU ID
      y: sample_values,          // y-coordinate is how many were found in sample
      text: otu_labels, 
      type: 'bar'         
      mode: "markers",       
      marker: {
        size: sample_values,  
        color: otu_ids,        
        colorscale: "Earth"   // color scale provided via tutor 
      }
    }];
    
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);
  
    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    // Don't forget to slice and reverse the input data appropriately
    let top10otu_ids = otu_ids.slice(0, 10).reverse();
    let top10otu_labels =  otu_labels.slice(0, 10).reverse();
    let top10sample_values = sample_values.slice(0, 10).reverse();


    // Build a Bar Chart layout 
    let barLayout = {
      title: 'Top 10 Bacteria Cultures Found',   //title named on sample bar chart
      margin: { t: 30 },
      xaxis: { title: 'Number of Bacteria' },
      yaxis: { title: 'OTU Ids' }
    };

    // Create a horizontal bar chart
    let barData = [{
      x: top10sample_values,        // Use sample_values as the values for the bar chart (y-axis)
      y: top10otu_ids,              // Use otu_ids as the labels for the bar chart (x-axis)
      text:top10otu_labels,         // Use otu_labels as the hovertext for the chart (text)
      type: 'bar',
      orientation: 'h'
    }];

    // Render the Bar Chart
    Plotly.newPlot("plot", barData, barLayout);
  });
}
// // Function to run on page load
// function init() {
//   d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

//     // Get the names field
//    let names = data.name;

//     // Use d3 to select the dropdown with id of `#selDataset`
//     let dropdown = d3.select('#selDataset');

//     // Use the list of sample names to populate the select options
//     // Hint: Inside a loop, you will need to use d3 to append a new
//     // option for each sample name.


//     // Get the first sample from the list


//     // Build charts and metadata panel with the first sample

//   });
// }

// // Function for event listener
// function optionChanged(newSample) {
//   // Build charts and metadata panel each time a new sample is selected

// }

// // Initialize the dashboard
// init();
