document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("article img").forEach(img => {
    // Bỏ qua nếu ảnh đã nằm trong link
    if (img.closest("a")) return;

    const src = img.getAttribute("src");
    if (!src) return;

    const link = document.createElement("a");
    link.href = src;
    link.className = "glightbox";
    link.setAttribute("data-title", img.alt || "");

    img.parentNode.insertBefore(link, img);
    link.appendChild(img);
  });

  GLightbox({
    selector: "a.glightbox",
    touchNavigation: true,
  });
});
