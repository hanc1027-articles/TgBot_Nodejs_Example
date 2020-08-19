// 引入外部套件
const TelegramBot = require('node-telegram-bot-api');
const token = '你自己機器人的Token'; //TODO:請更改
const bot = new TelegramBot(token, { polling: true });

//使用Long Polling的方式與Telegram伺服器建立連線

console.log('bot server started...');

//收到Start訊息時會觸發這段程式
bot.onText(/\/start/, (msg) => {

    let welcome_str = `哈囉! ${msg.from.first_name}，歡迎使用😈`;
    bot.sendMessage(msg.chat.id, welcome_str)

    if (!msg.from.username) {
        bot.sendMessage(msg.chat.id, "你還沒設定【使用者名稱】，就是ID啦~趕快去設定一下吧!")
    }
});


// Commands
bot.onText(/\/ping/, (msg) => {
    bot.sendMessage(msg.chat.id, "我還醒著~😗\n有好吃的要記得給偶吃噢🤩");
});

bot.onText(/\/help/, (msg) => {
    bot.sendMessage(msg.chat.id, "功能開發中😉")
});

// 接到訊息
bot.on('message', (msg) => {
    bot.sendMessage(msg.chat.id, `您剛剛說了:${msg.text}`)
})

// 檢查bug
bot.on("polling_error", (err) => console.log(err));
