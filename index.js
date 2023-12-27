const { GoogleGenerativeAI } = require("@google/generative-ai");
const cors = require('cors');
const express = require('express');

const apiKey = process.env.Gemini_API_Key
const genAI = new GoogleGenerativeAI(apiKey);
const app = express();
const port = 3000;

app.use(cors({
    origin: '*'
}));

async function run(prompt) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  
    const finalPrompt = `${prompt} -- Correct the sentence grammatically`;
    const result = await model.generateContent(finalPrompt);
    const response = await result.response;
    const text = response.text();

    return text;
}

app.use(express.json());

app.post('/correct', async (req, res) => {
    console.log("Hit!")
    const receivedText = req.body.text; 
    console.log("Received text:", receivedText);
    const correctedText = await run(receivedText);
    res.json({ correctedText });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
