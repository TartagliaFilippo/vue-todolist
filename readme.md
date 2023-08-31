# TRACCIA

Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:

- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

1. MILESTONE 1
   Stampare all'interno di una lista HTML un item per ogni todo.
   Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

- inserisco un ciclo che genererà i miei _li_
- ogni li avrà un "p" e uno "span"
- assegno una classe "cross-text"
- se la casella done è contassegnata il testo viene sbarrato

2. MILESTONE 2
   Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

- creo un bottone al quale associo una funzione al click
- rimuove se stesso dalla lista

3. MILESTONE 3
   Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

- creo un input
- collegato direttamente all'app
- al click del bottone inserisco il mio input nella lista

4. Bonus:

i. oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista

ii. cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
