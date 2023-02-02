import axios from 'axios';

export function callApi(method, endpoint, data) {
    return axios({
        method: method,
        url: `http://localhost:5000${endpoint}`,
        data: data,
        headers: {
            'Content-Type': 'application/json',
        }
      });
}

export const hockyAPI ={
    themhocky : (data)=>{
        return callApi('post',`/quantrivien/themhocky`,data);
    },
    layhocky :  callApi('get','/quantrivien/layhocky',null)


}