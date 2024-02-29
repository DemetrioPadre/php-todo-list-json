const { createApp } = Vue;
const app = createApp({
    data() {
        return {
            title: 'Daily to do list:',
            todoList: [],
        };
    },
    methods: {
        fetchTodoList() {
            axios.get('http://localhost/php-todo-list-json/backend/api/get-list.php').then((response) => {
                console.log(response.data);
                this.todoList = response.data;
            });
        }
    },
    mounted() {
        this.fetchTodoList();
    }

});
app.mount('#app');