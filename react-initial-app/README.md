
````markdown
## Understanding React Project Structure  

When you create a React app, some files and folders are auto-generated.  
Here’s why they exist:

### 1. `node_modules/`
- Contains all installed libraries and dependencies.  
- Created when you run `npm install`.  
- Should **not** be pushed to GitHub (it’s huge, and can be recreated from `package.json`).  

### 2. `package.json`
- The **blueprint** of the project.  
- Lists project info (name, version, scripts).  
- Defines dependencies (React, ReactDOM, etc.).  
- Example:
  ```json
  {
    "name": "react-initial-app",
    "version": "1.0.0",
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build"
    },
    "dependencies": {
      "react": "^18.0.0"
    }
  }
````

### 3. `package-lock.json`

* Keeps the **exact version** of each dependency.
* Ensures the same setup on every machine.
* Auto-generated, don’t edit manually.

### 4. `.gitignore`

* Tells Git which files/folders **not** to track.
* Commonly ignores `node_modules/`, `build/`, `.env`, etc.
* Example:

  ```
  /node_modules
  /build
  .env
  ```

---

✅ In short:

* **node\_modules/** → actual libraries.
* **package.json** → project recipe.
* **package-lock.json** → locks versions for stability.
* **.gitignore** → avoids pushing unnecessary files.

```

Do you also want me to include an **overview diagram** (like “React Project Flow”) in your notes so it’s even more visual?
```
## What are Components in React?  

A **Component** is a small, reusable piece of UI in React.  
Think of it like a **function** that returns HTML (JSX).  

### Why functions are called Components?
- In React, a component is just a **JavaScript function** that:
  1. Takes inputs (**props**)  
  2. Returns JSX (UI)  

- React treats these functions as **building blocks** of the app.  
- Components make the app **modular, reusable, and easy to manage**.  

### Example

#### Functional Component
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

## Class Components in React  

Class Components are the **older way** of creating components in React (before Hooks were introduced).  
They are JavaScript ES6 classes that extend `React.Component`.  

## What are Props in React?  

**Props** (short for *properties*) are used to **pass data** from one component to another.  
They make components **dynamic and reusable**.  

### Why use Props?
- To share data between components.  
- To make components flexible (same component can display different data).  
- They are **read-only** (cannot be changed by the child component).  

### Example

#### Parent Component
