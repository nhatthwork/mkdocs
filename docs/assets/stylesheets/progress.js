document.addEventListener("DOMContentLoaded", () => {
  const track = document.createElement("div");
  track.id = "scroll-progress-track";
  track.style.opacity = "0"; // Mặc định ẩn khi mới tải trang

  const bar = document.createElement("div");
  bar.id = "scroll-progress-bar";

  track.appendChild(bar);
  document.body.appendChild(track);

  const header = document.querySelector("header");
  const searchInput = document.querySelector('.md-search__input');

  const updateTop = () => {
    track.style.top = header ? header.offsetHeight + "px" : "0px";
  };

  updateTop();
  window.addEventListener("resize", updateTop);

  // Hàm kiểm tra để ẩn/hiện thanh track
  const toggleTrackVisibility = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const isSearchFocused = document.activeElement === searchInput;

    // Điều kiện hiện: Phải cuộn xuống > 10px VÀ không đang tìm kiếm
    if (scrollTop > 10 && !isSearchFocused) {
      track.style.opacity = "1";
      track.style.visibility = "visible";
    } else {
      track.style.opacity = "0";
      track.style.visibility = "hidden";
    }
  };

  // Lắng nghe sự kiện tìm kiếm
  if (searchInput) {
    searchInput.addEventListener('focus', toggleTrackVisibility);
    searchInput.addEventListener('blur', () => {
      setTimeout(toggleTrackVisibility, 200);
    });
  }

  // Lắng nghe sự kiện cuộn
  window.addEventListener(
    "scroll",
    () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      toggleTrackVisibility();

      if (scrollHeight <= 0) {
        bar.style.width = "0%";
        return;
      }

      const progress = (scrollTop / scrollHeight) * 100;
      bar.style.width = progress + "%";
    },
    { passive: true }
  );
});



