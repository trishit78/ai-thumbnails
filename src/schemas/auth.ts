import { object, string } from "zod";

export const signInSchema = object({
    email:string({required_error:"Email is req"}).min(1,"Min character 1").email("Invalid email"),
    password:string({required_error:"Password is req"}).min(8,"Min character 8").max(32,"Max character is 32")

})