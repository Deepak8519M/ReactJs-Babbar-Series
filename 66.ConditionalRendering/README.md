### ✅ Conditional Rendering in React – Easy and Detailed Explanation

In React, **conditional rendering** means showing different **components**, **elements**, or **UI parts** based on a condition (like a value of state, prop, or some logic). This is exactly like how we use `if` statements in JavaScript — but here we use them to control what appears in the UI.

---

### 🔍 Why Conditional Rendering?

You might not always want to show everything on the screen. For example:

* Show a **Login** button if the user is not logged in.
* Show a **Welcome message** if the user is logged in.
* Show a **Loader** until the data is fetched.
* Show **error messages** when something goes wrong.

So, based on conditions, you "render" different parts of your app.

---

### 📘 Common Ways to Do Conditional Rendering in React

---

#### 1️⃣ Using `if` Statement

```jsx
function App() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please log in.</h1>;
  }
}
```

---

#### 2️⃣ Using Ternary Operator `condition ? true : false`

```jsx
function App() {
  const isLoggedIn = false;

  return (
    <div>
      {isLoggedIn ? <p>Welcome Back!</p> : <p>Please Login</p>}
    </div>
  );
}
```

✅ This is the most common way used in JSX.

---

#### 3️⃣ Using `&&` Operator

This works well when you want to show something **only when** the condition is true.

```jsx
function App() {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn && <h2>Welcome to the dashboard!</h2>}
    </div>
  );
}
```

If `isLoggedIn` is true, it shows the message. If it's false, **nothing is shown**.

---

#### 4️⃣ Using `switch` Statement (for multiple conditions)

```jsx
function App() {
  const status = "loading"; // can be 'loading', 'error', 'success'

  switch (status) {
    case "loading":
      return <p>Loading...</p>;
    case "error":
      return <p>Error occurred!</p>;
    case "success":
      return <p>Data fetched successfully!</p>;
    default:
      return <p>Unknown status</p>;
  }
}
```

---

### 📌 Real-Life Example

```jsx
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>}
    </div>
  );
}
```

---

### ❌ Common Mistakes

1. **Using if-else inside JSX** directly – not allowed:

   ```jsx
   return (
     {if (condition) { <h1>Hello</h1> }} // ❌ This will throw an error
   );
   ```

2. Forgetting to return JSX in all conditions.

3. Confusing ternary syntax:

   ```jsx
   isLoggedIn ? <CompA /> : <CompB /> // ✅
   isLoggedIn ? <CompA />             // ❌ (missing else)
   ```

---

### 📚 Summary Table

| Syntax    | When to Use                      |
| --------- | -------------------------------- |
| `if/else` | Before `return` (outside JSX)    |
| Ternary   | Inside JSX for two conditions    |
| `&&`      | When only need to show if `true` |
| `switch`  | Multiple condition choices       |

---

