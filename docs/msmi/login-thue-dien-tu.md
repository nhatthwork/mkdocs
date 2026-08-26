---
icon: lucide/key-round
tags:

---

# **Đăng nhập tài khoản thuế điện tử**

<script>
function activateTabFromUrlFragment() {
  // 1. Get the fragment from the URL (e.g., #tab2-h1)
  const fragment = window.location.hash;

  if (fragment) {
    // 2. Find the element with the matching ID
    // We remove the '#' from the fragment to get the pure ID
    const targetElement = document.getElementById(fragment.substring(1));

    if (targetElement) {
      // 3. Find the parent .tabbed-block of the target element
      const parentBlock = targetElement.closest(".tabbed-block");

      // 4. Find the main container for all tab content blocks
      const contentContainer = targetElement.closest(".tabbed-content");

      if (parentBlock && contentContainer) {
        // 5. Get all tab blocks to determine the index of our target
        const allBlocks = Array.from(
          contentContainer.querySelectorAll(".tabbed-block"),
        );
        const targetIndex = allBlocks.indexOf(parentBlock);

        // 6. Navigate up to the main component container
        const mainContainer = contentContainer.parentElement;

        if (mainContainer) {
          // 7. Find all the labels for the tabs within that container
          const allLabels = mainContainer.querySelectorAll(
            ".tabbed-labels label",
          );

          if (allLabels[targetIndex]) {
            // 8. First, activate the correct tab by clicking its label
            allLabels[targetIndex].click();

            // 9. Now that the element is visible, scroll it into view
            targetElement.scrollIntoView({
              behavior: "smooth", // Use a smooth scrolling animation
              block: "start", // Align the top of the element with the top of the visible area
            });
          }
        }
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', activateTabFromUrlFragment);
</script>

###Bước 1: Click chọn menu **Quản lý tài khoản thuế điện tử**  >> Bấm nút **Thêm** (màu xanh lá).

![Hình2](../../assets/images/mSMI/login-thue-dt_1.png)

###Bước 2: Nhập các thông tin tại Pop-up:

- Tài khoản: Nhập Mã số thuế (bắt buộc có đuôi  -ql  ở cuối, ví dụ: 0101234567-ql)

- Mật khẩu: Nhập mật khẩu cổng DVC. Anh/Chị có thể click vào  icon "Con mắt"  để hiển thị hoặc ẩn mật khẩu

- Cấu hình đồng bộ: Tích chọn  Đồng bộ tờ khai và Đồng bộ giấy nộp tiền. Tại ô Đồng bộ từ ngày, hệ thống mặc định là 01/01/2026 (Anh/Chị có thể tùy chỉnh lại).

![Hình3](../../assets/images/mSMI/login-thue-dt_2.png)

###Bước 3: Bấm nút **Lưu** (màu xanh dương) để hoàn tất.

!!! info "Xin chân thành cảm ơn Quý khách hàng đã tin dùng sản phẩm của M-Invoice"

    Có bất kỳ vướng mắc nào trong quá trình sử dụng hãy liên hệ với M-Invoice tại mục Hỗ trợ kỹ thuật góc phải bên dưới màn hình hoặc gọi tổng đài kỹ thuật của M-Invoice (1900.955.557 Nhánh 1)

![Hình 4](../../assets/images/mSMI/msmi_footer.png "Hãy bấm vào để xem rõ hơn")


<div class="last-updated">
  Last updated on <strong>June, 2026</strong> by <strong>datvt</strong>
</div>

    