import RequestModel from "./requests-model";

export function userPost(body){
    const userModel=new RequestModel("user")
    userModel.post(body)
}