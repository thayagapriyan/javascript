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
