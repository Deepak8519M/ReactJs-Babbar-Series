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

Great! Let’s go **deep and complete** into `useEffect`, but in a **simple and structured** way. I'll explain **everything** — no skips, no over-complication.

---

## ✅ What is `useEffect`?

`useEffect` is a **React Hook** that lets you **run side effects** in function components — just like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` combined in class components.

```js
import { useEffect } from "react";
```

---

## 🧠 Syntax

```js
useEffect(() => {
  // 1. Code runs after render

  return () => {
    // 2. (Optional) Cleanup code runs before next effect or unmount
  };
}, [dependencies]);
```

---

## 💡 Types of `useEffect` (Variations)

---

### 1. 📦 `useEffect` with No Dependency

```js
useEffect(() => {
  console.log("Runs after every render");
});
```

* **Runs after every render (initial + updates)**
* No second argument = no optimization

---

### 2. 🕐 `useEffect` with Empty Dependency Array `[]`

```js
useEffect(() => {
  console.log("Runs only once after initial render");
}, []);
```

* **Mimics `componentDidMount`**
* Used for:

  * Fetching data on load
  * Setting up initial event listeners
  * One-time actions

---

### 3. 🔁 `useEffect` with Specific Dependencies

```js
useEffect(() => {
  console.log("Runs only when `count` changes");
}, [count]);
```

* Runs when **any value inside the array** changes.
* If you pass multiple dependencies: `[count, name, theme]`, it runs if **any of them changes**.

---

### 4. 🧹 `useEffect` with Cleanup (Unmount or before Re-run)

```js
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Interval running...");
  }, 1000);

  return () => {
    clearInterval(interval);
    console.log("Interval cleared");
  };
}, []);
```

* **Cleanup happens:**

  * Before component unmounts
  * Or before next effect runs (on dependency change)

---

## 🛠 Use Cases of `useEffect`

| Use Case                | Code Example                                        |
| ----------------------- | --------------------------------------------------- |
| Data Fetching           | `useEffect(() => { fetchData() }, [])`              |
| Event Listeners         | `useEffect(() => { window.addEventListener(...) })` |
| Timers/Intervals        | `setTimeout`, `setInterval`, with cleanup           |
| Subscriptions (sockets) | `socket.on(...)`, with cleanup                      |
| Updating Document Title | `document.title = "..."`                            |

---

## ⚠️ Common Mistakes

| Mistake                    | Explanation                                       |
| -------------------------- | ------------------------------------------------- |
| ❌ Forgetting `[]`          | Leads to **multiple re-renders**                  |
| ❌ Not cleaning up          | Causes **memory leaks** or **multiple intervals** |
| ❌ Over-adding dependencies | May cause **unwanted re-renders**                 |

---

## 🔍 Advanced: Nested useEffect (Not best practice but for understanding)

```js
useEffect(() => {
  if (isLoggedIn) {
    useEffect(() => {
      console.log("Nested not allowed – avoid this");
    }, []);
  }
}, []);
```

* **Wrong** — you **can't nest** hooks. Always use at top level inside the component.

---

## ✅ Full Example: Fetch + Cleanup

```js
import React, { useEffect, useState } from "react";

function UserData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((json) => setData(json));

    return () => {
      controller.abort(); // cleanup
    };
  }, []);

  return (
    <div>
      {data ? data.map((user) => <p key={user.id}>{user.name}</p>) : "Loading..."}
    </div>
  );
}
```

---

## 🧠 Summary Table

| Pattern                          | When it runs                        | Cleanup  |
| -------------------------------- | ----------------------------------- | -------- |
| `useEffect(() => {...})`         | After **every render**              | Optional |
| `useEffect(() => {...}, [])`     | Only **once** on mount              | Optional |
| `useEffect(() => {...}, [a, b])` | On **a or b change**                | Optional |
| `return () => {...}`             | On **unmount** or **before re-run** | Yes      |

---

## 🤖 Real Life Mini Examples

### Change Title on Count Update

```js
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]);
```

---

### Cleanup Event Listener

```js
useEffect(() => {
  const handleResize = () => console.log("Resized!");

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
```

---

## 🧱 Summary Points (Easy to Remember)

* `useEffect` = run code **after render**
* 2nd argument `[]` controls **when it runs**
* Return inside = **cleanup**
* Don’t **nest** or call `useEffect` conditionally
* Helps with: fetch, timers, subscriptions, DOM updates

---

