const apiUrlFromLs = `http://150.95.82.174:3001`;
const btnTag = document.getElementById("myBtn");
const btnTag2 = document.getElementById("myBtn2");
const fileTag = document.getElementById("myFile");
const fileTag2 = document.getElementById("myFile2");

btnTag.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData();

  formData.set("foodman", fileTag.files[0]);
  const response = await fetch(`${apiUrlFromLs}/images/foodman`, {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    const data = await response.json();
    console.log({ data });
  }
});

// profile

btnTag2.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData();

  formData.set("profile", fileTag2.files[0]);
  const response = await fetch(`${apiUrlFromLs}/images/profile`, {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    const data = await response.json();
    console.log({ data });
  }
});
