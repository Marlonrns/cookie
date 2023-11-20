<template>
    <div class="container">
        <button class="btn btn-primary" @click="prev" :disabled="!info.prev">Previous</button>
        <button class="btn btn-primary" @click="next" :disabled="!info.next">Next</button>
        <div class="row">
            <div class="col-3 mt-3" v-for="char in results">
                <div class="card">
                    <img :src="char.image" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ char.name }}</h5>
                        <p class="card-text">
                            <table>
                                <tr>
                                    <th>Status:</th>
                                    <td>{{ char.status }}</td>
                                </tr>
                                <tr>
                                    <th>Gender:</th>
                                    <td>{{ char.gender }}</td>
                                </tr>
                            </table>
                        </p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    created(){
        this.getCharacters('https://rickandmortyapi.com/api/character');
    },
    mounted(){
        document.addEventListener('scroll', ()=> {
            if(window.scrollY+window.innerHeight > document.body.clientHeight-100){
                if(!this.loading && this.info.next){
                    this.next();
                }
            }
        });
    },
    data(){
        return {
            results: [],
            info: {
                count: 0,
                pages: 0,
                next: null,
                prev: null
            },
            loading: false
        }
    },
    methods: {
        getCharacters(url){
            this.loading = true;
            axios.get(url).then(response => {
                console.log(response.data);
                this.results = [...this.results, ...response.data.results];
                this.info = response.data.info;
                this.loading = false;
            });
        },
        next(){
            this.getCharacters(this.info.next);
        },
        prev(){
            this.getCharacters(this.info.prev);
        }
        
    }
}
</script>