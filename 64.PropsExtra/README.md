A better and more meaningful commit message than just "few files removed" would clearly indicate **what** files were removed and **why**, even briefly.

Here are a few good formats you can use:

---

### ✅ General Improvements:

* `chore: remove unused files`
* `refactor: clean up unused components/files`
* `cleanup: deleted redundant files`
* `remove: old test files and unused assets`
* `fix: removed unnecessary files causing clutter`

---

### 🔍 More Specific (if you know what you removed):

* `remove: deleted legacy login page and old assets`
* `cleanup: removed unused Card component and styles`
* `chore: removed demo files from initial setup`

---

### 📌 If it's part of a bigger task:

* `feat: cleanup project structure, removed old files`
* `refactor: simplified folder structure by deleting obsolete files`

---

### 💡 Format Tip:

> Use a prefix like `feat`, `fix`, `chore`, `refactor`, `remove`, or `cleanup` to help categorize your commits better. Most teams follow this format for clarity.

---

Great question! Let's break it down simply:

---

## 🔌 What is a Port?

A **port** is like a **door or channel** through which your computer communicates with other programs or services — including your browser.

* Your computer can run many apps at once, and **each app listens on a different port**.
* Example:

  * Port `3000` → A React app (usually with Create React App)
  * Port `5173` → A Vite app (by default)
  * Port `80` → Default HTTP websites
  * Port `443` → Secure HTTPS websites

So when you open `http://localhost:5173`, you're saying:

> “Hey computer, show me what's running on your port 5173.”

---

## 🧪 Why `npm run dev` uses Port `5173`?

If you're using **Vite** (which it looks like you are), it **defaults to port `5173`** when you run `npm run dev`.

### 📦 Vite's default behavior:

* When you run `npm run dev`, it starts a **development server**.
* That server needs a port to listen on.
* Vite checks if port `5173` is free.

  * If yes → it uses it.
  * If no → it tries `5174`, then `5175`, and so on.

---

### 🛠 How to change the port in Vite?

You can manually tell Vite to use another port.

In `vite.config.js`, add:

```js
export default {
  server: {
    port: 3000, // or any number you want
  },
};
```

Now `npm run dev` will start at `http://localhost:3000`.

---

### 🧠 Simple Analogy

Think of your computer like an apartment building:

* Each **port** is a different **apartment door**.
* When you go to `localhost:5173`, you’re knocking on apartment 5173.
* If your app is inside, it will open the door and respond (i.e., show the website).

---

Absolutely! Let’s make it **super simple** — like I’m explaining it to a friend who’s just starting web development 👇

---

### 🔍 What is a Port? (Super Easy)

Imagine your computer is a big **building** 🏢.

Inside this building, you have many **rooms** — and each room has a **number** on the door.

These room numbers are called **ports**.

* Room 3000 → Maybe a React app is working there
* Room 5173 → Maybe Vite is working there
* Room 80 → The normal internet room
* Room 443 → The secure internet room

---

### 💻 So what happens when you run:

```bash
npm run dev
```

If you're using **Vite**, it’s like saying:

> "Hey computer, please open a small door (room) so I can view my app in the browser."

Vite usually opens **room 5173** (port 5173) by default.

So when you go to your browser and type:

```
http://localhost:5173
```

You're saying:

> “Show me the app running in room 5173 on my computer.”

And it shows your app!

---

### 🤔 Why always 5173?

Because **Vite is set to use port 5173 by default**.
But if that port is busy, it will automatically try 5174, 5175, etc.

---

### 🛠 Can I change the port?

Yes! You can change the room number (port).
In a file called `vite.config.js`, just add:

```js
export default {
  server: {
    port: 3000
  }
};
```

Now it will run at:

```
http://localhost:3000
```

---

### 🧠 Final Simple Summary:

* **Port = a numbered door** 🚪on your computer.
* **5173 = default door used by Vite** to show your app.
* You can **change the door number (port)** if you want.
* Opening `http://localhost:5173` means: “Show me what’s behind door 5173 on my computer.”

---

<Card name="Deepak"></Card>  this is already seen but lets see the new method

---

