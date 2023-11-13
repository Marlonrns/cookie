<template>
<div class="container">
    <div class="input-group my-3">
        <input type="text" class="form-control" v-model="message" @keydown.enter="add()">
        <button class="btn btn-primary" @click="add()">Add</button>
    </div>
    <h1>All Items</h1>
    <ul>
        <li v-for="item in items" :key="item.id">
            <div class="form-check form-switch">
                <label>
                    {{ item.name }}
                    <input type="checkbox" class="form-check-input" v-model="item.isDone">
                </label>
            </div>
        </li>
    </ul>
    <h1>Done Items</h1>
    <ul>
        <li v-for="item in doneItems" :key="item.id">
            <div class="form-check form-switch">
                <label>
                    {{ item.name }}
                    <input type="checkbox" class="form-check-input" v-model="item.isDone">
                </label>
            </div>
        </li>
    </ul>
    <h1>ToDo Items</h1>
    <ul>
        <li v-for="item in toDoItems" :key="item.id">
            <div class="form-check form-switch">
                <label>
                    {{ item.name }}
                    <input type="checkbox" class="form-check-input" v-model="item.isDone">
                </label>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
let id = 0;

export default {
    data(){
        return {
            message: '',
            items: [
                {id: id++,name:'Piim', isDone: false},
                {id: id++,name:'Sai', isDone: true},
                {id: id++,name:'Viin', isDone: false},
                {id: id++,name:'Leib', isDone: true},
            ]
        }
    },
    methods: {
        add(){
            if(this.message.trim() !== ''){
                this.items.push({id: id++, name: this.message.trim(), isDone: false});
            }
            this.message = '';
        }
    },
    computed: {
        doneItems(){
            return this.items.filter(item => item.isDone);
        },
        toDoItems(){
            return this.items.filter(item => !item.isDone);
        }
    }
}
</script>

<style>

</style>