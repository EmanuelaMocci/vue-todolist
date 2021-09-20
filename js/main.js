// - stampare in pagina un item per ogni elemento contenuto in un array
// - ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista

var app = new Vue({
    el: '#root',
    data: {
        logo: 'img/logo.png',
        todos: ['Portare a passeggio i cani', 'Andare al mare'],
        nuovo: ""
    },
    methods: {
        addNuovo: function(){
            if(this.nuovo != ""){
                this.todos.push(this.nuovo);
            } this.nuovo = "";
        },
        removeTodo: function(index){
            this.todos.splice(index, 1)
        }
    }
})