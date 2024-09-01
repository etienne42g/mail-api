# Email Sender API

Cette API permet d'envoyer des emails en utilisant le service `nodemailer` et un serveur SMTP configuré via des variables d'environnement.

## Prérequis

- Node.js (version 12 ou supérieure)
- npm (Node Package Manager)

## Installation

1. Clonez ce dépôt sur votre machine locale.

    ```bash
    git clone https://github.com/votre-utilisateur/votre-repo.git
    cd votre-repo
    ```

2. Installez les dépendances.

    ```bash
    npm install
    ```

3. Créez un fichier `.env` à la racine du projet avec les variables d'environnement suivantes :

    ```env
    SMTP_HOST=your_smtp_host
    SMTP_PORT=your_smtp_port
    SMTP_USER=your_smtp_user
    SMTP_PASS=your_smtp_pass
    ```

## Utilisation

1. Lancez le serveur API.

    ```bash
    node index.js
    ```

2. Envoyez une requête POST à l'endpoint `/send-email` avec un corps JSON contenant les champs `to`, `subject`, et `text`.

    Exemple de requête utilisant `curl` :

    ```bash
    curl -X POST http://localhost:3000/send-email -H "Content-Type: application/json" -d '{"to": "destinataire@example.com", "subject": "Test Email", "text": "Ceci est un email de test."}'
    ```

## Exécution avec Docker

1. Construisez l'image Docker.

    ```bash
    docker build -t email-sender-api .
    ```

2. Lancez le conteneur Docker.

    ```bash
    docker run -p 3000:3000 --env-file .env email-sender-api
    ```

Le serveur API sera accessible à `http://localhost:3000`.

## License

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.
