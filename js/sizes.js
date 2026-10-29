export const sizes = () => {
  const sizesList = document.querySelector('[data-sizes="list"]');
  const sizesButtons = document.querySelectorAll('[data-sizes="button"]');

  const handleSizeClick = (event) => {
    const target = event.target;

    if (!target?.classList.contains("product__sizes-btn")) return;

    sizesButtons.forEach((button) =>
      button.classList.remove("product__sizes-btn--active"),
    );
    target.classList.add("product__sizes-btn--active");
  };

  sizesList.addEventListener("click", handleSizeClick);
};
