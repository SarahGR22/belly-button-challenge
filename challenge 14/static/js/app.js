// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
   let metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number
    let resultArray = metadata.filter(sampleObj => sampleObj.id === sample);  // triple = to prevent other null values with double
    let result = resultArray[0];

   // Line of code above explained
   //object represents each individual object in the metadata array as the filter method iterates over it.
   //object.id accesses the id property of the current object.
   //sample is a variable that holds the sample number you are looking for.
   //The expression object.id == sample checks if the id of the current object is equal to the value of sample.


    // Use d3 to select the panel with id of `#sample-metadata`
   let panel = d3.select('#sample-metadata');

  

    // Use `.html("") to clear any existing metadata
    panel.html("");

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    metadata.forEach(item =>{
      metadata.append('option').attr('value',item).text(item)
    })
   
  });
}

//Reference activity
  //  // Default trace for the country data
  // countries = Object.keys(country_data)
  //// Build option list
  // seltag = d3.select('#selDataset')
  // seltag.html('')

  //countries.forEach(item => {
  //seltag.append('option').attr('value', item).text(item)
  //   })



// function to build both charts
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
	    title: "Bacteria Cultures Per Sample",
	    margin: { t: 30 },
	    hovermode: "closest",
	    xaxis: { title: "OTU ID" },
	    yaxis: { title: "Number of Bacteria" }
	};
	
	let bubbleData = [{
	    x: otu_ids,                // x-coordinate OTU ID
	    y: sample_values,          //  y-coordinate is how many were found in sample
	    text: otu_labels,          
	    mode: "markers",           // dots not lines
	    marker: {
	        size: sample_values,   // Bigger populations = bigger bubbles
	        color: otu_ids,        // Different species = different colors
	        colorscale: "Earth"    // Use the "Earth" color palette
	    }
	}];
	
	Plotly.newPlot("bubble", bubbleData, bubbleLayout);





  //  let bubblechart= {
  //   x: otu_ids,
  //   y: sample_values,
  //   text: otu_labels,
  //   type: 'bubble',
  //   marker:{
  //     size:sample_values,
  //     color : otu_ids,
  //   }

  //  };

  //  //trace?

   //Create a bubble chart that displays each sample.
   //Use otu_ids for the x values.
   //Use sample_values for the y values.
   //Use sample_values for the marker size.
   //Use otu_ids for the marker colors.
  //Use otu_labels for the text values.  


    // Render the Bubble Chart
    plotly.newPlot("bubble");


    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    otu_ids = 
    sample_values = 
    
    

    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    let barchart = {
      x: otu_ids,             //Use sample_values as the values for the bar chart. aka y-axis
      y: sample_values,       //Use otu_ids as the labels for the bar chart. aka x-axis
      text:  ,
      type: 'bar',
      orientation: 'h'
    };

    let barData = [barchart];


   //Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
   //Use otu_labels as the hovertext for the chart.

    // Render the Bar Chart
    plotly.newPlot("plot", );

  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
   let names = data.name;

    // Use d3 to select the dropdown with id of `#selDataset`
    let dropdown = d3.select('#selDataset');

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.


    // Get the first sample from the list


    // Build charts and metadata panel with the first sample

  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected

}

// Initialize the dashboard
init();
