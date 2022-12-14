var app = new Vue(
    {   
        el: "#root",
        data: {
            autoplayClock: null,
            activeElement: 0,
            slides: [
                {
                    image: './img/discord-screen.png',
                    text: 'Riproduzione del sito di Discord: Html5 & Css3, nient\'altro.',
                },
                {
                    image: './img/spotify-screen.png',
                    text: 'Riproduzione della web app di Spotify. Responsive.',
                },  
                {
                    image: './img/sony-screen.png',
                    text: 'Riproduzione del sito di Sony. Responsive.',
                },
                {
                    image: './img/zalando-screen.png',
                    text: 'Riproduzione del sito di Zalando. Responsive.',
                },
                {
                    image: './img/dropbox-screen.png',
                    text: 'Riproduzione del sito di Dropbox. Responsive.',
                },
                {
                    image: './img/midterm-screen.png',
                    text: 'Modello di sito per azienda sanitaria. Utilizzati Vue CLI & Sass.',
                },
                {
                    image: './img/boolflix-screen.png',
                    text: 'Riproduzione del sito di Netflix: software che legge la ricerca dell\'utente, effettua chiamata API al database e stampa i risultati. Utilizzati Vue.js & Javascript.',
                },
                {
                    image: './img/spotify-2-screen.png',
                    text: 'Modello di lista album: chiamata API AJAX riceve le info degli album e li stampa in pagina. Utilizzati Php & Javascript.',
                },
                {
                    image: './img/googlefaq-screen.png',
                    text: 'Riproduzione delle Faq di Google. Utilizzato Php.',
                },
                {
                    image: './img/comics-screen.png',
                    text: 'Riproduzione del sito di Dc Comics: ogni fumetto linka alla sua pagina dettagliata, con autori, data di rilascio ecc. Utilizzati Laravel & Sass.',
                },
                {
                    image: './img/wordpress-screen.png',
                    text: 'Riproduzione di Wordpress: utilizzati Vue.js, Vue Router & Laravel, struttura MVC. L\'utente non registrato pu?? visualizzare la home e i post nel dettaglio, l\'admin pu?? creare, modificare ed eliminare i contenuti.',
                },
                {
                    image: './img/stat.png',
                    text: 'Riproduzione di Deliveroo: utilizzati Vue.js, Vue Router, Laravel, Braintree, Chartjs, Mailtrap, Bootstrap, Sass, Trello. Webapp responsive che permette agli utenti interessati di acquistare i piatti desiderati effettuando un pagamento. Area dedicata ai ristoratori che possono aggiungere e togliere piatti dal men?? del proprio ristorante.',
                },
            ],
        },
        methods: {  
            showNext() {
                if(this.activeElement < this.slides.length - 1) {
                    this.activeElement++;
                } else {
                    this.activeElement = 0;
                }
            },  
            activateSlide(index) {
                this.activeElement = index;
            },
            startAutoplay() {
                this.autoplayClock = setInterval(this.showNext, 3000);
            },
            stopCounter() {
                clearInterval(this.autoplayClock);
                this.autoplayClock = null;
            },
        },
        mounted() {
            this.startAutoplay();
        }
    }
);

