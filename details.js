const TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwY2YwOTc4Y2RkZjAwMTU1ZDY3ZTIiLCJpYXQiOjE3NTIyMjM0OTgsImV4cCI6MTc1MzQzMzA5OH0.PIBvwcdJFDcqce5hOg3w4WNh2h6qDlWfJIEThIAZqwk";
const params = new URLSearchParams(location.search);
const id = params.get("id");
const container = document.getElementById("product-detail");

fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwY2YwOTc4Y2RkZjAwMTU1ZDY3ZTIiLCJpYXQiOjE3NTIyMjM0OTgsImV4cCI6MTc1MzQzMzA5OH0.PIBvwcdJFDcqce5hOg3w4WNh2h6qDlWfJIEThIAZqwk"
}
})
  .then(res => res.json())
  .then(prod => {
    container.innerHTML = `
      <img src="${prod.imageUrl}" width="300px" />
      <h2>${prod.name}</h2>
      <p><strong>Brand:</strong> ${prod.brand}</p>
      <p><strong>Description:</strong> ${prod.description}</p>
      <p><strong>Price:</strong> €${prod.price}</p>
    `;
  });
