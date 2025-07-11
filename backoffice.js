const params = new URLSearchParams(location.search);
const id = params.get("id");
const form = document.getElementById("product-form");
const message = document.getElementById("message");

const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwY2YwOTc4Y2RkZjAwMTU1ZDY3ZTIiLCJpYXQiOjE3NTIyMjM0OTgsImV4cCI6MTc1MzQzMzA5OH0.PIBvwcdJFDcqce5hOg3w4WNh2h6qDlWfJIEThIAZqwk";

if (id) {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwY2YwOTc4Y2RkZjAwMTU1ZDY3ZTIiLCJpYXQiOjE3NTIyMjM0OTgsImV4cCI6MTc1MzQzMzA5OH0.PIBvwcdJFDcqce5hOg3w4WNh2h6qDlWfJIEThIAZqwk",
    },
  })
    .then((res) => res.json())
    .then((prod) => {
      document.getElementById("name").value = prod.name;
      document.getElementById("description").value = prod.description;
      document.getElementById("brand").value = prod.brand;
      document.getElementById("imageUrl").value = prod.imageUrl;
      document.getElementById("price").value = prod.price;
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const product = {
    name: form.name.value,
    description: form.description.value,
    brand: form.brand.value,
    imageUrl: form.imageUrl.value,
    price: parseFloat(form.price.value),
  };

  const url = id
    ? `https://striveschool-api.herokuapp.com/api/product/${id}`
    : `https://striveschool-api.herokuapp.com/api/product/`;
  const method = id ? "PUT" : "POST";

  fetch(url, {
    method,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwY2YwOTc4Y2RkZjAwMTU1ZDY3ZTIiLCJpYXQiOjE3NTIyMjM0OTgsImV4cCI6MTc1MzQzMzA5OH0.PIBvwcdJFDcqce5hOg3w4WNh2h6qDlWfJIEThIAZqwk",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then(() => (message.innerText = "✅ Saved successfully!"))
    .catch(() => (message.innerText = "❌ Error has occured!"));
});

const deleteBtn = document.getElementById("delete-btn");
if (deleteBtn) {  
    if (!id) {
    deleteBtn.style.display = "none";
  } else {
  deleteBtn.addEventListener("click", () => {
    if (confirm("Are you sure to delete this product?")) {
      fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwY2YwOTc4Y2RkZjAwMTU1ZDY3ZTIiLCJpYXQiOjE3NTIyMjM0OTgsImV4cCI6MTc1MzQzMzA5OH0.PIBvwcdJFDcqce5hOg3w4WNh2h6qDlWfJIEThIAZqwk",
        },
      })
        .then(async(res) => {
          if (res.ok) {
            alert("✅ Deleted successfully!");
            window.location.href = "index.html"; //
          } else {
            const err = await res.json();
            throw new Error("Error occurred while deleting");
          }
        })
        .catch((err) => alert("❌ " + err.message));
    }
  });
}}
