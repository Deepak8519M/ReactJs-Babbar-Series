Sure! Let's break down **Event Handling in React** in a **simple and detailed** way, perfect for your notes.

---

## 📌 What is Event Handling in React?

**Event handling** in React means **responding to user actions** like:

* Clicking a button
* Typing in an input
* Hovering over an element
* Submitting a form

Just like in plain HTML/JavaScript, React can handle these events. But React uses a **slightly different syntax**.

---

## ✅ Basic Syntax

### HTML/JS:

```html
<button onclick="doSomething()">Click me</button>
```

### React:

```jsx
<button onClick={doSomething}>Click me</button>
```

> 🔸 Note: React uses **camelCase** (e.g., `onClick`, `onChange`) instead of lowercase (`onclick`, `onchange`) like in HTML.

---

## 🧠 Key Concepts

| Concept           | React Way                       | Notes                                       |
| ----------------- | ------------------------------- | ------------------------------------------- |
| Event Name        | `onClick`, `onChange`, etc.     | CamelCase                                   |
| Event Handler     | `{handleClick}`                 | Must be a function                          |
| Function Location | Inside the component            | Define it with `function` or arrow function |
| Binding `this`    | Needed only in class components | Functional components don’t need it         |

---

## 🧪 Example: Button Click Event

```jsx
import React from 'react';

function App() {
  function handleClick() {
    alert("Button Clicked!");
  }

  return (
    <button onClick={handleClick}>Click Me</button>
  );
}

export default App;
```

---

## 🔁 Example: Input Change Event

```jsx
import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <input type="text" onChange={handleChange} value={text} />
  );
}

export default App;
```

> `event.target.value` gets the current value typed in the input field.

---

## ✨ Common Events in React

| Event          | Usage                             |
| -------------- | --------------------------------- |
| `onClick`      | When an element is clicked        |
| `onChange`     | When value of input changes       |
| `onSubmit`     | When a form is submitted          |
| `onMouseEnter` | When mouse hovers over an element |
| `onKeyDown`    | When a key is pressed             |
| `onBlur`       | When an input loses focus         |

---

## 📦 Example: Form Submission

```jsx
function App() {
  function handleSubmit(event) {
    event.preventDefault(); // prevent page reload
    alert("Form Submitted!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## ✅ Summary Notes for Quick Revision

* Use `camelCase` for event names (like `onClick`, `onChange`)
* Wrap event handler in `{}` like `{handleClick}`
* Use `event.target.value` to get values from input fields
* Use `event.preventDefault()` to stop default form behavior
* Events in React work similarly to vanilla JS but have React-friendly syntax

---

