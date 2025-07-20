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

In React, **conditional rendering** means displaying different components or content based on certain conditions (like `if`, `true/false`, or `state`). Think of it like JavaScript’s `if` statement, but inside JSX.

---

### 🔸 Why Use Conditional Rendering?

* To show/hide parts of the UI based on state, props, or other conditions.
* Examples:

  * Showing a login form only if the user is not logged in.
  * Displaying a success message after form submission.
  * Switching between dark/light themes.

---

### ✅ Different Ways to Do Conditional Rendering in React

---

### 1. **Using `if` Statement (Outside JSX)**

Use regular `if...else` before the `return()`.

```jsx
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome Back!</h1>;
  } else {
    return <h1>Please log in.</h1>;
  }
}
```

---

### 2. **Using Ternary Operator (`? :`)**

Used directly inside JSX. Best for simple two-way decisions.

```jsx
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please log in.</h1>}
    </div>
  );
}
```

---

### 3. **Using Logical `&&` (AND Operator)**

Great when you only want to show something **if a condition is true**, and show **nothing otherwise**.

```jsx
function Dashboard({ hasNotifications }) {
  return (
    <div>
      <h1>Dashboard</h1>
      {hasNotifications && <p>You have new notifications!</p>}
    </div>
  );
}
```

---

### 4. **Using `if-else` with a Variable**

You can assign components to a variable and return that.

```jsx
function Greeting({ isLoggedIn }) {
  let message;
  if (isLoggedIn) {
    message = <h1>Welcome Back!</h1>;
  } else {
    message = <h1>Please log in.</h1>;
  }

  return <div>{message}</div>;
}
```

---

### 5. **Using `switch-case` (for multiple conditions)**

Helpful when you have 3 or more variations to show.

```jsx
function Status({ status }) {
  switch (status) {
    case "loading":
      return <p>Loading...</p>;
    case "error":
      return <p>Error occurred!</p>;
    case "success":
      return <p>Data loaded successfully!</p>;
    default:
      return <p>Unknown status</p>;
  }
}
```

---

### 6. **IIFE (Immediately Invoked Function Expressions)**

If you want to run logic in JSX directly.

```jsx
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {(() => {
        if (isLoggedIn) return <h1>Welcome Back!</h1>;
        return <h1>Please log in.</h1>;
      })()}
    </div>
  );
}
```

---

### ⚠️ Common Mistakes to Avoid

* Using `if` directly inside JSX → ❌ Not allowed.

  ```jsx
  return (
    <div>
      {if (isLoggedIn) { ... }}  ❌ INVALID
    </div>
  );
  ```

* Not providing a fallback (`:`) in ternary for important cases.

* Misusing `&&` when `false`, `0`, or `""` can render unexpected output.

---

### ✅ Summary

| Method        | Best Use Case                          |
| ------------- | -------------------------------------- |
| `if`/`else`   | Outside JSX, basic conditional checks  |
| Ternary `? :` | Inside JSX, two-way conditional render |
| `&&`          | Show one thing only if true            |
| `switch`      | Multi-condition rendering              |
| IIFE          | Run logic inline within JSX            |

---

