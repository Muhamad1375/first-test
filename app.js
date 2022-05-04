const app = Vue.createApp({
    data() {
        return {
            url: 'http://www.google.com',
            showBooks: true,
            title: 'The final Empire1',
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y: 0,
            books: [
                {
                    title: 'The final Empire1',
                    author: 'Brandon Sanderson',
                    age: 45,
                    img: 'assets/1.jpg',
                    isFav: true,

                },
                {
                    title: 'The final Empire2',
                    author: 'Brandon Sanderson',
                    age: 45,
                    img: 'assets/2.jpg',
                    isFav: false,
                },
                {
                    title: 'The final Empire3',
                    author: 'Brandon Sanderson',
                    age: 45,
                    img: 'assets/3.jpg',
                    isFav: true,
                },

                
            ]
        }
    },
    methods: {
        changeTitle(title) {
            // this.title = 'Stranger';
            this.title = title;
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        handleEvent(e, data) {
            console.log(e,e.type)
            if (data) {
                console.log(data)
            }
        },
        P(a) {
            // this.x = a.offsetX;
            // this.y = a.offsetY;
            console.log(a)
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        }
        
    },
    computed: {
      filteredBooks() {
            return this.books.filter((book) => book.isFav)
      }
    }
})

app.mount('#app')