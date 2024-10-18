export interface PortfolioFormOptions {
  techStack?: string[];
  goldCircleWhy?: string[];
  goldCircleHow?: string[];
  goldCircleWhat?: string[];
}

export interface PortfolioFormValues {
  techStack: string[];
  goldCircleWhy: string[];
  goldCircleHow: string[];
  goldCircleWhat: string[];
  imageLink: string;
  githubLink: string;
  deployLink: string;
}

export interface PortfolioRecord {
  id: string;
  title: string;
  stack: string[];
  description: string;
  image?: string;
  repository?: string;
  deploy?: string;
}
