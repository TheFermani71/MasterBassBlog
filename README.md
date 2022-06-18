"# MasterBass-SITE" MasterBass-SITE

Descrizione: Io ed alcuni amici facciamo parte di un gruppo di DJ e frequentemente svolgiamo serate, quindi ho deciso di progettare un blog di noi con tanto di DataBase incluso per la persistenza dei dati di ipotetici utenti e per il popolamento dei dati . Gestendo la registrazione ed il login.

Componenti/linguaggi utilizzati:

• FrontEnd : html e css

• BackEnd : JavcaScript(Node.JS)

• DataBase : MongoDB

• Pacchetti:

NPM: Gestore di pacchetti predefinito per l'ambiente di runtime JavaScript NODE.JS
Express: Un framework di applicazioni Web back-end per Node.js . È progettato per la creazione di applicazioni Web e API .
NodeMoon: Strumento che aiuta a sviluppare applicazioni basate su Node.js riavviando automaticamente l'applicazione del nodo quando vengono rilevate modifiche ai file nella directory.
hapi/joi : linguaggio di descrizione dello schema di oggetti e validatore per oggetti JavaScript, per garantire la convalida delle informazioni chiave.
hapi/joi-date estensione
bcryptjs : La funzione di hashing bcrypt ci consente di creare una piattaforma di sicurezza delle password che si adatta alla potenza di calcolo e che esegue sempre l'hashing di ogni password con un salt
body-parser : libreria npm utilizzata per elaborare i dati inviati tramite un corpo di richiesta HTTP
cors : fornisce un middleware Connect/Express che può essere utilizzato per abilitare CORS con varie opzioni
dotenv : modulo a dipendenza zero che carica le variabili di ambiente da un file . env in elaborazione. inv
jsonwebtoken : stringa o un buffer contenente il segreto per gli algoritmi HMAC o la chiave pubblica codificata PEM per RSA ed ECDSA
mongoose : strumento di modellazione a oggetti MongoDB progettato per funzionare in un ambiente asincrono
mongoose-sequence : Questo plugin ti consente di creare campi che incrementano automaticamente il loro valore
Utilizzo:

Creare un profilo su https://cloud.mongodb.com per aviare un Cluster dove il nostro codice crea delle celle contenente una lista di dati degli utenti sotto forma di JSON. Per collegarlo al vostro codice bastera connettere il cluster tramite un indirizzo che vi genera lui tramite il tasto “Connect”, copiarlo ed incollarlo nel file .env dopo “DB_CONNECTION_STRING =”
Scaricare NODEJS, creare uan cartella ed avviateci npm : "npm init"
Digitare su riga di comando “npm install” , per importare i pacchetti poi digitare “npm start” per avviare il server e la connessione al DataBase.