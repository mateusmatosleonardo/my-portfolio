type StackItem = {
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  invert?: boolean;
};

type Stack = {
  frontend: StackItem[];
  backend: StackItem[];
  languages: StackItem[];
  infrastructure: StackItem[];
  codeVersioning: StackItem[];
  tools: StackItem[];
};

export const stack: Stack = {
  frontend: [
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      alt: "react-icon",
      title: "React / React Native",
      subtitle: "Biblioteca para interfaces web e mobile.",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg",
      alt: "nextjs-icon",
      title: "Next.js",
      subtitle: "Framework full-stack para aplicações React.",
      invert: true,
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-line.svg",
      alt: "expo-icon",
      title: "Expo",
      subtitle: "Framework para apps React Native sem configuração.",
      invert: true,
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg",
      alt: "svelte-icon",
      title: "Svelte",
      subtitle: "Framework reativo para web sem runtime.",
    },
  ],
  backend: [
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg",
      alt: "nodejs-icon",
      title: "Node.js",
      subtitle: "Ambiente de execução JavaScript no lado do servidor.",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
      alt: "nestjs-icon",
      title: "NestJS",
      subtitle: "Framework backend para Node.js com arquitetura modular.",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      alt: "expressjs-icon",
      title: "Express.js",
      subtitle: "Framework minimalista para aplicações web com Node.js.",
      invert: true,
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
      alt: "springboot-icon",
      title: "Spring Boot",
      subtitle: "Framework Java para construção de APIs e microsserviços.",
    },
  ],
  languages: [
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
      alt: "javascript-icon",
      title: "JavaScript ",
      subtitle: "Linguagem de programação voltada para web e mobile.",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
      alt: "typescript-icon",
      title: "TypeScript ",
      subtitle: "Superset do JavaScript com tipagem estática.",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      alt: "java-icon",
      title: "Java ",
      subtitle: "Linguagem orientada a objetos voltada para back-end.",
    },
  ],
  infrastructure: [
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg",
      alt: "docker-icon",
      title: "Docker",
      subtitle: "Containerização de aplicações para ambientes de desenvolvimento.",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      alt: "mysql-icon",
      title: "MySQL",
      subtitle: "Banco de dados relacional.",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg",
      alt: "postgresql-icon",
      title: "PostgreSQL",
      subtitle: "Banco de dados relacional.",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/railway/railway-original.svg",
      alt: "railway-icon",
      title: "Railway",
      subtitle: "Plataforma de deploy e hospedagem para aplicações.",
    },
  ],
  codeVersioning: [
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      alt: "git-icon",
      title: "Git",
      subtitle: "Sistema de controle de versão distribuído.",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      alt: "github-icon",
      title: "GitHub",
      subtitle: "Plataforma para hospedagem e colaboração de código com Git.",
      invert: true,
    },
  ],
  tools: [
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
      alt: "vscode-icon",
      title: "VS Code",
      subtitle: "Editor de código leve, extensível e multiplataforma.",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg",
      alt: "intellij-icon",
      title: "IntelliJ IDEA",
      subtitle: "IDE poderosa para desenvolvimento em Java e outras linguagens.",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg",
      alt: "notion-icon",
      title: "Notion",
      subtitle: "Organização pessoal e colaboração com notas e documentos.",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg",
      alt: "insomnia-icon",
      title: "Insomnia",
      subtitle: "Ferramenta para testes de APIs REST e GraphQL.",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-plain.svg",
      alt: "postman-icon",
      title: "Postman",
      subtitle: "Ferramenta para teste e documentação de APIs.",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg",
      alt: "slack-icon",
      title: "Slack",
      subtitle: "Plataforma de comunicação.",
    },
    // {
    //   image: "/icons/discord.svg", // Ícone custom, mesmo esquema
    //   alt: "discord-icon",
    //   title: "Discord",
    //   subtitle: "Plataforma de comunicação.",
    // }
  ],
};
