## Traditional HTML vs React.js  

### Traditional HTML
- Uses **separate files** for HTML, CSS, and JavaScript.  
- UI updates require **page reloads**.  
- DOM manipulation is done **manually** (e.g., `document.getElementById`).  
- Harder to manage when the project grows bigger.  

### React.js
- Uses **components** (HTML, CSS, JS in one place).  
- **Virtual DOM** makes updates faster without reloading.  
- **Dynamic UI** with data binding – changes reflect automatically.  
- Easier to scale and maintain large applications.  

### Example

#### Traditional HTML
```html
<h1 id="title">Hello</h1>
<script>
  document.getElementById("title").innerText = "Hello, World!";
</script>


