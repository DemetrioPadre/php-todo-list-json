const { createApp } = Vue;
const app = createApp({
    data() {
        return {
            title: 'Daily to do list:',
            todoList: [],

            newThingsToDo: {
                name: "",
                done: false,
            },
        };
    },
    methods: {
        fetchTodoList() {
            axios.get('../backend/api/get-list.php').then((response) => {
                console.log(response.data);
                this.todoList = response.data;
            });
        },
        addThings() {
            const thing = this.newThingsToDo.name;
            console.log('nuova cosa da fare:' + thing);


            this.newThingsToDo.name = '';


            const data = { thing: thing };

            const params = {
                headers: { 'Content-Type': 'multipart/form-data' },
            };

            axios.post('../backend/api/save-thing.php', data, params)
                .then((response) => {
                    this.todoList = response.data;
                });
        }

    },
    mounted() {
        this.fetchTodoList();
    }

});
app.mount('#app');