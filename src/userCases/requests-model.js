import axios from "axios"



class RequestModel{
    defaultUrl=process.env.REACT_APP_API_URL

    constructor(url){
        this.url=url;
    }
    async post(body){
        return await axios.post(this.defaultUrl+this.url,body)
}
    async get(){
        return await axios.get(this.defaultUrl+this.url)
}

}

export default RequestModel