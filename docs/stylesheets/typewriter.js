document.addEventListener("DOMContentLoaded", () => {
  const h1 = document.querySelector(".mdx-hero__content h1");
  if (!h1) return;

  const texts = [
    "Phần mềm hóa đơn điện tử M-invoice",
    "Quản lý rủi ro hóa đơn - mSMI",
    "Chứng từ khấu trừ thuế TNCN - mTNCN",
    "Bảo hiểm xã hội điện tử - mBHXH",
    "Giải pháp ký số - mCA",
  ];

  const typingSpeed = 80; // tốc độ gõ
  const deletingSpeed = 50; // tốc độ xoá
  const pauseAfterType = 1500; // dừng sau khi gõ xong
  const pauseAfterDelete = 500; // dừng sau khi xoá xong

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeLoop() {
    const currentText = texts[textIndex];

    if (!isDeleting) {
      // GÕ CHỮ
      h1.textContent = currentText.slice(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentText.length) {
        setTimeout(() => (isDeleting = true), pauseAfterType);
      }
    } else {
      // XOÁ CHỮ
      h1.textContent = currentText.slice(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(() => {}, pauseAfterDelete);
      }
    }

    setTimeout(typeLoop, isDeleting ? deletingSpeed : typingSpeed);
  }

  typeLoop();
});
