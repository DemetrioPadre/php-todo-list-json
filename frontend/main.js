const { createApp } = Vue;
const app = createApp({
    data() {
        return {
            title: 'Daily to do list:'
        };
    }

});
app.mount('#app');