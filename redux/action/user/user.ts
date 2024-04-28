import { apiService } from "../../store";

export function userSignUp(data: any){
    return apiService({
        method:"POST",
        data:data,
        url:"/signup"
    })
}