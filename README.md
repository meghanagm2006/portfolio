# Meghana G M – Personal Portfolio (React + Vite)

A pastel-gradient, glassmorphism portfolio built with React. Every piece of text lives in **one file**:
`src/data/portfolioData.js`. For normal updates, you only edit that file.

---

## Folder structure

```
meghana-portfolio/
├── index.html                  <- the page shell (title, fonts)
├── package.json                <- list of libraries the project uses
├── vite.config.js              <- build settings
├── README.md                   <- this guide
├── public/                     <- files that are copied as-is to your website
│   ├── favicon.svg             <- small browser-tab icon
│   ├── profile-placeholder.svg <- shown until you add your photo
│   ├── profile.jpg             <- (YOU ADD) your photo
│   ├── Meghana_G_M_Resume.pdf  <- (YOU ADD) your resume
│   └── certificates/           <- (YOU ADD) certificate images / PDFs
└── src/
    ├── main.jsx                <- starts React
    ├── App.jsx                 <- puts all sections together
    ├── data/
    │   └── portfolioData.js    <- ALL your information (edit this!)
    ├── hooks/
    │   ├── useTyping.js        <- typing animation
    │   └── useActiveSection.js <- highlights current menu item
    ├── components/
    │   ├── Navbar.jsx  Hero.jsx  About.jsx  Education.jsx  Skills.jsx
    │   ├── Experience.jsx  Projects.jsx  Certifications.jsx  Contact.jsx
    │   ├── Footer.jsx  SectionTitle.jsx  Reveal.jsx  ProfilePhoto.jsx
    └── styles/
        └── index.css           <- all colours, fonts and layout
```

---

## 1. Install the tools (one time only)

1. Install **Node.js (LTS version)** from https://nodejs.org and run the installer.
2. Install **Visual Studio Code** from https://code.visualstudio.com.
3. Check Node works: open a terminal and type `node -v`. You should see a version number.

## 2. Create and open the project

You already have the project folder (this one). Unzip it, then:

1. Open VS Code → **File → Open Folder** → choose the `meghana-portfolio` folder.
2. Open the built-in terminal: **Terminal → New Terminal**.

(If you ever want to create a React project from scratch instead, the command is
`npm create vite@latest my-site -- --template react`, but you do not need it now.)

## 3. Install the libraries

In the VS Code terminal, type this and press Enter:

```
npm install
```

Wait until it finishes. This downloads React, Vite and React Icons into a `node_modules` folder.
(You never edit or upload `node_modules`.)

## 4. Run the website

```
npm run dev
```

The terminal shows a link like `http://localhost:5173`. Hold **Ctrl** and click it (or paste it into
Chrome). Your portfolio opens. Every time you save a file, the page updates by itself.
Press **Ctrl + C** in the terminal to stop.

## 5. Add your profile photo

1. Pick a clear, front-facing photo, ideally square, under 500 KB.
2. Rename it exactly **`profile.jpg`**.
3. Copy it into the **`public`** folder.
4. Refresh the page. If the file is missing, a soft purple placeholder shows instead.

(Using a `.png`? Change `photo: "/profile.jpg"` to `"/profile.png"` in `src/data/portfolioData.js`.)

## 6. Add your resume PDF

1. Rename your resume to **`Meghana_G_M_Resume.pdf`**.
2. Copy it into the **`public`** folder.
3. The "Download Resume" button will now work. Please make sure the resume describes you as a
   **third-year** student (not the old first-year version).

## 7. Edit your details

Open `src/data/portfolioData.js`. You can change:

- **GitHub link**: replace `https://github.com/your-username` and set `githubIsPlaceholder: false`.
- **Projects**: fill in descriptions, technologies, and add `image`, `liveLink`, `codeLink`.
  (Put project images in `public/` and write `image: "/my-project.png"`.)
- **Certifications**: replace the three placeholder cards. Put files in `public/certificates/`
  and write `file: "/certificates/my-certificate.pdf"`.
- Skills, experience, education, email, phone, LinkedIn.

Only add things that are true. Recruiters may ask about anything on the page.

## 8. Contact form: how it works

- **Default (no setup):** when someone clicks "Send Message", their own email app opens with your
  address and their message already filled in. This works everywhere with no backend.
  The email address and phone number in the Contact section are also clickable.
- **Optional (messages go straight to your inbox):** a website cannot send email by itself.
  You need an email service. The easiest free one is **Formspree**:
  1. Sign up at https://formspree.io and create a form using `meghanagm2006@gmail.com`.
  2. Copy the form URL (looks like `https://formspree.io/f/abcdwxyz`).
  3. Paste it in `src/data/portfolioData.js` as `formspreeUrl: "https://formspree.io/f/abcdwxyz"`.

## 9. Deploy (put it online for free)

First make the production version:

```
npm run build
```

This creates a `dist` folder. Then choose one:

**Option A – Netlify (easiest, no Git needed)**
1. Go to https://app.netlify.com/drop and sign in.
2. Drag the **`dist`** folder onto the page. You get a live link in seconds.
3. You can rename the site in Site settings → Change site name.

**Option B – Vercel**
1. Push the project to GitHub, then go to https://vercel.com and sign in with GitHub.
2. Click **Add New → Project**, pick your repository, and click **Deploy**
   (Vercel detects Vite automatically).

**Option C – GitHub Pages**
1. Push the project to a GitHub repository.
2. Run `npm run build`, then publish the `dist` folder (for example with the `gh-pages` package).

After deploying, add the live link to your resume and LinkedIn.

## Common problems

- **`npm` is not recognized:** close and reopen VS Code after installing Node.js.
- **Photo not showing:** check the name is exactly `profile.jpg` and that it is inside `public`.
- **Resume download gives an error:** the PDF is missing from `public` or is named differently.
- **Page is blank:** read the red error in the terminal or browser console (press F12).
