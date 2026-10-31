# Spot the Phish: Phishing Awareness Website

An interactive website that teaches beginners how to recognise phishing attacks, with a clickable fake email, a real-or-fake website game, and a quiz.

Built for the **CodeAlpha Cyber Security Internship, Task 2: Phishing Awareness Training**.

## Features

- **Interactive fake email:** tap each red underline to learn why it is a warning sign (fake sender, urgency, generic greeting, threats, bad link, spelling mistakes).
- **What phishing is:** a simple explanation of phishing and social engineering.
- **Types of phishing:** email phishing, spear phishing, fake websites, smishing (SMS), vishing (calls), and fake job offers.
- **Real or fake website game:** judge web addresses and learn to spot look-alike domains such as `paypa1.com`.
- **Quiz:** 6 questions with instant feedback, explanations, and a final score.
- **Safety tips:** practical steps to avoid becoming a victim and what to do if you clicked.
- Works on phones and computers, and supports light and dark mode.

## Project Structure

```
CodeAlpha_PhishingAwareness/
├── index.html   # Page structure and content
├── style.css    # Design, colours, layout
├── script.js    # Interactive email, URL game, and quiz logic
└── README.md
```

## How to Run

**Option 1: VS Code with Live Server**
1. Install the **Live Server** extension in VS Code.
2. Open the project folder (**File → Open Folder**).
3. Right-click `index.html` and choose **Open with Live Server**.

**Option 2: Open directly**
- Double-click `index.html` to open it in your browser.

No installation, build step, or internet connection is needed.

## Customising

- **Colours:** edit the variables at the top of `style.css` (`--bg`, `--card`, `--ink`, `--brand`, and so on).
- **Quiz questions:** edit the `Q` list in `script.js`. Each entry has the question, the options, the index of the correct option (starting from 0), and an explanation.
- **Website game:** edit the `urls` list in `script.js`.
- **Text content:** edit `index.html`.

## Technologies Used

- HTML5
- CSS3 (custom properties, flexbox, grid)
- Vanilla JavaScript (no libraries)

## Key Lessons

1. Slow down. Urgency is the biggest warning sign.
2. Check the sender's real address and where a link really goes.
3. Type website addresses yourself or use bookmarks.
4. Never share OTPs, PINs, or passwords.
5. Use two-factor authentication and a password manager.
6. If you clicked, change your password and report it immediately.

## Author

BHAVANA
CodeAlpha Cyber Security Intern
[LinkedIn](https://www.linkedin.com/in/bhavana-kashyap-2b3757379?utm_source=share_via&utm_content=profile&utm_medium=member_android) · [GitHub](https://github.com/bhavana364)

## Disclaimer

All emails, addresses, and brand names in this project are fictional examples used only for education.