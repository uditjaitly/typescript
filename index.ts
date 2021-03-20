import axios from 'axios'

const url="https://jsonplaceholder.typicode.com/posts";

const data= axios.get(url).then(res=>{
    console.log(res.data);
})