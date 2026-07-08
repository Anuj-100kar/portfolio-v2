export interface ContactInfo {
  id: number;
  title: string;
  value: string;
  icon: string;
  link: string;
}

export const contactInfo: ContactInfo[] = [
  {
    id: 1,
    title: "Email",
    value: "anuj@example.com",
    icon: "📧",
    link: "mailto:anuj@example.com",
  },
  {
    id: 2,
    title: "LinkedIn",
    value: "linkedin.com/in/anuj",
    icon: "💼",
    link: "https://linkedin.com/in/your-linkedin",
  },
  {
    id: 3,
    title: "GitHub",
    value: "github.com/anuj",
    icon: "💻",
    link: "https://github.com/your-github",
  },
  {
    id: 4,
    title: "Resume",
    value: "Download PDF",
    icon: "📄",
    link: "/resume.pdf",
  },
];