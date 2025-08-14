# QMS (Queue Management System) – Angular

A web-based queue management solution built with Angular for the frontend and a mock JSON server for API simulation.
The system is designed to handle patient registration, visit type selection, questionnaires, and real-time status updates.

## ✨ Features
- Visit Type Selection – SOC, Inpatient, General Visit

- Patient Validation – Scan and validate patient IDs

- Dynamic Questionnaires – Different forms based on visit type

- Registration Status – Success and failure pages

- Angular Material UI – Clean and responsive design

- Mock API – Simulated backend with json-server

- Modular Structure – Core, Shared, and Pages modules for maintainability

## 🧰 Tech Stack
- **Angular** (CLI) • RxJS • TypeScript
- UI: Angular Forms, HTTPClient
- Tooling: Node.js, npm

## 🚀 Getting Started
```bash
# 1) Install
npm install

# 2) Run dev server
npm start
# or
ng serve -o

# 3) Build
npm run build

🔑 Routes

| Route               | Component                 | Description            |
| ------------------- | ------------------------- | ---------------------- |
| `/`                 | VisitTypeComponent        | Choose visit type      |
| `/soc`              | SocComponent              | SOC visit form         |
| `/inpatient`        | InpatientComponent        | Inpatient registration |
| `/generalVisit`     | GeneralVisitComponent     | General visit form     |
| `/patientNotValid`  | PatientNotValidComponent  | Invalid patient page   |
| `/patientScanValid` | PatientScanValidComponent | Patient valid page     |
| `/questionarie`     | QuestionariesComponent    | Questionnaire form     |
| `/regSuccess`       | RegSuccessComponent       | Registration success   |
| `/regUnsuccess`     | RegUnsuccessComponent     | Registration failed    |

👨‍💻 Development Notes

- Make sure Node.js LTS (v18+) is installed.

- Use nvm to switch Node versions if needed.

- Update mock/db.json to customize mock API data.

- For production, replace the mock API with a real backend service.