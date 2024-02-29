const { createApp } = Vue;
const app = createApp({
    data() {
        return {
            title: 'Daily to do list:',
            todoList: [],

            newThingsToDo: '',
        };
    },
    methods: {
        fetchTodoList() {
            axios.get('http://localhost/php-todo-list-json/backend/api/get-list.php').then((response) => {
                console.log(response.data);
                this.todoList = response.data;
            });
        },
        addThings() {
            const thing = this.newThingsToDo;
            console.log('nuova cosa da fare:' + thing);


            this.newThingsToDo = '';


            const data = { thing };

            const params = {
                headers: { 'Content-Type': 'multipart/form-data' },
            };

            axios.post('http://localhost/php-todo-list-json/backend/api/save-thing.php', data, params)
                .then((response) => {
                    console.log(response.data);
                });
        }

    },
    mounted() {
        this.fetchTodoList();
    }

});
app.mount('#app');