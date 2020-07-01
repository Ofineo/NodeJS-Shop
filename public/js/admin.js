const deleteProduct = (element) => {
  const prodId = element.parentNode.querySelector("[name=productId]").value;
  const csrf = element.parentNode.querySelector("[name=csrf]").value;

  const productElement = element.closest("article");

  fetch(`/admin/product/${prodId}`, {
    method: "DELETE",
    headers: { "csrf-token": csrf },
  })
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      productElement.parentNode.removeChild(productElement);
    })
    .catch((err) => console.log(err));
};
