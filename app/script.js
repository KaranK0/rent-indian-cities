function send_formdata() {

   const formElem = document.getElementById("dataform");
   const predictionResultElement = document.getElementById("prediction-result");
   const loadingIndicator = document.getElementById("loading-indicator");

   formElem.onsubmit = async (e) => {
      e.preventDefault();

      try {
         const formData = new FormData(formElem);
         const jsonData = {
            Inputs: {
               input1: [
                  {
                     seller_type: formData.get("seller_type"),
                     bedroom: parseInt(formData.get("bedroom")),
                     layout_type: formData.get("layout_type"),
                     property_type: formData.get("property_type"),
                     locality: formData.get("locality"),
                     area: parseInt(formData.get("area")),
                     furnish_type: formData.get("furnish_type"),
                     bathroom: parseInt(formData.get("bathroom")),
                     city: formData.get("city")
                  }
               ]
            },
            GlobalParameters: {}
         };

         // Show loading indicator
         predictionResultElement.querySelector(".prediction-placeholder").textContent = "";
         loadingIndicator.style.display = "block";

         const api_key = 'sorry dear'
         if(api_key='') {
         throw new Error("A key should be provided to invoke the endpoint")
         }

         const response = await fetch('http://065f9686-c4ad-4160-a03a-bd4c961095b4.southeastasia.azurecontainer.io/score', {
            method: "POST",
            headers: { "Content-Type": "application/json" , 'Authorization':('Bearer '+ api_key)},
            body: JSON.stringify(jsonData)
         });

         if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
         }

         const result = await response.json();
         const predictedRent = result.Results.output1[0].HouseRentPrediction;

         // Display predicted rent
         predictionResultElement.innerHTML = `Predicted house rent: ${predictedRent}`;
         loadingIndicator.style.display = "none";

      } catch (error) {
         console.error("Error:", error);
         alert("Failed to get prediction. Please check your input and try again.");
      }
   };
}
















/*    var citeh = document.getElementById("city").value;
   var localiteh = document.getElementById("locality").value;
   var sellah_type = document.getElementById("seller_type").value;
   var behroom = document.getElementById("bedroom").value;
   var bahroom = document.getElementById("bathroom").value;
   var lehout_type = document.getElementById("layout_type").value;
   var propertih_type = document.getElementById("property_type").value;
   var areah = document.getElementById("area").value;
   var furnih_type = document.getElementById("furnish_type").value;

   if (citeh == '' || localiteh == '' || sellah_type == '' || behroom == '' || bahroom == '' || lehout_type == '' || propertih_type == '' || areah == '' || furnih_type == '') {
      alert("Enter each details correctly");
   } */
/*    let formData = new FormData([data_form]);
   formElem.onsubmit = async (e) => {
      e.preventDefault();

      let response = await fetch('http://065f9686-c4ad-4160-a03a-bd4c961095b4.southeastasia.azurecontainer.io/score', {
         method: 'POST',
         body: new FormData(formElem)
      });
      let result = await response.json();

      alert(result.output);
   }
} */

/* // Map your choices to your option value
var lookup = {
    'Option 1': ['Option 1 - Choice 1', 'Option 1 - Choice 2', 'Option 1 - Choice 3'],
    'Option 2': ['Option 2 - Choice 1', 'Option 2 - Choice 2'],
    'Option 3': ['Option 3 - Choice 1'],
 };
 
 // When an option is changed, search the above for matching choices
 $('#options').on('change', function() {
    // Set selected option as variable
    var selectValue = $(this).val();
 
    // Empty the target field
    $('#choices').empty();
    
    // For each chocie in the selected option
    for (i = 0; i < lookup[selectValue].length; i++) {
       // Output choice in the target field
       $('#choices').append("<option value='" + lookup[selectValue][i] + "'>" + lookup[selectValue][i] + "</option>");
    }
 }); */

/*    function submit_form() {
      alert("Submitted successfully");
   }
   function create() {
      window.location = "index.html";
   } */