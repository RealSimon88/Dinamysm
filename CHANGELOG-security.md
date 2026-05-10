# Hardening Sicurezza — Cosa abbiamo sistemato

## 1. Protezione contro pagine "impostore"
Quando nel modulo di contatto si clicca sul link "Privacy Policy", si apre una nuova scheda del browser. Abbiamo aggiunto un'istruzione che impedisce a quella nuova scheda di poter modificare o sostituire la pagina originale del sito — una tecnica di attacco reale chiamata *reverse tabnapping*.

---

## 2. Lista delle fonti autorizzate per il browser
Abbiamo istruito il browser su quali sono le sole fonti da cui il sito può caricare contenuti: solo file provenienti dal sito stesso. Se in futuro qualcuno cercasse di iniettare uno script da un indirizzo esterno non autorizzato, il browser lo bloccherebbe automaticamente prima ancora di eseguirlo.

---

## 3. Trappola invisibile per i bot di spam
Nel modulo di contatto abbiamo nascosto un campo che gli utenti reali non vedono né compilano. I bot automatici di spam invece lo trovano e lo compilano — il sito se ne accorge e scarta silenziosamente il messaggio senza mostrare nessun errore. Per l'utente genuino non cambia nulla, per i bot è un vicolo cieco.

---

## 4. Cookie più sicuro
Il cookie che ricorda le preferenze privacy dell'utente (se ha accettato o rifiutato i cookie analitici) ora viaggia esclusivamente su connessioni cifrate HTTPS. In precedenza poteva teoricamente essere trasmesso anche su connessioni non protette. Aggiornato anche il livello di protezione da *Lax* a *Strict*, che impedisce l'invio del cookie da siti esterni.

---

## 5. Istruzioni ai motori di ricerca più generiche e sicure
In precedenza le istruzioni per i motori di ricerca contenevano il nome esatto di un file riservato, rendendo di fatto pubblica la sua esistenza a chiunque le leggesse. Ora la regola è generica: nessun file Word, PDF o Excel del sito verrà indicizzato da Google, senza rivelare nomi specifici.

---

## 6. Prevenzione della "mascheratura" del tipo di file
Abbiamo aggiunto un'istruzione che impedisce al browser di "indovinare" il tipo di un file scaricato dal sito quando questo non è dichiarato esplicitamente. È una piccola difesa contro una classe di attacchi in cui file malevoli vengono travestiti da contenuti innocui.
