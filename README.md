# JavaScript Examples

A collection of JavaScript code examples demonstrating core concepts.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine

## Files

| File | Description |
|------|-------------|
| `index.js` | Basic JavaScript concepts (variables, functions, classes, async/await) |
| `setTimeout.js` | Demonstrates `setTimeout` and asynchronous execution |

## Running the Examples

### Run a specific file

```bash
node index.js
```

```bash
node setTimeout.js
```

### Run with watch mode (Node.js 18+)

```bash
node --watch index.js
```

### Run and inspect for debugging

```bash
node --inspect index.js
```

## Common Node.js Commands

| Command | Description |
|---------|-------------|
| `node <file>` | Run a JavaScript file |
| `node --version` | Check Node.js version |
| `node` | Start Node.js REPL |
| `node -e "console.log('Hello')"` | Execute inline JavaScript |
| `node --watch <file>` | Run with auto-restart on changes |
| `node --inspect <file>` | Run with debugger attached |

## NPM Commands (for future projects)

```bash
# Initialize a new project
npm init -y

# Install a package
npm install <package-name>

# Install dev dependency
npm install --save-dev <package-name>

# Run scripts defined in package.json
npm run <script-name>

# List installed packages
npm list
```

## License

MIT

## Browser Testing

You can run the examples in a browser by serving this folder over HTTP and opening `index.html`.

- Start a simple local server (PowerShell):

```powershell
# With Python (recommended if available)
python -m http.server 8000

# Or with Node (if you have `http-server` installed via npm)
npx http-server -p 8000
```

- Open the page in your default browser (PowerShell):

```powershell
Start-Process "http://localhost:8000/index.html"
```

- Alternatively, use the VS Code "Live Server" extension and click "Go Live".

What to test

- Open Developer Tools (F12) and watch the Console for the log lines produced by `setTimeout.js`.
- On the page, click the "Run setTimeout (1s)" button to schedule a delayed log; the page also appends visible messages to the DOM.

If `setTimeout.js` contains only `console.log` calls and standard browser APIs, it will run unchanged in the browser.
