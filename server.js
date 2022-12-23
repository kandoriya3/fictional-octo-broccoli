const form = document.getElementById('upload-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const fileInput = document.querySelector('input[type="file"]');
  const file = fileInput.files[0];

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'vp7xbx5q');

  fetch('https://api.cloudinary.com/v1_1/dbb45rzoo/image/upload', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Use the data.secure_url property to display the uploaded photo on your website
    });
});
