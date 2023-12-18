// Start network nodejs (port,)
/*
Tại sao lại cần có file server:
-> Nếu server crash thì sẽ có thông báo đến chúng ta
-> Nếu có vấn đề gì liên quan đến việc ngừng server thì kiểm tra lại file server
*/
const app = require("./src/app");

const PORT = process.env.PORT || 3056

const server = app.listen(PORT, () => {
    console.log(`WSV eCommerce start with port ${PORT}`)
})

// process là phương thức quy trình trong nodejs
// process.on('SIGINT') (Ctrl + C -> exit)
// process.on('SIGINT', () => {
//     server.close( () => console.log(`Exit Server Express`))
// })