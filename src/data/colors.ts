// Bảng màu chung của cửa hàng — lấy mẫu thực tế từ ảnh bảng màu nhà cung cấp.
// Thêm màu mới: nối thêm một dòng { code, name, hex } vào cuối mảng, không sửa các mã đã có.
export interface SwatchColor {
  code: string;
  name: string;
  hex: string;
}

export const colorPalette: SwatchColor[] = [
  { code: "01", name: "Trắng ngà", hex: "#d2d2cd" },
  { code: "02", name: "Hồng phấn", hex: "#d3aba7" },
  { code: "03", name: "Xanh biển", hex: "#a0afc0" },
  { code: "04", name: "Tím lavender", hex: "#9799b7" },
  { code: "05", name: "Be / Kaki", hex: "#c2aa93" },
  { code: "06", name: "Vàng", hex: "#e8c561" },
  { code: "07", name: "Đỏ", hex: "#c72f37" },
  { code: "08", name: "Đen", hex: "#271d20" },
  // Bảng màu REN-02 (Ren mỏng kim sa) — lấy mẫu từ ảnh bảng màu nhà cung cấp, đã tăng độ rực để dễ nhìn hơn trên web.
  // Các màu quá nhạt (kem, trắng khói, tím pastel) lấy mẫu khó chính xác 100% do vải mỏng xuyên sáng — có thể tinh chỉnh lại nếu thấy lệch màu.
  { code: "09", name: "Đen", hex: "#18182c" },
  { code: "11", name: "Kem ngà", hex: "#e8e1cd" },
  { code: "12", name: "Xanh rêu nhạt", hex: "#cebd93" },
  { code: "13", name: "Tím pastel nhạt", hex: "#c7bdbc" },
  { code: "14", name: "Nâu gỉ", hex: "#722c00" },
  { code: "15", name: "Xanh dạ", hex: "#2c546c" },
  { code: "16", name: "Xanh bạc hà", hex: "#aa9e73" },
  { code: "17", name: "Hồng", hex: "#eb718d" },
  { code: "18", name: "Xanh khói", hex: "#67839c" },
  { code: "19", name: "Be / vàng đất", hex: "#c4bfa1" },
  { code: "20", name: "Xanh rêu pastel", hex: "#b5c6a1" },
  { code: "21", name: "Đỏ mận", hex: "#75001d" },
  { code: "22", name: "Xanh navy", hex: "#111c48" },
  { code: "23", name: "Đỏ nâu đậm", hex: "#6d2141" },
  // Bảng màu REN-04 (Ren hoa nổi 3D đa sắc) — lấy mẫu từ ảnh chụp nhiều màu trải cùng nhau.
  // Chưa lấy được màu hồng (góc ảnh bị che khuất) — bổ sung sau nếu có ảnh rõ hơn.
  { code: "24", name: "Nude / Be", hex: "#b39f93" },
  // 25: đã chỉnh lại cho trắng sạch hơn (mẫu gốc bị ám xám do thiếu sáng khi chụp).
  { code: "25", name: "Trắng", hex: "#ece9e3" },
  { code: "26", name: "Kem ngà", hex: "#cbb7a0" },
  // Mã 10 (Trắng khói) và 27 (Đen, trùng tông với 08/09) đã gộp bỏ để tránh trùng lặp — dùng lại 25 và 09.
  // Bổ sung các màu vải phổ biến, dùng chung cho toàn bộ sản phẩm ren/vải cưới — dạ hội:
  { code: "28", name: "Hồng baby", hex: "#f5cdd8" },
  // 29: đổi theo ảnh tham khảo set vest kem bạn gửi — kem sữa nhạt, ấm nhưng dịu hơn bản champagne cũ.
  // Chỉnh sáng hơn + bớt ám vàng theo yêu cầu.
  { code: "29", name: "Kem vàng / Champagne", hex: "#f3ede0" },
  { code: "30", name: "Bạc", hex: "#c5c5c9" },
  { code: "31", name: "Xanh ngọc", hex: "#1f6b53" },
];

export function getColor(code: string): SwatchColor | undefined {
  return colorPalette.find((c) => c.code === code);
}
