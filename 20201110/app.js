const express = require('express')
const app = express()
const port = 6600

// 현재 디렉토리에 있는 파일(static file)을 서빙
app.use(express.static('.'))

const bp = require('body-parser')
app.use(bp.json())
app.use(bp.urlencoded({extended: true}))

// /login으로 post 요청 시 값 그대로 출력
app.post('/login', (req, res) => {
    console.log('Connection has been established.')
    console.log(req.body)
})

// 서버 실행
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})

