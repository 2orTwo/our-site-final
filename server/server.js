import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

// Разрешаем все origin для разработки
app.use(cors({
    origin: true,
    credentials: true
}));
app.use(express.json());

// Логирование запросов
app.use((req, res, next) => {
    console.log(`${new Date().toLocaleTimeString()} ${req.method} ${req.path}`);
    next();
});

const transporter = nodemailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

transporter.verify((err, success) => {
    if (err) {
        console.error('❌ SMTP ошибка:', err.message);
    } else {
        console.log('✓ SMTP подключён');
    }
});

app.post('/formSend', async (req, res) => {
    console.log('📩 Данные:', req.body);
    
    const { contact, description } = req.body;
    
    if (!contact || !description) {
        return res.status(400).json({ success: false, error: 'Все поля обязательны!' });
    }

    try {
        const info = await transporter.sendMail({
            from: process.env.MAIL_USER,
            to: process.env.MAIL_USER,
            subject: 'Новая работа',
            text: `Контакты: ${contact}\n\nЗадача: ${description}`
        });
        console.log('✓ Письмо:', info.messageId);
        res.json({ success: true, messageId: info.messageId });
    } catch (err) {
        console.error('❌ Ошибка:', err.message);
        res.status(500).json({ success: false, error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`\n🚀 Сервер: http://localhost:${PORT}`);
    console.log(`📧 Почта: ${process.env.MAIL_USER}\n`);
});
