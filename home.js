const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwY2YwOTc4Y2RkZjAwMTU1ZDY3ZTIiLCJpYXQiOjE3NTIyMjM0OTgsImV4cCI6MTc1MzQzMzA5OH0.PIBvwcdJFDcqce5hOg3w4WNh2h6qDlWfJIEThIAZqwk";
const container = document.getElementById("product-container");
const loading = document.getElementById("loading");

fetch("https://striveschool-api.herokuapp.com/api/product/", {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwY2YwOTc4Y2RkZjAwMTU1ZDY3ZTIiLCJpYXQiOjE3NTIyMjM0OTgsImV4cCI6MTc1MzQzMzA5OH0.PIBvwcdJFDcqce5hOg3w4WNh2h6qDlWfJIEThIAZqwk",
  },
})
  .then((res) => res.json())
  .then((data) => {
    loading.style.display = "none";
    data.forEach((prod) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${prod.imageUrl}" width="100%" />
        <h3>${prod.name}</h3>
        <p>${prod.brand}</p>
        <p>€${prod.price}</p>
        <div class="card-buttons">
        <a href="details.html?id=${prod._id}" class="btn-link">Details</a>
        <a href="backoffice.html?id=${prod._id}" class="btn-link">Edit</a>
        </div>
      `;
      container.appendChild(card);
    });
  })
  .catch((err) => alert("Error loading products"));
