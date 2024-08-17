

# Grammar Fixer Chrome Extension - Backend

Welcome to the backend of my fun little side project! 🚀 This server is powered by Node.js, Express, and Google’s fancy Gemini AI. It’s here to help you polish up your sentences and make sure your grammar is on point!

## What Does It Do?

- **Magic Grammar Correction**: Just send a sentence, and this server will return a shinier, grammatically correct version. ✨
- **Open for All**: With CORS enabled, you can connect from anywhere—perfect for front-end projects like Chrome extensions.
- **Simple and Sweet**: One endpoint is all you need to get your grammar game on.

## How to Use It

### `POST /correct`

- **What It Does**: Takes your text, sprinkles some AI magic, and sends back a corrected sentence.
- **What You Send**:
  ```json
  {
    "text": "your sentence that needs some grammar love"
  }
  ```
- **What You Get**:
  ```json
  {
    "correctedText": "Your sentence that now loves grammar."
  }
  ```

## Getting Started

1. Install the goodies:
   ```bash
   npm install
   ```

2. Set your super-secret API key:
   ```bash
   export Gemini_API_Key=your_api_key_here
   ```

3. Fire it up:
   ```bash
   node app.js
   ```

4. Boom! The server is up and running on `http://localhost:3000`. Go ahead and test it out!

## License

Just having fun with this one! Feel free to use it and enjoy. 🎉
