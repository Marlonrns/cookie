<template>
    <button class="btn btn-primary" @click="message='Hello MM22'">Click me!</button>
    <input type="text" 
        class="form-control" 
        :value="message" 
        @input="message=$event.target.value">
    <input type="text" class="form-control" v-model="message">
    <h1>{{ message }}</h1>
    <button class="btn btn-danger" @click="counter++">Count is {{ counter }}</button>
    <button class="btn"
        :class="{'btn-danger': !btnState, 'btn-success': btnState}"
        @click="btnState=!btnState">Toggle</button>
</template>

<script>
export default {
    data(){
        return {
            message: 'Hello Vue',
            counter: 0,
            btnState: true
        }
    }
}
</script>

<style>

</style>