---
icon: lucide/log-in
tags:

---

# **Hướng dẫn xem tình hình sử dụng số lượng hóa đơn**

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

!!! note

    Trong quá trình sử dụng quản lý rủi ro hóa đơn (mSMI), người sử dụng muốn kiểm tra lại và nắm bắt lại số lượng hóa đơn đang sử dụng để có thể gia hạn kịp thời tránh gián đoạn khi sử dụng dịch vụ

=== "**Trường hợp 1**"
    #### Trường hợp 1: Kiểm tra tình trang ở trang Dashboard 

    Ở ngoài trang Dashboard, người dùng sẽ thấy phần thông tin bản quyền
    <figure markdown="span">
      ![Hình1](../../assets/images/mSMI/ban-quyen-01.png)
    </figure>

    
=== "**Trường hợp 2**"
    ####Trường hợp 2: Xem thông tin bản quyền qua báo cáo
    
    **Bước 1**: Chọn **báo cáo** ở ngoài trang Dashboard => Chọn **Tình hình sử dụng**

    <figure markdown="span">
    ![Hình2](../../assets/images/mSMI/ban-quyen-02.png)
    </figure>

    **Bước 2**: Người dùng sẽ thấy biểu đồ tình hình sử dụng thể hiện số lượng **Đã sử dung** và số lượng **Còn lại**

    <figure markdown="span">
    ![Hình3](../../assets/images/mSMI/ban-quyen-03.png)
    </figure>

!!! info "Xin chân thành cảm ơn Quý khách hàng đã tin dùng sản phẩm của M-Invoice"

    Có bất kỳ vướng mắc nào trong quá trình sử dụng hãy liên hệ với M-Invoice tại mục Hỗ trợ kỹ thuật góc phải bên dưới màn hình hoặc gọi tổng đài kỹ thuật của M-Invoice (1900.955.557 Nhánh 1)

![Hình 4](../../assets/images/mSMI/msmi_footer.png "Hãy bấm vào để xem rõ hơn")


<div class="last-updated">Last updated on <strong>May, 2026</strong> by <strong>manhdd</strong></div>

    