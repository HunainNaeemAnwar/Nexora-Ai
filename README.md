# Nexora Chatbot — React + Tailwind CSS + Google Gen AI

A clean production-ready AI chatbot built using **React**, **Tailwind CSS**, and **Google's Gemini SDK**. Designed for developers who value performance, simplicity, and elegant UI. It supports **persistent chat history**, **real-time AI conversations**, and can be deployed with minimal setup.

---

## Features

-  Real-time AI chat using Gemini (Google Generative AI SDK)
-  Persistent conversation history using `useState` 
- Clean, responsive UI with Tailwind CSS
- Secure API key via `.env` config
- Uses **Lucide React Icons**
- Optional 3D-ready setup with `three.js` and `react-three-fiber` (for future enhancement)

---

##  Tech Stack

- **React 19** – Core frontend framework
- **Tailwind CSS** – For styling and layout
- **Vite** – Lightning-fast build tool
- **Google Gemini SDK** – AI backend
- **Lucide React** – Icon library
- **Three.js + React Three Fiber** – (Optional) 3D support
- **TypeScript** – Type safety and better DX
- **useState** – For storing conversations



## Getting Started

### 1. Clone this repo
```bash
git clone https://github.com/HunainNaeemAnwar/Nexora-Ai.git
cd Nexora-Ai
```

### 2. Install dependencies
```bash
npm install
```
### 3. Add your Gemini API key
Create a .env file in the root and add:
```env
GEMINI_API_KEY=your_google_api_key_here
```
### 4. Run the dev server
```bash
npm run dev
```

