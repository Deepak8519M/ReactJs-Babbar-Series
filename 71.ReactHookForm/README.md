Sure! Let’s go **step by step** and understand **React Hooks** from scratch — in **simple language with examples and use cases**.

---

## 🔧 What are React Hooks?

**Hooks** are **functions** that let you **"hook into" React's features** (like state, lifecycle, context, etc.) **inside functional components**.

> 🧠 Before Hooks, you could only use state and lifecycle features inside class components.
> After Hooks (introduced in React 16.8), **functional components became powerful**.

---

## 📦 Commonly Used React Hooks (with explanation)

| Hook                    | Purpose                                                               | Example Use                       |
| ----------------------- | --------------------------------------------------------------------- | --------------------------------- |
| `useState()`            | To add **state** in a functional component                            | Toggle button, counter            |
| `useEffect()`           | To handle **side effects** (like API calls, timers, etc.)             | Fetch data, set `setInterval()`   |
| `useContext()`          | To consume **React Context**                                          | Theme, Auth, Language settings    |
| `useRef()`              | To reference DOM elements or persist values without causing re-render | Focus input, store timeout ID     |
| `useMemo()`             | To **memoize** expensive calculations                                 | Prevent unnecessary recalculation |
| `useCallback()`         | To memoize functions so they don't get recreated on re-renders        | Optimizing child components       |
| `useReducer()`          | Like useState but for **complex state logic**                         | Form handling, counters, etc.     |
| `useLayoutEffect()`     | Like `useEffect` but fires **before** painting to screen              | DOM measurements                  |
| `useImperativeHandle()` | Customize what refs expose when using `forwardRef()`                  | Custom components                 |

---

## ✅ 1. `useState()` — Add State

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // state variable

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}
```

---

## ✅ 2. `useEffect()` — Side Effects

```jsx
import { useEffect, useState } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(timer); // cleanup
  }, []); // empty array: run once on mount

  return <p>Timer: {seconds}</p>;
}
```

---

## ✅ 3. `useRef()` — DOM Ref or Persist Value

```jsx
import { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
```

---

## ✅ 4. `useContext()` — Global Data Sharing

```jsx
const ThemeContext = React.createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
  );
}

function Child() {
  const theme = useContext(ThemeContext);
  return <div>Theme is {theme}</div>;
}
```

---

## ✅ 5. `useReducer()` — Complex State

```jsx
function reducer(state, action) {
  switch(action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}
```

---

## ✅ 6. `useMemo()` and `useCallback()`

These are used for **performance optimization**.

```jsx
const expensiveValue = useMemo(() => {
  return slowFunction(input); // only recalculated when input changes
}, [input]);
```

```jsx
const handleClick = useCallback(() => {
  doSomething();
}, []); // prevents recreation on every render
```

---

## 🧠 Summary

| Hook                  | Used For                        |
| --------------------- | ------------------------------- |
| `useState`            | State in function components    |
| `useEffect`           | Lifecycle and side effects      |
| `useRef`              | DOM access or persistent values |
| `useContext`          | Accessing global data           |
| `useReducer`          | State with complex logic        |
| `useMemo`             | Memoizing values                |
| `useCallback`         | Memoizing functions             |
| `useLayoutEffect`     | Measuring DOM before paint      |
| `useImperativeHandle` | Customizing refs                |

---

