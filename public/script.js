const imageTag = document.querySelector(".imageFromDigitalOcean");
const apiUrlFromLs = `http://localhost:3001`;
const btnTag = document.getElementById("myBtn");
const fileTag = document.getElementById("myFile");

btnTag.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData();

  formData.set("foodman", fileTag.files[0]);
  const response = await fetch(`${apiUrlFromLs}/foodman`, {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    const data = await response.json();
    console.log({ data });
  }
});
