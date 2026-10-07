import React from "react";

// 1. Component Header
function Header(props) {
  return (
    <div
      style={{
        textAlign: "center",
        borderBottom: "2px solid black",
        paddingBottom: "10px",
      }}
    >
      <h1>{props.ten}</h1>
      <p>Vị trí ứng tuyển: Sinh viên IT thực tập</p>
    </div>
  );
}

// 2. Component Section (dùng props.children)
function Section(props) {
  return (
    <div
      style={{ margin: "20px 0", padding: "10px", backgroundColor: "#f9f9f9" }}
    >
      <h2 style={{ color: "blue" }}>{props.tieuDe}</h2>
      <div>{props.children}</div>
    </div>
  );
}

// 3. Component SkillList
function SkillList(props) {
  return (
    <ul>
      {props.danhSachKyNang.map((kynang, index) => (
        <li key={index}>{kynang}</li>
      ))}
    </ul>
  );
}

// 4. Component ProjectList
function ProjectList(props) {
  return (
    <div>
      {props.danhSachDuAn.map((duAn, index) => (
        <div
          key={index}
          style={{
            marginBottom: "10px",
            borderLeft: "3px solid gray",
            paddingLeft: "10px",
          }}
        >
          <h3>{duAn.tenDuAn}</h3>
          <p>Mô tả: {duAn.moTa}</p>
        </div>
      ))}
    </div>
  );
}

// 5. Component Chính (Export default để hệ thống nhận diện đây là file chính)
export default function App() {
  const mangKyNang = [
    "HTML/CSS cơ bản",
    "JavaScript",
    "ReactJS",
    "Thái độ tốt",
  ];
  const mangDuAn = [
    { tenDuAn: "Trang web bán hàng", moTa: "Web tĩnh dùng HTML, CSS" },
    { tenDuAn: "Máy tính ảo", moTa: "Ứng dụng React làm bài tập" },
  ];

  return (
    <div style={{ width: "800px", margin: "0 auto", fontFamily: "Arial" }}>
      <Header ten="Nguyễn Văn A" />

      <Section tieuDe="Kỹ Năng Của Tôi">
        <SkillList danhSachKyNang={mangKyNang} />
      </Section>

      <Section tieuDe="Dự Án Đã Làm">
        <ProjectList danhSachDuAn={mangDuAn} />
      </Section>
    </div>
  );
}
