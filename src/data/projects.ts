import type { Project, Language } from '../types';

export const getProjects = (language: Language): Project[] => [
  {
    name: "Código de Estrada Moz",
    description: language === 'pt' 
      ? "Aplicação educacional líder em Moçambique para preparação de exames de carta de condução" 
      : "Leading educational app in Mozambique for driving license exam preparation",
    tech: ["React Native", "Expo", "Firebase", "AdMob"],
    downloads: "5000+",
    rating: "4.5",
    features: language === 'pt'
      ? ["Simulados práticos", "Sistema de pontuação", "Modo offline"]
      : ["Practice exams", "Scoring system", "Offline mode"],
    link: "https://play.google.com/store/apps/details?id=com.codigoestradamoz.app",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Simulador Carta Moz",
    description: language === 'pt'
      ? "Simulador avançado de exames com estatísticas detalhadas"
      : "Advanced exam simulator with detailed statistics",
    tech: ["React Native", "Expo", "SQLite"],
    downloads: "1000+",
    rating: "4.3",
    features: language === 'pt'
      ? ["Estatísticas avançadas", "Histórico de tentativas", "Análise de desempenho"]
      : ["Advanced statistics", "Attempt history", "Performance analysis"],
    link: "https://play.google.com/store",
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "HighNoon Delivery",
    description: language === 'pt'
      ? "Sistema completo de delivery com rastreamento em tempo real"
      : "Complete delivery system with real-time tracking",
    tech: ["React Native", "Firebase", "Google Maps API"],
    features: language === 'pt'
      ? ["Rastreamento GPS", "Notificações push", "Sistema de pagamento"]
      : ["GPS tracking", "Push notifications", "Payment system"],
    link: "https://play.google.com/store",
    color: "from-orange-500 to-red-500"
  },
  {
    name: "Metical Cash",
    description: language === 'pt'
      ? "Aplicação de gestão financeira pessoal"
      : "Personal financial management app",
    tech: ["React Native", "Expo", "SQLite", "Charts"],
    features: language === 'pt'
      ? ["Controle de gastos", "Gráficos detalhados", "Categorias customizáveis"]
      : ["Expense tracking", "Detailed charts", "Customizable categories"],
    link: "https://play.google.com/store",
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "EGF Connect",
    description: language === 'pt'
      ? "Plataforma de comunicação corporativa"
      : "Corporate communication platform",
    tech: ["React Native", "Node.js", "MySQL", "Socket.io"],
    features: language === 'pt'
      ? ["Mensagens instantâneas", "Feed de notícias", "Documentos compartilhados"]
      : ["Instant messaging", "News feed", "Shared documents"],
    link: "#",
    color: "from-indigo-500 to-blue-500"
  }
];