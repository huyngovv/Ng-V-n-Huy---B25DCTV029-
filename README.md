<b>NGÔ VĂN HUY - B25DCTV029</b>

Dự án gồm hai ứng dụng React độc lập, được tạo bằng Vite:

- **Bài 1 - CV cá nhân** (`bai1-cv`): trang CV giới thiệu thông tin cá nhân, kỹ năng, học vấn và dự án; có nút chuyển đổi giao diện sáng/tối.
- **Bài 2 - Máy tính** (`bai2-calculator`): máy tính cơ bản hỗ trợ các phép cộng, trừ, nhân, chia, nhập dấu thập phân, xóa ký tự và làm mới phép tính.

## Yêu cầu

- Node.js và npm

## Chạy ứng dụng

Mỗi bài là một dự án riêng. Mở terminal tại thư mục của bài muốn chạy, sau đó cài dependencies và khởi động máy chủ phát triển:

```bash
npm install
npm run dev
```

Ví dụ, để chạy bài CV:

```bash
cd bai1-cv
npm install
npm run dev
```

Để chạy máy tính, thay thư mục `bai1-cv` bằng `bai2-calculator`.

## Build

Trong thư mục của ứng dụng cần build, chạy:

```bash
npm run build
```

Các tệp build được tạo trong thư mục `dist`. Có thể xem bản build bằng lệnh:

```bash
npm run preview
```

## Cấu trúc

```text
.
├── bai1-cv/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── App.css
│   └── package.json
└── bai2-calculator/
    ├── src/
    │   ├── components/
    │   ├── App.jsx
    │   └── App.css
    └── package.json
```
