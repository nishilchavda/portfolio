***

# Portfolio Website

Welcome to my personal portfolio! This project showcases my skills, projects, and provides a way for visitors to get in touch with me. It is built with a modern tech stack focused on performance and aesthetic UI.

## 🚀 Tech Stack
* **Frontend:** React.js, Tailwind CSS
* **Backend:** Vercel Serverless Functions (Node.js)
* **Email Service:** Nodemailer
* **Deployment:** Vercel

## 📂 Project Structure
```text
PORTFOLIO/
├── api/             # Serverless backend functions
│   └── sendEmail.js # Nodemailer logic
├── client/          # React frontend
├── vercel.json      # Routing configuration
└── package.json
```

## 🛠️ Local Development

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed.

### 2. Installation
Clone the repository and install dependencies:

```bash
# Install root dependencies (for the API)
npm install

# Navigate to client and install dependencies
cd client
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory to run the email service locally:

```env
EMAIL=your-email@gmail.com
PASSWORD=your-app-password
```

### 4. Running the App
Since this is a Vercel-optimized project, you can run the frontend locally:

```bash
cd client
npm run dev
```

## 🌐 Deployment
This project is deployed on Vercel. 

**Deployment Steps:**
1. Connect your GitHub repository to Vercel.
2. In the Vercel Dashboard, go to **Settings > Environment Variables**.
3. Add `EMAIL` and `PASSWORD` (for Nodemailer).
4. Ensure the **Root Directory** is set to `./` and your build command points to `cd client && npm run build`.

## 📬 Contact
* **Name:** Nishil Chavda
* **GitHub:** https://github.com/nishilchavda

---
*Built with ❤️ by Nishil Chavda*