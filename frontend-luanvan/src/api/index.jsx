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

export const hockyAPI = {

    themhocky: (data) => {
        return callApi('post', `/quantrivien/themhocky`, data);
    },

    layhocky: () => { return callApi('get', '/quantrivien/layhocky', null) },

    khoahocky: (data) => {
        return callApi('put', `/quantrivien/khoahocky`, data);
    },

    mokhoahocky: (data) => {
        return callApi('put', `/quantrivien/mokhoahocky`, data);
    },


}

export const detaiAPI = {
    themdetai: (data) => {
        return callApi('post', `/giangvien/themdetai`, data);
    },
    laydetai: () => {
        return callApi('get', `/giangvien/laydetai`,null);
    },
    laydsdetai: (id) => {
        return callApi('get', `/giangvien/laydsdetai/${id}`,null);
    },
    laydsdetaichuaduyet: () => {
        return callApi('get', `/truongkhoa/laydsdetaichuaduyet`,null);
    },
    laydsdetaidaduyet: () => {
        return callApi('get', `/laydsdetaidaduyet`,null);
    },
    lay1detai: (id) => {
        return callApi('get', `/giangvien/lay1detai/${id}`, null);
    },
    duyetdetai: (id) => {
        return callApi('put', `/truongkhoa/duyetdetai`,id)
    },
    yeucauchinhsua: (id) => {
        return callApi('put', `/truongkhoa/yeucauchinhsua`,id)
    },
    capnhatdetai: (id,data) => {
        return callApi('put', `/giangvien/capnhat/${id}`, data);
    },
    chondetai: (data) => {
        return callApi('put',`/chondetai`,data);
    },
    phancongdetai: (data) => {
        return callApi('post',`/truongkhoa/phancong`,data)
    }

}
export const nguoidungAPI = {
    dangky: (data) => {
        return callApi('post', `/dangky`, data);
    },
    dangnhap: (data) => {
        return callApi('post', `/dangnhap`, data);
    },
    danhsachdetai_muonlam: (id) => {
        return callApi('get',`/laydanhsachdetaimuonlam/${id}`,id)
    },
    sinhvien: () => {
        return callApi('get',`/sinhvien`,null)
    }
}

