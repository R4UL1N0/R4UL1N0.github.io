import express from 'express'

export const app = express()


const port = process.env.PORT || 3000

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);


// app.use(express.static(__dirname));

// app.get('/', (req, res) => {
//     console.log('OPENING PAGE')
//     res.sendFile('index.html', { root: __dirname});
// })

app.get('/', (req, res) => {
    console.log('Hello from node')
})

app.listen(port, () => {
    console.log('RUNNING')
})
