import Axios from 'axios'


const axios = Axios.create({
    baseURL: 'http://localhost:5000',
})

export default class API {

    static async getColor(id) {
            const resp = await axios.get(`/color/${id}`)
                // console.log(resp.data)
            return resp.data
        }
        // static async getPosts() {
        //     const resp = await axios.get(`/posts`)
        //     return resp.data
        // }
    static async sendColor(id) {
        const resp = await axios.post(`/sendColor`, {
            color: id
        })
        return resp.data
    }
}