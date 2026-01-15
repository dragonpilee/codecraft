# CodeCraft Innovations

Welcome to CodeCraft Innovations, a cyberpunk-themed portfolio built with **React**, **Vite**, **TypeScript**, and **Docker**.

## 🚀 Quick Start

This project is designed to run entirely within Docker. No local Node.js installation is required.

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running.

### Run the App

1. **Clone the repository**:
   ```bash
   git clone https://github.com/dragonpilee/codecraft.git
   cd codecraft
   ```

2. **Start the container**:
   ```bash
   docker-compose up -d --build
   ```

3. **Open in Browser**:
   Visit [http://localhost:8081](http://localhost:8081)

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Custom CSS (Cyberpunk/Neon theme)
- **Containerization**: Docker (Node.js build stage + Nginx serve stage)

## 📁 Project Structure

- `src/`: Source code including components and assets.
- `Dockerfile`: Multi-stage build definition.
- `docker-compose.yml`: Container orchestration config.

## 📄 License

[MIT](LICENSE)
