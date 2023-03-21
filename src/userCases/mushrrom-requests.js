import RequestModel from "./requests-model";

export function mushroomPost(body){
    const mushroomModel=new RequestModel("mushroom")
    mushroomModel.post(body)
}