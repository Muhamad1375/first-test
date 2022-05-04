const app = Vue.createApp({
    data() {
        return {
            oon: 'http://www.google.com',
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
                },
                {
                    title: 'The final Empire2',
                    author: 'Brandon Sanderson',
                    age: 45,
                    img: 'assets/2.jpg',
                },
                {
                    title: 'The final Empire3',
                    author: 'Brandon Sanderson',
                    age: 45,
                    img: 'assets/3.jpg',
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
        handleMouseMove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    }
})

app.mount('#app')