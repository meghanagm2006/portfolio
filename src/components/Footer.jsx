import { personal } from "../data/portfolioData.js";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {personal.name} · {personal.branch} · {personal.college}
      </p>
    </footer>
  );
}
