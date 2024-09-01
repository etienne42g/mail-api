require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error('Erreur de connexion SMTP:', error);
  } else {
    console.log('Connexion SMTP réussie ! Prêt à envoyer des emails.');
  }
});

app.post('/send-email', async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject,
      text,
    });

    console.log(`Email envoyé à: ${to}, Sujet: ${subject}`);
    res.status(200).send('Email envoyé avec succès !');
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email : ', error);
    res.status(500).send('Erreur lors de l\'envoi de l\'email : ' + error.message);
  }
});

app.listen(3000, () => {
  console.log('Serveur API démarré sur le port 3000');
});
