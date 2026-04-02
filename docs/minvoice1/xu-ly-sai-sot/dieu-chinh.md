---
icon: lucide/file-pen-line
tags:
  - invoice1
---
# **Điều chỉnh hoá đơn**

???+ Note "Ghi chú"

    📘 **CĂN CỨ TẠI NGHỊ ĐỊNH 70/2025/NĐ-CP**, SỬA ĐỔI **NGHỊ ĐỊNH 123/2020/NĐ-CP**, QUY ĐỊNH VỀ VIỆC LẬP **HÓA ĐƠN, CHỨNG TỪ** NHƯ SAU:

    ---

    🧾 **Khi người bán phát hiện hóa đơn điện tử đã lập sai** *(bao gồm:)*

    – Hóa đơn điện tử **đã được cấp mã của cơ quan thuế**;

    – Hóa đơn điện tử **không có mã nhưng đã gửi dữ liệu đến cơ quan thuế**;

    → Thì xử lý theo các trường hợp:

    ---

    <span style="font-size: 18px; color:#1a237e; font-weight:bold;">1. Sai sót nhỏ – **Không làm thay đổi nội dung nghĩa vụ thuế:**</span>

    ✅ **Sai tên người mua**
    → Không cần lập lại hóa đơn.
    → Gửi **Mẫu 04/SS-HĐĐT** cho **Cơ quan thuế** và **thông báo cho bên mua**.

    ✅ **Sai địa chỉ người mua**
    → Không cần lập lại hóa đơn.
    → Gửi **Mẫu 04/SS-HĐĐT** cho **Cơ quan thuế** và **thông báo cho bên mua**.

    ✅ **Sai cả tên và địa chỉ nhưng đúng mã số thuế**
    → Không cần lập lại hóa đơn.
    → Gửi **Mẫu 04/SS-HĐĐT** cho **Cơ quan thuế** và **thông báo cho bên mua**.

    🖱️ **Click vào đây để xem hướng dẫn lập thông báo 04/SS:**
    📄 [Thông báo 04/SS](lap-04ss.md#attribute-lists){ data-preview }

    ---

    <span style="font-size: 18px; color:#1a237e; font-weight:bold;">⚠️ 2. Sai sót lớn – **Làm thay đổi nghĩa vụ thuế hoặc thông tin trọng yếu:**</span>

    ❌ **Sai mã số thuế người mua**
    → Phải lập **hóa đơn thay thế**, kèm **biên bản thỏa thuận giữa hai bên**.

    ❌ **Sai thuế suất, số tiền, tiền thuế, đơn giá, thành tiền**
    → Phải lập **hóa đơn điều chỉnh** hoặc **hóa đơn thay thế**, kèm **biên bản thỏa thuận**.

    ❌ **Sai mặt hàng, quy cách, số lượng, đơn vị tính**
    → Phải lập **hóa đơn điều chỉnh** hoặc **hóa đơn thay thế**, kèm **biên bản thỏa thuận**.

    ❌ **Sai mã hàng hóa, mã vạch, thông tin kỹ thuật**
    → Phải lập **hóa đơn điều chỉnh** hoặc **hóa đơn thay thế**, kèm **biên bản thỏa thuận**.

    - 📝 **Anh chị có thể làm điều chỉnh theo hướng dẫn dưới nội dung này ⬇️**

    ---

    <span style="font-size: 18px; color:#1a237e; font-weight:bold;">🛑 **GHI NHỚ TỪ 01/06/2025**:</span>

    🚫 **Bỏ nghiệp vụ "Hủy hóa đơn".**

    📌 **Trường hợp hóa đơn đã phát hành nhưng giao dịch bị hủy bỏ, hay bị sai thông tin cần hủy bỏ để lập hóa đơn mới**

    - 📝 **Anh chị làm điều chỉnh giảm về 0 (tương đương hủy) theo hướng dẫn sau**

    🖱️ **Click vào đây để xem hướng dẫn:**
    📄 [Hướng dẫn điều chỉnh giảm về 0](dieu-chinh-giam-ve-0.md#attribute-lists){ data-preview }

    ---

## **Hướng dẫn điều chỉnh hóa đơn có sai sót**

???+ Warning "Lưu ý"

    <span style="color: red; font-weight: 600;">
    Tài liệu hướng dẫn mang tính chất tham khảo, đơn vị cân nhắc và tham khảo ý kiến Cơ quan thuế (nếu cần) trước khi áp dụng để phù hợp với phát sinh sai sót thực tế.

    Hiện tại M-invoice đang hướng dẫn điều chỉnh hóa đơn theo hướng sai thông tin nào thì điều chỉnh thông tin đó căn cứ vào quy định tại điểm e, khoản 7, thông tư 78. Riêng đối với nội dung về giá trị trên hóa đơn có sai sót thì: điều chỉnh tăng (ghi dấu dương), điều chỉnh giảm (ghi dấu âm) đúng với thực tế điều chỉnh. Ngoài ra, đơn vị còn có thể tham khảo hướng dẫn theo công văn số 1647/TCT-CS.
    </span>

    Điều chỉnh hoá đơn(Áp dụng HĐ trong kỳ (nhưng đã kê khai)hoặc qua kỳ kê khai) và chỉ được phép sử dụng nghiệp vụ điều chỉnh hóa đơn với các điều kiện sau:

    1. Hóa đơn cần điều chỉnh đã được gửi CQT thành công hoặc hóa đơn đã có mã CQT cấp.
    2. Hóa đơn cần điều chỉnh ở Trạng thái Gốc (Mới) hoặc bị điều chỉnh

    Nếu đã lựa chọn nghiệp vụ điều chỉnh thì không được thay thế hóa đơn điều chỉnh. Từ NGHỊ ĐỊNH 70/2025/NĐ-CP nghiệp vụ này không phải lập kèm 04/SS

## **1. Điều chỉnh tăng giá trị**

[1.1. Điều chỉnh tăng đơn giá hàng hóa](cach-viet-thong-tin-tren-hoa-don-dieu-chinh-tang-don-gia-hang-hoa#attribute-lists){ data-preview }

[1.2. Điều chỉnh tăng số lượng hàng hóa](cach-viet-thong-tin-tren-hoa-don-dieu-chinh-tang-so-luong-hang-hoa#attribute-lists){ data-preview }

[1.3. Điều chỉnh tăng thuế suất](cach-viet-thong-tin-tren-hoa-don-dieu-chinh-tang-thue-suat#attribute-lists){ data-preview }

[1.4. Điều chỉnh tăng thành tiền](cach-viet-thong-tin-tren-hoa-don-dieu-chinh-tang-thanh-tien-khong-dieu-chinh-so-luong-don-gia#attribute-lists){ data-preview }

## **2. Điều chỉnh giảm giá trị**

[2.1. Điều chỉnh giảm đơn giá hàng hóa](cach-viet-thong-tin-tren-hoa-don-dieu-chinh-giam-don-gia-hang-hoa#attribute-lists){ data-preview }

[2.2. Điều chỉnh giảm số lượng hàng hóa](cach-viet-thong-tin-tren-hoa-don-dieu-chinh-giam-so-luong-hang-hoa#attribute-lists){ data-preview }

[2.3. Điều chỉnh giảm thuế suất](cach-viet-thong-tin-tren-hoa-don-dieu-chinh-giam-thue-suat#attribute-lists){ data-preview }

[2.4. Điều chỉnh giảm thành tiền](cach-viet-thong-tin-tren-hoa-don-dieu-chinh-giam-thanh-tien-khong-dieu-chinh-so-luong-don-gia#attribute-lists){ data-preview }

## **3. Điều chỉnh thông tin không liên quan đến tiền**

[3.1. Điều chỉnh tên hàng hóa](cach-viet-thong-tin-tren-hoa-don-dieu-chinh-ten-hang-hoa#attribute-lists){ data-preview }

[3.2. Điều chỉnh mã số thuế người mua hàng](cach-viet-thong-tin-tren-hoa-don-dieu-chinh-ma-so-thue-nguoi-mua-hang#attribute-lists){ data-preview }

[3.3. Điều chỉnh đơn vị tính của hàng hóa](cach-viet-thong-tin-tren-hoa-don-dieu-chinh-don-vi-tinh-cua-hang-hoa#attribute-lists){ data-preview }

[3.4. Điều chỉnh hình thức thanh toán](cach-viet-thong-tin-tren-hoa-don-dieu-chinh-hinh-thuc-thanh-toan#attribute-lists){ data-preview }

## Hướng dẫn lập biên bản hóa đơn điều chỉnh

???+ Note "Căn cứ"

    Theo Nghị định 70/2025/NĐ-CP, việc lập Biên bản là bắt buộc trong các trường hợp làm nghiệp vụ điêu chỉnh/thay thế.

    Người sử dụng có thể sử dụng thao tác này để lập biên bản khi làm nghiệp vụ thay thế hay điều chỉnh hóa đơn

!!! warning "Lưu ý"

    Chỉ lập được khi hóa đơn ở trạng thái thay thế hoặc điều chỉnh

#### Hướng dẫn bằng hình ảnh chi tiết

**Bước 1: Chọn hóa đơn vừa được làm thay thế hoặc điều chỉnh**

![Hình 1](../../assets/images/invoice1/1-bienban-1.png "Hãy bấm vào để xem rõ hơn")

**Bước 2: Kiểm tra thông tin người bán, người mua, điền lý do thay thế hoặc lý do điều chỉnh**

![Hình 2](../../assets/images/invoice1/1-bienban-2.png "Hãy bấm vào để xem rõ hơn")

**Bước 3 : Lưu hoặc ký biên bản thay thế, điều chỉnh**

![Hình 3](../../assets/images/invoice1/1-bienban-3.png "Hãy bấm vào để xem rõ hơn")

<span style="color:red;">Bâm lưu hoặc lưu và ký</span>

???+ Danger "Lưu ý"

    Để ký được biên bản máy tính phải được cài đặt plugin ký số, nếu đã cài đặt thì bỏ qua bước này

    🖱️ **Click vào đây để cài đặt:**
    📄 [Hướng dẫn tải plugin](../huong-dan/cai-dat-plugin.md#attribute-lists){ data-preview }

![Hình 3](../../assets/images/invoice1/1-bienban-6.png "Hãy bấm vào để xem rõ hơn")

**Anh chị chọn chữ ký số đúng và chọn OK**

![Hình 3](../../assets/images/invoice1/1-bienban-7.png "Hãy bấm vào để xem rõ hơn")

**Biên bản sau khi được ký thành công**

**Bước 4 : Xem và in biên bản**

![Hình 4](../../assets/images/invoice1/1-bienban-4.png "Hãy bấm vào để xem rõ hơn")

![Hình 5](../../assets/images/invoice1/1-bienban-5.png "Hãy bấm vào để xem rõ hơn")

Bấm nút in ở trình duyệt hoặc bấm ctrl + P để in hoặc chọn SAVE để tải về gửi cho khách hàng hoặc lưu trữ

**Bước 5 : Sau khi gửi cho khách hàng ký anh chị có thể up mẫu biên bản 2 bên đã ký lên phần mềm**

![Hình 5](../../assets/images/invoice1/1-bienban-8.png "Hãy bấm vào để xem rõ hơn")

**Chọn hình ảnh theo hướng dẫn trên --> chọn file cần up load --> Bấm nhận**

![Hình 5](../../assets/images/invoice1/1-bienban-9.png "Hãy bấm vào để xem rõ hơn")

![Hình 5](../../assets/images/invoice1/1-bienban-9.png "Hãy bấm vào để xem rõ hơn")

**Như vậy anh chị đã upload lên thành công**

!!! info "Xin chân thành cảm ơn Quý khách hàng đã tin dùng sản phẩm của M-Invoice"

    Có bất kỳ vướng mắc nào trong quá trình sử dụng hãy liên hệ với M-Invoice tại mục Hỗ trợ kỹ thuật góc phải bên dưới màn hình hoặc gọi tổng đài kỹ thuật của M-Invoice (1900.955.557 Nhánh 1)

![Hình 5](../../assets/images/invoice1/1.0_suaTienBangTay_5.png "Hãy bấm vào để xem rõ hơn")

<div class="last-updated">Last updated on <strong>Jun 17, 2025</strong> by <strong>nhatth</strong></div>
