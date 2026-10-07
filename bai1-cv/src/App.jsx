import { useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import SkillList from "./components/SkillList";
import ProjectList from "./components/ProjectList";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);

  const skills = [
    "HTML và CSS cơ bản",
    "JavaScript cơ bản",
    "React cơ bản",
    "C/C++ cơ bản",
    "Làm việc với VS Code"
  ];

  const projects = [
    {
      name: "Trang giới thiệu cá nhân",
      description: "Tạo trang web giới thiệu thông tin cá nhân bằng HTML, CSS và JavaScript."
    },
    {
      name: "Bài thực hành React",
      description: "Xây dựng các component, sử dụng props, state và hiển thị dữ liệu bằng map()."
    }
  ];

  const greeting = "Xin chào! Chào mừng bạn đến với CV cá nhân của tôi.";

  return (
    <div className={isDark ? "page dark" : "page"}>
      <div className="container">
        <Header name="Ngô Văn Huy" greeting={greeting} />

        <nav className="nav">
          <a href="#about">Giới thiệu</a>
          <a href="#skills">Kỹ năng</a>
          <a href="#education">Học vấn</a>
          <a href="#projects">Dự án</a>
          <a href="#contact">Liên hệ</a>
        </nav>

        <main>
          <Section title="Giới thiệu bản thân">
            <p>
              Tôi là Ngô Văn Huy, hiện đang học tập tại Học viện Công nghệ
              Bưu chính Viễn thông (PTIT). Tôi yêu thích lập trình và đang
              từng bước học thêm về phát triển web.
            </p>
          </Section>

          <Section title="Thông tin cá nhân">
            <p><strong>Họ và tên:</strong> Ngô Văn Huy</p>
            <p><strong>Trường:</strong> Học viện Công nghệ Bưu chính Viễn thông (PTIT)</p>
            <p><strong>Môn học:</strong> Lập trình Web</p>
            <p><strong>Định hướng:</strong> Phát triển kỹ năng lập trình và xây dựng ứng dụng web.</p>
          </Section>

          <Section title="Kỹ năng">
            <SkillList skills={skills} />
          </Section>

          <Section title="Học vấn">
            <p>
              Sinh viên Học viện Công nghệ Bưu chính Viễn thông (PTIT).
              Đang học các kiến thức cơ bản về lập trình, lập trình web và
              công nghệ phần mềm.
            </p>
          </Section>

          <Section title="Dự án">
            <ProjectList projects={projects} />
          </Section>

          <Section title="Mục tiêu">
            <p>
              Hoàn thiện kiến thức nền tảng về lập trình, nâng cao kỹ năng
              React và có thể tự xây dựng những trang web hoàn chỉnh.
            </p>
          </Section>

          <Section title="Liên hệ">
            <p><strong>Email:</strong> ngovanhuy@example.com</p>
            <p><strong>Trường:</strong> PTIT</p>
          </Section>

          <div className="action">
            <button onClick={() => setIsDark(!isDark)}>
              {isDark ? "Chuyển về nền sáng" : "Đổi màu nền"}
            </button>
          </div>
        </main>

        <footer>
          Bài thực hành Lập trình Web - React
        </footer>
      </div>
    </div>
  );
}

export default App;
