"# MasterBass-SITE" MasterBass-SITE

Descrizione:  blog MasterBass's dj + Collegamento mongoDB per la persistenza dei dati  e per il popolamento dei dati di  utenti . Registrazione/login e logout.

Componenti/linguaggi utilizzati:

• FrontEnd : html e css

• BackEnd : JavcaScript(Node.JS)

• DataBase : MongoDB


COME FUNZIONA :

- Creare un profilo su https://cloud.mongodb.com. Li avvieremo un Cluster dove il nostro codice crea delle celle contenenti la lista di dati degli utenti sotto forma di .JSON.
- Connetere il DB: Per prima cosa create un Cluster dando anche un nome utente e relativa password al DB, esso verra poi connesso al nostro codice tramite un indirizzo  generato dal sito, mostrato una volta premuto “Connect”, dopochè: Drivers, troveremo l'indirizzo da compiare ed incolalre dopo la voce "DATABASE:" nel file confing.js.
- Scaricare NODEJS, aprire il codice tramite IDE, Scaricare/Aggiornare la cartella "NodeModules" quindi digitare da terminale digitare “npm install” , per avviare il server e la connessione al DataBase utilizzare il comando  “npm start” 
