import type { Experience, Language } from '../types';

export const getExperiences = (language: Language): Experience[] => [
  {
    title: language === 'pt' ? "Desenvolvedor & Técnico Informático" : "Developer & IT Technician",
    company: "CIUP",
    location: "Maputo, Moçambique",
    period: language === 'pt' ? "2022 - Atual" : "2022 - Current",
    current: true,
    responsibilities: language === 'pt' 
      ? [
          "Desenvolvimento e manutenção de aplicações mobile com React Native/Expo",
          "Publicação e gestão de aplicativos na Google Play Store com milhares de downloads",
          "Administração de servidores Linux (Ubuntu/CentOS) e configuração de ambientes",
          "Integração de Firebase (Authentication, Firestore, Cloud Functions, Analytics)",
          "Desenvolvimento de APIs REST com Node.js para suporte mobile",
          "Gestão de bases de dados MySQL e PostgreSQL",
          "Implementação de sistemas de monetização (AdMob, In-App Purchases)"
        ]
      : [
          "Development and maintenance of mobile applications with React Native/Expo",
          "Publishing and managing apps on Google Play Store with thousands of downloads",
          "Linux server administration (Ubuntu/CentOS) and environment configuration",
          "Firebase integration (Authentication, Firestore, Cloud Functions, Analytics)",
          "REST API development with Node.js for mobile support",
          "MySQL and PostgreSQL database management",
          "Implementation of monetization systems (AdMob, In-App Purchases)"
        ],
    achievements: language === 'pt'
      ? [
          "Publicação de 5+ aplicações na Play Store",
          "Mais de 6.000 downloads totais",
          "Implementação de CI/CD com GitHub Actions"
        ]
      : [
          "Published 5+ applications on Play Store",
          "Over 6,000 total downloads",
          "Implemented CI/CD with GitHub Actions"
        ]
  },
  {
    title: language === 'pt' ? "Desenvolvedor FullStack" : "FullStack Developer",
    company: "Prosoft",
    location: "Maputo, Moçambique",
    period: "2021 - 2022",
    current: false,
    responsibilities: language === 'pt'
      ? [
          "Desenvolvimento de aplicações web com PHP, JavaScript e frameworks modernos",
          "Criação de aplicativos Android nativos com Java",
          "Integração de sistemas legados com novas tecnologias",
          "Desenvolvimento de APIs REST para comunicação entre sistemas",
          "Manutenção de bases de dados MySQL e otimização de queries"
        ]
      : [
          "Web application development with PHP, JavaScript and modern frameworks",
          "Native Android app creation with Java",
          "Integration of legacy systems with new technologies",
          "REST API development for inter-system communication",
          "MySQL database maintenance and query optimization"
        ],
    achievements: language === 'pt'
      ? [
          "Migração de aplicação Android nativa para React Native",
          "Redução de 40% no tempo de desenvolvimento"
        ]
      : [
          "Migration of native Android app to React Native",
          "40% reduction in development time"
        ]
  }
];