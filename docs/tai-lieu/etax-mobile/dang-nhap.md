---
icon: lucide/log-in
tags:

---

# **Hướng dẫn đăng nhập eTax Mobile**

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

Trong quá trình đăng nhập sẽ có hai trường hợp hợp đăng nhập khác nhau

=== "**Trường hợp 1**"
    #### Trường hợp 1: Đại diện tổ chức đăng nhập bằng tài khoản định danh điện tử VNeID mức 2

    Chọn Đăng nhập bằng tài khoản Định danh điện tử
    <figure markdown="span">
      ![Hình1](../../assets/images/tai-lieu/etax-mobile/etax-mobile-1.png)
    </figure>

    **Bước 1**: Chọn Loại tài khoản cá nhân >> Nhấn xác nhận >> Xác nhận chia sẻ thông tin để đăng nhập ứng dụng Thuế điện tử
    <figure markdown="span">
    ![Hình2](../../assets/images/tai-lieu/etax-mobile/etax-mobile-2.png)
    </figure>

    **Bước 2**: Tích chọn “Tôi đã đọc và hiểu rõ nội dung mục đích (đã nêu ở trên); Quyền, nghĩa vụ của chủ thể dữ liệu và đồng ý với các nội dung này
    
    - Nhấn Xác nhận chia sẻ  >> Hệ thống hiển thị màn hình nhập passcode
    <figure markdown="span">
      ![Hình3](../../assets/images/tai-lieu/etax-mobile/etax-mobile-3.png)
    </figure>

    **Bước 3**: Nhập passcode > Hệ thống hiển thị màn hình chức năng, bổ sung thêm chức năng Hóa đơn điện tử

    <figure markdown="span">
    ![Hình4](../../assets/images/tai-lieu/etax-mobile/etax-mobile-4.png)
    </figure>

=== "**Trường hợp 2**"
    ####Trường hợp 2: Đại diện tổ chức đăng nhập bằng MST và mật khẩu được cấp bởi CQT
    ???+ warring "Lưu ý"
        Áp dụng đối với NNT đã có CCCD
    
    **Bước 1**: Thực hiện lần lượt các thao tác

      1. NSD nhập MST 12 số là CCCD (thay cho MST 10 số trước đó)
      2. Nhập mật khẩu do CQT cấp
      3. Nhấn nút “Đăng nhập” > Hệ thống hiển thị màn hình chức năng, bổ sung thêm chức năng **Hóa đơn điện tử**

    <figure markdown="span">
    ![Hình5](../../assets/images/tai-lieu/etax-mobile/etax-mobile-5.png)
    </figure>

<div class="last-updated">Last updated on <strong>May, 2026</strong> by <strong>manhdd</strong></div>

    