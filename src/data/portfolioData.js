// ============================================================
//  EDIT THIS FILE to change anything on your website.
//  You do not need to touch the components for normal updates.
// ============================================================

export const personal = {
  name: "Meghana G M",
  displayName: "MEGHANA G M",
  degree: "Bachelor of Engineering (B.E.)",
  branch: "Information Science and Engineering (ISE)",
  college: "Atria Institute of Technology",
  location: "Hebbal, Bengaluru, Karnataka",
  year: "3rd Year Engineering Student",
  email: "meghanagm2006@gmail.com",
  phone: "9019944902",
  linkedin: "https://www.linkedin.com/in/meghana-g-m-8202ab343/",
  // TODO: replace with your real GitHub link, e.g. "https://github.com/yourusername"
  github: "https://github.com/your-username",
  githubIsPlaceholder: true,
  // Put your photo in the "public" folder and name it profile.jpg
  photo: "/profile.jpg",
  photoFallback: "/profile-placeholder.svg",
  // Put your resume in the "public" folder and name it exactly like this
  resume: "/Meghana_G_M_Resume.pdf",
  introduction:
    "Hello! I'm Meghana G M, a third-year Information Science and Engineering student at Atria Institute of Technology, Bengaluru. I am passionate about programming, technology and developing creative solutions. I enjoy learning new technologies, improving my technical skills and building projects.",
  about:
    "I am Meghana G M, a third-year Information Science and Engineering student at Atria Institute of Technology, Bengaluru. I am passionate about technology, programming and continuous learning. I enjoy exploring new technologies, solving problems and developing my technical knowledge. I believe in improving myself through practical learning, teamwork and real-world projects.",
  roles: [
    "Information Science Engineering Student",
    "Aspiring Software Developer",
    "Tech Enthusiast",
    "Lifelong Learner",
  ],
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const education = [
  {
    title: "Bachelor of Engineering",
    place: "Atria Institute of Technology",
    location: "Hebbal, Bengaluru",
    detail: "Information Science and Engineering (ISE)",
    duration: "2024 – Present",
    status: "Currently pursuing 3rd Year",
    percentage: null,
  },
  {
    title: "Pre-University Course (PUC)",
    place: "Vasavi PU College, Challakere",
    location: "Challakere",
    detail: "Stream: PCMB",
    duration: "2022 – 2024",
    status: "Completed",
    percentage: 92,
  },
  {
    title: "SSLC",
    place: "Sri Swamy Vivekananda High School, Challakere",
    location: "Challakere",
    detail: "Secondary School Leaving Certificate",
    duration: "2022",
    status: "Completed",
    percentage: 94.24,
  },
];

// "icon" names are mapped to real icons inside Skills.jsx
export const skills = {
  technical: [
    { name: "C Programming", level: "Basic", icon: "c" },
    { name: "Python", level: "Basic", icon: "python" },
    { name: "Java", level: "Basic", icon: "java" },
    { name: "HTML", level: "", icon: "html" },
    { name: "CSS", level: "", icon: "css" },
    { name: "JavaScript", level: "", icon: "js" },
    { name: "React", level: "Learning", icon: "react" },
    { name: "MySQL", level: "Basic", icon: "db" },
  ],
  tools: [
    { name: "MS Word", icon: "word" },
    { name: "MS PowerPoint", icon: "ppt" },
    { name: "Visual Studio Code", icon: "code" },
    { name: "Git and GitHub", icon: "git" },
  ],
  soft: [
    { name: "Communication Skills", icon: "chat" },
    { name: "Team Collaboration", icon: "team" },
    { name: "Problem Solving", icon: "puzzle" },
    { name: "Time Management", icon: "clock" },
    { name: "Quick Learning", icon: "bolt" },
  ],
};

export const experience = [
  {
    title: "Student Volunteer",
    org: "Atria Institute of Technology – College Events",
    period: "2024 – Present",
    points: [
      "Assisted in organizing technical and cultural events on campus.",
      "Helped coordinate student registrations and manage event flow.",
      "Developed teamwork and communication skills through active participation.",
    ],
  },
  {
    title: "Self-Learning Projects",
    org: "Personal Initiative",
    period: "2023 – Present",
    points: [
      "Practiced basic C programming through online platforms.",
      "Created simple programs to improve logic-building skills.",
      "Explored MS PowerPoint for academic presentations.",
    ],
  },
];

// Edit the placeholders below once you have the real details.
// Leave "liveLink" or "codeLink" as "" and the button will show as "Coming soon".
export const projects = [
  {
    title: "Manoshakthi",
    subtitle: "Empowering Youth Mental Strength",
    description:
      "[Add a short description of Manoshakthi here: what it is and what you did.]",
    tech: ["Add technologies"],
    image: "",
    liveLink: "",
    codeLink: "",
  },
  {
    title: "Alumni Tracking System",
    subtitle: "",
    description:
      "[Add a short description of the Alumni Tracking System here: what it does and your role.]",
    tech: ["Add technologies"],
    image: "",
    liveLink: "",
    codeLink: "",
  },
  {
    title: "Python Programming Projects",
    subtitle: "",
    description:
      "[Add a short description of your Python programs here.]",
    tech: ["Python"],
    image: "",
    liveLink: "",
    codeLink: "",
  },
  {
    title: "Personal Portfolio Website",
    subtitle: "",
    description:
      "This website: a responsive personal portfolio built with React to present my education, skills and projects.",
    tech: ["React", "HTML", "CSS", "JavaScript"],
    image: "",
    liveLink: "",
    codeLink: "",
  },
];

// Replace the placeholders with real certificates when you have them.
// Put certificate images/PDFs in public/certificates/ and set file: "/certificates/name.pdf"
export const certifications = [
  {
    title: "Certificate Title (add yours)",
    org: "Organization Name",
    date: "Month Year",
    file: "",
  },
  {
    title: "Internship Certificate (add yours)",
    org: "Company Name",
    date: "Month Year",
    file: "",
  },
  {
    title: "Course Certificate (add yours)",
    org: "Platform / Institute",
    date: "Month Year",
    file: "",
  },
];

// Contact form setup:
// Leave "" to open the visitor's email app with the message filled in (works with no backend).
// To receive messages directly, create a free form at https://formspree.io and paste its URL here,
// for example "https://formspree.io/f/xxxxxxx".
export const contactForm = {
  formspreeUrl: "",
};
