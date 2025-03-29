# 🚀 AI Mock Interview System

An AI-powered mock interview platform built using **Next.js (TypeScript), Firebase, Clerk authentication, Tailwind CSS, and the Gemini API**. This system provides **real-time, AI-driven interviews** with instant feedback and scoring to help users prepare for job interviews effectively.

## 🎯 Features
- 🔑 **User Authentication** (Clerk + Firebase)
- 📄 **AI-Generated Interview Questions** (Gemini API)
- 🎙️ **Webcam & Microphone Support** for Answering
- 📊 **AI-Based Feedback, Score & Analysis**
- 📁 **User Interview History Storage** (Firebase)

## 🏗️ Tech Stack
- **Frontend:** Next.js (TypeScript), Tailwind CSS
- **Backend:** Firebase (Database & Authentication)
- **Authentication:** Clerk
- **AI Model:** Gemini API

## 📌 How It Works
1. **User Logs In/Signs Up** using Clerk authentication.
2. **Creates an Interview** by entering:
   - Job Role
   - Experience Level
   - Job Description
   - Tech Stack
3. **Gemini API Generates AI-Based Questions.**
4. **User Answers Questions** via Webcam & Microphone.
5. **AI Processes Responses** and provides:
   ✅ Instant Feedback  
   ✅ Question-wise Analysis  
   ✅ Score & Improvement Suggestions  
6. **Final Report is Displayed** and stored in Firebase for future reference.

## 🛠️ Installation & Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/ai-mock-interview.git
   cd ai-mock-interview
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:** Create a `.env.local` file and add:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=<your-clerk-api-key>

   # Firebase
   VITE_FIREBASE_API_KEY=<your-firebase-api-key>
   VITE_FIREBASE_AUTH_DOMAIN=<your-firebase-auth-domain>
   VITE_FIREBASE_PROJECT_ID=<your-firebase-project-id>
   VITE_FIREBASE_STORAGE_BUCKET=<your-firebase-storage-bucket>
   VITE_FIREBASE_MESSAGING_SENDER_ID=<your-firebase-messaging-sender-id>
   VITE_FIREBASE_APP_ID=<your-firebase-app-id>

   # Gemini API Key
   VITE_GEMINI_API_KEY=<your-gemini-api-key>
   ```
4. **Run the development server:**
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📸 Screenshots
_Add screenshots of your UI here._

## 🚀 Deployment
- Deploy using **Vercel**:
  ```bash
  vercel
  ```
- Or deploy manually on Firebase Hosting or any cloud platform.

## 🤝 Contributing
Contributions are welcome! Feel free to **fork, improve, and submit a pull request**.

## 📜 License
This project is licensed under the **MIT License**.

---
### 💡 Need Help?
If you have any questions, feel free to open an **issue** or contact me on **LinkedIn/GitHub**. 😃
