# 🚀 Eventify - End-to-End Serverless API on Azure

![Azure](https://img.shields.io/badge/Azure-0078D4?style=for-the-badge&logo=microsoftazure&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Azure DevOps](https://img.shields.io/badge/Azure_DevOps-0078D7?style=for-the-badge&logo=azuredevops&logoColor=white)
![GitHub Actions](https://img.shields.io/github/actions/workflow/status/GiteshWork/azure-devops-eventify-project/main.yml?style=for-the-badge)

A comprehensive, hands-on project demonstrating a modern, secure, and automated serverless application built entirely on the Microsoft Azure cloud platform with a full CI/CD workflow using Azure DevOps.

---

## 🏛️ Project Architecture

This project implements a complete end-to-end solution, from code commit to a live, secure, and monitored API endpoint.



---

## ✨ Key Features & Technologies

This project was built to gain hands-on experience with a wide range of enterprise-grade cloud and DevOps services.

### Core Technologies
* **Compute:** **Azure Functions** (Node.js) for a scalable, event-driven serverless backend.
* **Database:** **Azure Cosmos DB** (NoSQL) for flexible, high-performance data storage.
* **CI/CD:** **Azure DevOps Pipelines** for a complete, multi-stage YAML-based build and deployment automation.

### Security & Governance
* **Secrets Management:** **Azure Key Vault** integrated with **Managed Identities** to eliminate plain-text secrets and securely manage the database connection string.
* **API Security:** **Microsoft Entra ID** (formerly Azure AD) to protect API endpoints using OAuth 2.0, ensuring only authenticated clients can perform sensitive operations.
* **Governance:** **Azure Policy** to enforce organizational standards and tagging on all deployed resources.

### Advanced DevOps
* **Package Management:** **Azure Artifacts** to host and consume private, reusable npm packages.
* **Custom Infrastructure:** **Azure VM** configured as a self-hosted build agent for greater control over the CI environment.
* **Monitoring:** **Azure Monitor** & **Application Insights** for live metrics, performance analysis, and proactive alerting on API failures.

---

## 🛠️ Setup and Deployment

This repository is configured with a multi-stage `azure-pipelines.yml` file that automates the entire deployment process.

1.  **Prerequisites:** An Azure subscription and an Azure DevOps organization.
2.  **Infrastructure:** The core Azure resources (Function App, Cosmos DB, Key Vault, etc.) are created using the Azure CLI.
3.  **CI/CD Pipeline:**
    * On every push to the `main` branch, the pipeline is triggered.
    * **Build Stage:** A build agent installs Node.js, runs `npm install` (restoring private packages from Azure Artifacts), and packages the application into a zip artifact.
    * **Deploy Stage:** The pipeline automatically deploys the build artifact to the Azure Function App.

---

This project serves as a practical, real-world example of building and managing a modern cloud application with a strong focus on security and automation.
