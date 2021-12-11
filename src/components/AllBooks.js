import axios from 'axios'

export const getAllBooks = () => {
    return axios.get("http://localhost:3002/books")
        .then(res => {
          const {data} = res;
          return data;
        })
        .catch(err => console.log(err));

}