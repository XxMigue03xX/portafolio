# portafolio

Personal portfolio website built to present my professional profile in a clear and accessible way.
It showcases relevant information about me, my main projects, technical skills, technologies, and contact details.
This is a personal portfolio project intended to support my job search and professional visibility.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [How to Run](#how-to-run)
- [Usage](#usage)
- [Screenshots or Evidence](#screenshots-or-evidence)
- [Notes](#notes)
- [Limitations](#limitations)
- [Status](#status)
- [Author](#author)

## Features
- Dark mode support
- Spanish / English language toggle
- Responsive design for different screen sizes
- Downloadable or attached CV
- Contact information section
- Main projects showcase
- Technologies and skills display
- Reusable component-based structure for easier maintenance

## Tech Stack

**Frontend**
- React
- Vite
- JavaScript
- CSS

**Architecture / Implementation**
- Reusable components
- List rendering
- Constants-based data loading for projects and technologies

**Deployment**
- Netlify

**Tools**
- npm
- Git
- GitHub

## Project Structure
- `src/assets`: Static resources such as images and visual assets
- `src/components`: Reusable UI components with their own modular CSS styles
- `src/constants`: `index.js` containing the structured data for projects and skills used to render lists dynamically
- `src/App.jsx`: Main application entry where reusable components are composed
- `src/main.jsx`: React application bootstrap
- `index.html`: Main HTML template used by Vite

## How to Run

### Prerequisites
- Node.js installed
- npm installed
- Git installed

### 1. Clone the repository
```bash
git clone [REPOSITORY URL]
cd portafolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the project

```bash
npm run dev
```

### 4. Open / test the project

Open your browser and go to:

```bash
http://localhost:5173
```

You can also test the responsive behavior using your browser developer tools or responsive testing extensions.

## Usage

1. Open the portfolio in the browser.
2. Navigate through the sections to view personal information, skills, and featured projects.
3. Switch between Spanish and English if needed.
4. Toggle dark mode according to your preference.
5. Review contact information and CV availability.

## Screenshots or Evidence

* Live portfolio: [https://miguelgaravito.netlify.app/](https://miguelgaravito.netlify.app/)

## Notes

* This is a personal portfolio project created to present my profile, projects, and skills in a professional way.
* Project and technology information is loaded from constants to improve maintainability and simplify updates.
* The repository is intended as a living portfolio and may continue evolving over time.

## Limitations

* Some future achievements, events, and additional sections are still pending implementation.
* No CMS or admin panel is included for content management.

## Status

Completed portfolio project, currently under maintenance and continuous improvement. Future updates are planned to include more sections, achievements, and relevant professional milestones.

## Author

**Miguel Garavito**

- **Portfolio:** [miguelgaravito.netlify.app](https://miguelgaravito.netlify.app/)
- **LinkedIn:** [linkedin.com/in/miguel-ángel-garavito-camargo](https://co.linkedin.com/in/miguel-%C3%A1ngel-garavito-camargo)

## License

This project is for personal portfolio and professional presentation purposes.