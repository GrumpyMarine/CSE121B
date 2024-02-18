/* W06: President Information */

async function getPresident(){
var presidentId = document.getElementById('presidentId').value;
try {
        // Fetch president data from the sample API
        var response = await fetch(`https://api.sampleapis.com/presidents/presidents/${presidentId}`);
        var president = await response.json();

        // Display the information
        var resultDiv = document.getElementById('result');

        if (presidentId) {
          resultDiv.innerHTML = `
            <p><strong>President: ${president.name}</strong></p>
            <p>Years in Office: ${president.yearsInOffice}</p>
          `;
        } else {
          resultDiv.innerHTML = '<p>President not found. Please check the ID and try again.</p>';
        }
    } catch (error) {
        console.error('President not found.', error);
    };
};  
getPresident
