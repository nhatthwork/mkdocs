---
icon: lucide/log-in
tags:

---

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

# Tờ khai chờ xác thực

!!! Warning

    - Hệ thống chỉ hiển thị tờ khai chờ Xác thực trong chức năng “Tờ khai chờ xác thực” đối với các đối tượng sau đăng nhập theo hướng dẫn được mô tả tại bước 1:
        + Đại diện tổ chức (Kê khai trực tiếp tờ khai trên eTax Mobile hoặc TTHC)
        + Đại diện hộ kinh doanh (Kê khai trực tiếp tờ khai trên eTax Mobile hoặc TTHC)
        + Đại diện tổ chức (Kê khai tờ khai từ TVAN)
        + Nếu còn hạn Xác thực Sinh trắc học/Xác thực OTP, hệ thống hiển thị nút Sinh trắc học/Xác thực OTP và nút Hủy
        + Nếu quá hạn Xác thực Sinh trắc học/Xác thực OTP (quá 1 ngày làm việc kể từ ngày NSD nhận được email thông báo có hồ sơ cần Sinh trắc học/Xác thực OTP), hệ thống sẽ thực hiện gửi email thông báo quá hạn cho NSD thông qua email đăng ký trên tờ khai 01/ĐKTĐ-HĐĐT và gửi thông báo quá hạn cho hệ thống HĐĐT.

    <figure markdown="span">
        ![Hình6](../../assets/images/tai-lieu/etax-mobile/etax-mobile-6.png)
    </figure>
    <!-- ![Hình7](../../assets/images/tai-lieu/etax-mobile/etax-mobile-7.png) -->


=== "Trường hợp sinh trắc học"
     
    **Bước 1**: Người đại diện pháp luật nhấn nút “Sinh trắc học”, hệ thống hiển thị màn hình “Xác nhận xác thực ảnh khuôn mặt”.

    **Bước 2**: NSD tích “Tôi đã đọc và hiểu rõ nội dung mục đích (đã nêu ở trên), Quyền, nghĩa vụ của chủ thể dữ liệu và đồng ý với các nội dung này.

    **Bước 3**: Nhấn Xác nhận chia sẻ
            
    <figure markdown="span">
        ![Hình9](../../assets/images/tai-lieu/etax-mobile/etax-mobile-9.png)
    </figure>

    **Bước 4**: Nhập passcode, hệ thống hiển thị màn hình chia sẻ thông tin thành công

    <figure markdown="span">
        ![Hình10](../../assets/images/tai-lieu/etax-mobile/etax-mobile-10.png)
    </figure>

    **Bước 5**: NSD thực hiện các bước xác thực gương mặt theo hướng dẫn. Hệ thống hiển thị màn hình kết quả xác thực khuôn mặt với BCA:

    * Trường hợp không khớp thông tin với BCA: Hiển thị màn hình “Xác thực sinh trắc học không thành công”. Hiển thị thêm nút “Xác thực lại” cho phép người đại diện thực hiện Sinh trắc học lại

    * Trường hợp khớp thông tin với BCA: Hiển thị màn hình “Xác thực sinh trắc học thành công”. Hiển thị thêm nút “Gửi tờ khai”
        
    <figure markdown="span">
        ![Hình12](../../assets/images/tai-lieu/etax-mobile/etax-mobile-12.png)
     </figure>

    **Bước 6**: NSD nhấn nút Gửi tờ khai, hệ thống hiển thị màn hình Gửi tờ khai thành công và gửi tờ khai 01/ĐKTĐ-HĐĐT đến hệ thống HĐĐT

    <figure markdown="span">
        ![Hình13](../../assets/images/tai-lieu/etax-mobile/etax-mobile-13.png)
    </figure>


=== "Trường hợp xác thực OTP"
          
    **Bước 1**: Người đại diện pháp luật nhấn nút “**Xác thực OTP**”, hệ thống gửi mã OTP về:

    - Email trên tờ khai 01/ĐKTĐ-HĐĐT của NNT
    - Email của Người đại diện pháp luật đăng ký eTax Mobile
    - Notify trên app eTax Mobile

    <figure markdown="span">
        ![Hình14](../../assets/images/tai-lieu/etax-mobile/etax-mobile-14.png)
    </figure>

    **Bước 2**: Nhập mã OTP hợp lệ. Hệ thống hiển thị màn hình Xác thực OTP thành công. Hiển thị thêm nút “**Gửi tờ khai**”

    <figure markdown="span">
        ![Hình15](../../assets/images/tai-lieu/etax-mobile/etax-mobile-15.png)
    </figure>

    **Bước 3**: Nhấn nút Gửi tờ khai, hệ thống hiển thị màn hình Gửi tờ khai thành công và gửi tờ khai 01/ĐKTĐ-HĐĐT đến hệ thống HĐĐT.

    <figure markdown="span">
        ![Hình16](../../assets/images/tai-lieu/etax-mobile/etax-mobile-16.png)
    </figure>

<div class="last-updated">Last updated on <strong>May, 2026</strong> by <strong>manhdd</strong></div>


    
    




