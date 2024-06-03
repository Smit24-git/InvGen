import { BaseResponse } from "src/app/shared/responses/base-response.model";

export interface LoginModel{
    username: string;
    password: string;
} 

export interface RegisterUserResponse extends BaseResponse{
    userDetails: { id:string, userName:string }
}

export interface LoginUserResponse extends BaseResponse {
    token: string;
    userName: string;
    id: string;
    roles: string[];
}