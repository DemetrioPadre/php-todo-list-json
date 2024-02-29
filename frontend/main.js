const { createApp } = Vue;
const app = createApp({
    data() {
        return {
            title: 'Daily to do list:',
            todoList: ['Mangiare', 'Dormire', 'Studiare php & js']
        };
    }

});
app.mount('#app');