let selectedFiles = [];

// Event listener for file input
document.getElementById("fileInput").addEventListener("change", (event) => {
  selectedFiles = Array.from(event.target.files);
  updateFileList();
});

// Update the file preview list
function updateFileList() {
  const fileListElement = document.getElementById("fileList");
  fileListElement.innerHTML = '';  // Clear existing list

  selectedFiles.forEach(file => {
    const fileItem = document.createElement('div');
    fileItem.classList.add('file-item');

    const img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    img.width = 100;  // Adjust image size for preview
    fileItem.appendChild(img);

    const fileName = document.createElement('p');
    fileName.innerText = file.name;
    fileItem.appendChild(fileName);

    fileListElement.appendChild(fileItem);
  });
}

// Send files to the API Gateway endpoint (for processing)
async function sendFilesToApi() {
  if (selectedFiles.length === 0) {
    alert('Please select images to upload.');
    return;
  }

  const statusElement = document.getElementById('status');
  statusElement.innerHTML = 'Sending files to API...';

  const formData = new FormData();
  selectedFiles.forEach(file => formData.append('files', file));

  try {
    // Update the endpoint URL with '/convert' if required
    const response = await fetch('https://2h9sgaaum3.execute-api.us-east-1.amazonaws.com/prod/convert', {
      method: 'POST',
      body: formData,
    });

    // Check for a successful response
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        statusElement.innerHTML = 'PDF Created Successfully!';
      } else {
        statusElement.innerHTML = 'Error generating PDF: ' + data.message;
      }
    } else {
      statusElement.innerHTML = 'Error: ' + response.statusText;
    }
  } catch (error) {
    statusElement.innerHTML = 'Error sending request!';
    console.error('Error:', error); // Log the error details for debugging
  }
}
