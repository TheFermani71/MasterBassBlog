"# MasterBass-SITE" MasterBass-SITE

Descrizione:  blog MasterBass's dj + Collegamento mongoDB per la persistenza dei dati di  utenti e per il popolamento dei dati . Registrazione/login e logout.

Componenti/linguaggi utilizzati:

• FrontEnd : html e css

• BackEnd : JavcaScript(Node.JS)

• DataBase : MongoDB


COME FUNZIONA :

Creare un profilo su https://cloud.mongodb.com per aviare un Cluster dove il nostro codice crea delle celle contenente una lista di dati degli utenti sotto forma di JSON. Per collegarlo al vostro codice bastera connettere il cluster tramite un indirizzo che vi genera lui tramite il tasto “Connect”, copiarlo ed incollarlo dopo la voce "DATABASE:" nel file confing.js
Scaricare NODEJS, creare uan cartella ed avviateci npm : "npm init"
Digitare su riga di comando “npm install” , per importare i pacchetti poi digitare “npm start” per avviare il server e la connessione al DataBase.
