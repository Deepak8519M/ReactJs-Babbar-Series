The `useEffect` hook is one of the most commonly used hooks in **React**. It lets you perform **side effects** in function components.

---

### 🔄 What are Side Effects?

Side effects are operations that interact with the outside world or affect things outside the current function scope, such as:

* Fetching data from an API
* Updating the DOM manually
* Setting up a subscription or timer
* Changing the title of the webpage

---

### ✅ Syntax of `useEffect`

```js
import { useEffect } from "react";

useEffect(() => {
  // Your side effect code here

  return () => {
    // Optional cleanup code
  };
}, [dependencies]);
```

---

### 🔍 Breakdown

* `() => { ... }` — The main function runs **after** the component renders.
* `return () => { ... }` — Optional cleanup function runs **before** the component unmounts or before the effect re-runs.
* `[dependencies]` — Controls **when** the effect runs.

---

### 🧠 Example 1: Run once on mount

```js
useEffect(() => {
  console.log("Component mounted");
}, []);
```

> The empty dependency array `[]` means it runs **only once** after the initial render.

---

### 🔁 Example 2: Run when a value changes

```js
useEffect(() => {
  console.log("Count changed:", count);
}, [count]);
```

> This effect runs whenever `count` changes.

---

### 🧹 Example 3: Cleanup

```js
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Tick");
  }, 1000);

  return () => {
    clearInterval(timer); // cleanup
  };
}, []);
```

---

### 🛠 Why is `useEffect` Useful?

* Replaces lifecycle methods like `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` in class components.
* Keeps your component logic cleaner and more consistent.

---

