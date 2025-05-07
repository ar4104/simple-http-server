
Built by https://www.blackbox.ai

---

# Simple HTTP Server

## Project Overview

This project implements a simple HTTP server using Node.js. It serves static files, including HTML, CSS, JavaScript, images, and more, from a public directory. The server listens on port 3000 and provides basic functionality for handling different file types and serving them with the appropriate content type.

## Installation

To get started with the Simple HTTP Server, follow these steps:

1. **Clone the repository** (replace `<repository-url>` with the actual URL):
   ```bash
   git clone <repository-url>
   ```

2. **Navigate into the project directory**:
   ```bash
   cd simple-http-server
   ```

3. **Install dependencies** (if applicable):
   If there are any dependencies listed in `package.json`, run the following command:
   ```bash
   npm install
   ```

## Usage

To use the server, simply execute the following command in your terminal:

```bash
node server.js
```

The server will start running at [http://localhost:3000/](http://localhost:3000/). You can access your static HTML files from the `public` directory by navigating to this URL in your web browser.

### Example
- To access the `index.html`, open [http://localhost:3000/index.html](http://localhost:3000/index.html) in your browser.

## Features

- Serves static files including HTML, CSS, JavaScript, images, and videos.
- Automatically serves `index.html` when the root URL is accessed.
- Handles 404 errors for non-existent files.
- Responds with appropriate content types based on file extensions.

## Dependencies

If the project had a `package.json`, the dependencies would be listed there. However, based on the provided files, it appears no specific dependencies are required beyond the Node.js standard libraries used in `server.js`.

## Project Structure

The project is structured as follows:

```
simple-http-server/
│
├── public/                # Directory to store static files (HTML, CSS, JS, images)
│   └── index.html         # Example HTML file
│
├── server.js              # Main server file
└── README.md              # This documentation file
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.