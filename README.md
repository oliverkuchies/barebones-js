# barebones-js

A barebones JavaScript library demonstrating clean code structure with linting and testing.

## Features

- 🎯 Clean, well-documented code structure
- ✅ Unit testing with Vitest
- 🔍 Code linting with ESLint
- 📦 ES Module support

## Installation

```bash
npm install
```

## Usage

### Running the example

```bash
npm start
```

### Using the library

```javascript
import { greet, farewell } from './src/hello.js';

console.log(greet('World'));      // "Hello, World!"
console.log(farewell('World'));   // "Goodbye, World!"
```

## Development

### Run tests

```bash
npm test
```

### Run tests in watch mode

```bash
npm run test:watch
```

### Lint code

```bash
npm run lint
```

### Auto-fix linting issues

```bash
npm run lint:fix
```

## Project Structure

```
barebones-js/
├── src/
│   └── hello.js       # Main library code
├── test/
│   └── hello.test.js  # Unit tests
├── eslint.config.mjs  # ESLint configuration
├── package.json       # Project metadata and dependencies
└── README.md          # This file
```

## License

ISC
