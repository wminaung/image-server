const imageTag = document.querySelector(".imageFromDigitalOcean");

const apiUrlFromLs = `http://localhost:3001`;
const uploadFile = async () => {
  const formData = new FormData();
  const inputTag = document.querySelector(".input");
  const files = [...inputTag.files];
  files.forEach((file) => formData.append("images", file));
  const response = await fetch(`${apiUrlFromLs}/uploadFile`, {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  console.log(data, "data");
};

const fetchData = async () => {
  if (apiUrlFromLs) {
    console.log("yes");
  } else {
    window.location.href = "/api";
  }
};

fetchData();
