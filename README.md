# AIsh - AI-Powered Career Platform for Uzbekistan

AIsh is an intelligent career platform designed to address the employment challenges in Uzbekistan. The platform combines AI-powered job matching, educational courses, and personalized career navigation to help job seekers find opportunities and develop their skills.

## Project Overview

AIsh solves critical problems in the Uzbekistan labor market:

- **Transparent Job Market**: Provides a centralized platform for job postings with AI-powered matching between candidates and vacancies
- **Skill Development**: Offers courses and training programs to help users acquire in-demand skills
- **Career Navigation**: AI analyzes user profiles and suggests career paths based on their skills and goals
- **Intelligent Matching**: Calculates compatibility percentage between candidate skills and job requirements

The platform addresses the fact that only 1.6% of unemployed people in Uzbekistan use employment centers, while most job searches happen through informal channels. AIsh creates a transparent, efficient labor market using artificial intelligence.

## Features

### Job Matching with AI
Candidates input their skills, and the AI calculates a compatibility percentage with available job positions. Employers receive a ranked list of top 5 most suitable candidates.

### Education and Retraining
The platform offers courses in office and digital skills from employers and industry experts. AI recommends what to learn to advance from Junior to Middle or Senior levels. Courses include final tests with badges and XP rewards.

### Career Path Navigation
AI builds personalized career trajectories based on user skills. For example, if someone wants to become a logistics manager, the system suggests specific skills to develop: Excel, communication, ERP systems.

### User Profiles
Users can showcase their skills, completed courses, certificates, goals, and work experience. Employers can see achievements such as test scores and skill levels.

## Technology Stack

- **React 18** - UI library for building the interface
- **TypeScript** - Type-safe JavaScript for better code quality
- **Vite** - Fast build tool and development server
- **TailwindCSS** - Utility-first CSS framework for styling

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

Install project dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Build the project for production:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Landing page section components
│   ├── Hero.tsx        # Hero section with main CTA
│   ├── IntroStats.tsx  # Statistics about labor market
│   ├── ProblemSolution.tsx  # Problems and solutions
│   ├── Courses.tsx     # Available courses showcase
│   ├── Team.tsx        # Team members information
│   ├── WhyUs.tsx       # Platform advantages
│   ├── Roadmap.tsx     # Development roadmap
│   ├── Demo.tsx        # Interactive AI matching demo
│   ├── TechStack.tsx   # Technology stack
│   └── Footer.tsx      # Footer section
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## Demo Functionality

The Demo section provides an interactive demonstration of the AI matching algorithm:

1. Users input their skills separated by commas
2. The system calculates compatibility percentage with predefined job positions:
   - Frontend Developer
   - SMM Specialist
   - Logistics Manager
   - Call Center Operator
3. Users receive course recommendations to improve their match percentage
4. Each recommended course shows XP rewards, badges, and duration

## Deployment

The project is configured for deployment to GitHub Pages. See `DEPLOY.md` for detailed deployment instructions.

## Team

- **Li Artur** - Backend Developer
- **Danaev Alisher** - System Analyst
- **Akimjonov Azimjon** - Data Engineer

## License

AI500 Hackathon - AIsh Demo
