# 🔐 Credential Safety Checklist

**Module 5 | Channel Connection Lab**
*Name: _________________________________ Period: _______ Date: _________*

---

## What Is a Token?

When you connect your agent to a channel like Discord, you get a special code called a **token** (sometimes called an API key, secret, or credential).

A token is like a **digital key** to your account. Whoever has your token can:
- Send messages AS your bot
- Read messages your bot receives
- Control what your bot does
- Potentially delete your bot or abuse your account

**Tokens are powerful. They must be treated like passwords — or better.**

---

## 🎯 Part 1 — Understanding Tokens

Answer each question in your own words:

**1. What is a token, in your own words? (No copying the definition above!)**

_______________________________________________________________________________

_______________________________________________________________________________

**2. Why does a channel like Discord give you a token instead of just your password?**

*(Hint: think about what's safer to share with an app)*

_______________________________________________________________________________

_______________________________________________________________________________

**3. What could go wrong if someone else got your bot token?**

List at least 3 specific bad things:

1. _______________________________________________________________________________

2. _______________________________________________________________________________

3. _______________________________________________________________________________

**4. Real talk: If a friend asked to see your Discord bot token "just to help you debug," what would you say?**

_______________________________________________________________________________

_______________________________________________________________________________

---

## ✅ Part 2 — The Safety Checklist

Go through each item. Check it off when you've done it or confirmed it's safe.

### NEVER Share Your Token

☐ I have NOT posted my token in any chat, Discord channel, or group message  
☐ I have NOT included my token in a screenshot  
☐ I have NOT put my token directly in code that I pushed to GitHub  
☐ I have NOT told my token to anyone — including friends who are "just trying to help"  
☐ I understand that if I accidentally share my token, I need to **revoke it immediately** and get a new one  

---

### Store It Safely

☐ My token is stored in a **configuration file** (like `.env`), NOT hardcoded in my script  
☐ That config file is listed in `.gitignore` so it won't accidentally get committed to GitHub  
☐ I know where to find my token if I need it again (write the safe location — NOT the token itself!):

> My token is stored at: _________________________________________________
> *(example: "in my .env file in the project folder")*

---

### Revoke If Compromised

☐ I know how to revoke (cancel) my token if it gets leaked:

> To revoke my **Discord** bot token: Go to Discord Developer Portal → My Applications → Select app → Bot → **Reset Token**  
> To revoke other platform tokens: Ask your teacher or check the platform's developer settings

☐ I would tell my teacher immediately if I suspected my token was compromised

---

### On Shared Computers (Chromebooks / School Laptops)

☐ I know that shared computers mean other students might see files I leave open  
☐ I have NOT saved my token in a browser bookmark or auto-fill field  
☐ After lab, I will close any windows or tabs that show my token  
☐ I understand I should log out of developer portals when done on a shared device  

---

## 🧠 Part 3 — Credential Safety Concepts

Match each term to its definition. Write the letter on the line.

**Terms:**
___ Token &nbsp;&nbsp; ___ Revoke &nbsp;&nbsp; ___ .env file &nbsp;&nbsp; ___ .gitignore &nbsp;&nbsp; ___ Hardcoded &nbsp;&nbsp; ___ API

**Definitions:**
- **A.** A way for one program to talk to another — tokens are often used to authenticate these requests
- **B.** A secret code that proves you're authorized to control something (like a bot)
- **C.** To cancel a token so it no longer works — what you do when a token is compromised
- **D.** When a secret is written directly in your code instead of in a separate config file — **bad practice!**
- **E.** A file that stores environment variables (like tokens) separately from your code
- **F.** A file that tells Git which files to skip — used to prevent secrets from being uploaded

---

## 💡 Part 4 — The .env Pattern

Look at these two examples. Circle the SAFE one.

**Example A:**
```python
# In my bot.py file
DISCORD_TOKEN = "MTIzNDU2Nzg5OTMyMTM4NzY1Mw.Gh1234.some_long_secret_token_here"
bot.run(DISCORD_TOKEN)
```

**Example B:**
```python
# In my bot.py file
import os
DISCORD_TOKEN = os.environ.get("DISCORD_TOKEN")
bot.run(DISCORD_TOKEN)
```
```bash
# In my .env file (NOT uploaded to GitHub)
DISCORD_TOKEN=MTIzNDU2Nzg5OTMyMTM4NzY1Mw.Gh1234.some_long_secret_token_here
```

**Which is safer?** ☐ Example A &nbsp;&nbsp; ☐ Example B

**Why?** _______________________________________________________________________________

_______________________________________________________________________________

---

## 🚨 Part 5 — What Would You Do?

For each situation, describe what you should do:

**Scenario 1:** You accidentally paste your bot token into the class Discord server. You delete the message 10 seconds later. Are you safe?

_______________________________________________________________________________

*(Answer: NO — anyone who saw it in those 10 seconds could have copied it. Revoke immediately!)*

---

**Scenario 2:** You push your project to GitHub and realize your `.env` file was included. The commit is 3 days old.

What do you do?

_______________________________________________________________________________

_______________________________________________________________________________

*(Answer: Revoke the token NOW — it's been exposed for 3 days. Then remove it from the repo history.)*

---

**Scenario 3:** A website says "Enter your Discord bot token to use our free bot dashboard!" It looks official.

What do you do?

_______________________________________________________________________________

*(Answer: Do NOT enter your token. This is likely a scam. Only enter tokens in the official Discord Developer Portal or your own code.)*

---

## 📋 Final Sign-Off

I confirm that:

☐ I understand what a token is and why it must be protected  
☐ I have stored my token safely (not in shared code, not in chat)  
☐ I know how to revoke my token if needed  
☐ I would tell my teacher if my token was accidentally exposed  

**Signature / Initials:** _________________ **Date:** _________________

---

*Module 5 — Channel Connection Lab | openclaw-curriculum*
*Teacher note: Review Part 2 checklist items with students before token distribution*
