import express from "express";

const app = express();

app.get("/", (request, response) => {
    return response.json({
        message: 'Olá NLW05'
    })
})

app.listen(3333, () => console.log('teste'))