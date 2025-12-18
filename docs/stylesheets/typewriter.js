document.addEventListener("DOMContentLoaded", () => {
  const h1 = document.querySelector(".mdx-hero__content h1");
  if (!h1) return;

  const text = h1.textContent;
  h1.textContent = "";

  let i = 0;
  const speed = 80;

  function type() {
    if (i < text.length) {
      h1.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
});
