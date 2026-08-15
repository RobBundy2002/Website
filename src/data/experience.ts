export interface ExperienceItem {
  role: string;
  organization: string;
  dates: string;
  summary: string;
  themes: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: 'Software Engineer II',
    organization: 'GA-Intelligence / General Atomics',
    dates: 'Mar 2026-Present',
    summary:
      'Owns backend and platform-oriented engineering work across Java services, release workflows, developer tooling, and Kubernetes-adjacent delivery concerns.',
    themes: ['Java', 'Spring Boot', 'CI/CD', 'Docker', 'Kubernetes', 'Helm', 'technical leadership']
  },
  {
    role: 'Software Engineer I',
    organization: 'GA-Intelligence / General Atomics',
    dates: 'Jun 2025-Mar 2026',
    summary:
      'Built production software with emphasis on service integration, schema and conversion tooling, testing, release ownership, and maintainable team workflows.',
    themes: ['Spring Cloud Stream', 'Kafka', 'GitLab', 'testing', 'developer tooling', 'feature ownership']
  },
  {
    role: 'Backend Software Engineering Intern',
    organization: 'GA-Intelligence / formerly GA-CCRI',
    dates: 'Jun 2024-Aug 2024',
    summary:
      'Contributed to backend engineering work while building familiarity with professional development practices, service boundaries, and team delivery.',
    themes: ['backend engineering', 'Java', 'Docker', 'CI/CD', 'code review']
  },
  {
    role: 'Undergraduate Teaching Assistant',
    organization: 'University of Virginia Department of Computer Science',
    dates: 'Aug 2023-May 2025',
    summary:
      'Supported students through instruction, review, debugging help, and explanation of core programming and software engineering concepts.',
    themes: ['mentoring', 'technical communication', 'debugging', 'instruction']
  }
];

export const education = [
  {
    school: 'Georgia Institute of Technology',
    credential: 'M.S. Computer Science',
    detail: 'Specialization in Human-Computer Interaction',
    dates: 'Expected Spring 2028',
    note: 'GPA: 4.0'
  },
  {
    school: 'University of Virginia',
    credential: 'B.A. Computer Science',
    detail: 'Minor in Religious Studies',
    dates: 'Graduated May 2025'
  }
];
