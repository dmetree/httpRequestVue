<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label>User Name</label>
                    <input class="form-control" type="text" v-model="user.username">
                </div>
                <div class="form-group">
                    <label>Mail address</label>
                    <input class="form-control" type="text" v-model="user.email">
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
                <hr>
                <button class="btn btn-primary" @click="fetchData">Get Data</button>
                <ul class="list-group">
                    <li class="list-group-item" v-for="u in users">The name is {{ u.username }} & that's the email: {{ u.email }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                user: {
                    username: '',
                    email: ''
                },
                users: []
            };
        },
        methods: {
            submit(){
                this.$http.post('', this.user)
                    .then(responce =>{
                        console.log(responce);
                    }, error => {
                        console.log(error);
                    });
            },
            fetchData(){
                this.$http.get('')
                    .then(responce => {
                        // const data = responce.json()
                        // This line will bring back a promice
                        return responce.json();
                        //.json() will parce the string into a js object
                        // We're storing the responce in 'data'
                        // console.log(data);
                    })
                    // .then(data => console.log(data)); 
                    // to check if we're getting data
                    .then(data => {
                        const resultArray = [];
                        for (let key in data){
                            // data - object // key - criptic string
                            resultArray.push(data[key]);
                        }
                        this.users = resultArray;
                        // users [] - in data
                    });
            }
        }
    }
</script>

<style>
</style>
