import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
require('dotenv').config();

consr app = express();

class mailSend{
constructor(){
  this.mail = process.env.MAIL_USER
  this.pass = process.env.MAIL_PASS
}

sendForm(titleForm, contactInfo, bodyForm){
const yandex = nodemailer.createTransport({
  host: 'smrp.yandex.ru',
  port: 465,
  secure: true,
  auth: {
    user: this.mail,
    pass: this.pass
  },
});
}

const mailItSelf = {
  from:this.mail,
  to:this.mail,
  subject: 'Новая работа',
  text: `Опмисание:${titleForm} \n
  Контактная: ${contactInfo} \n
  Суть: ${bodyForm} \n`
};

sendForm.sendMail(mailItSelf,  (error, info) => {
            if (error) {
                console.log('Ошибка:', error);
            } else {
                console.log('Письмо отправлено:', info.messageId);
            }
        } );
}

const PORT = 3000;

const corsOptions = {
    origin: 'http://localhost:5173', // Укажи URL своего сайта
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());

app.post('/formSend', async (res, req)=>{

try{

  const { name, email, messege } = req.body;
   if (!name || !email || !message) {
            return res.status(400).json({ success: false, error: 'Все поля обязательны!' });
        }

console.log(name email messege);

} catch (error) {
        console.error('❌ Ошибка отправки:', error);
        res.status(500).json({ success: false, error: 'Ошибка сервера при отправке письма.' }
})
  app.listen(PORT, ()=>{
        console.log(`Сервер запущен на http://localhost:${PORT}`);
  });

