"use server";

import { signInSchema } from "~/schemas/auth";
import { db } from "~/server/db";
import bcrypt from "bcryptjs"
import { redirect } from "next/navigation";

export const signup = async(email:string,password:string)=>{

    const isVaild = signInSchema.safeParse({email,password});
//    console.log(isVaild.data?.email)
    if(isVaild.error){
        return "Error";
    }
    const user = await db.user.findUnique({
        where: {
            email: isVaild.data?.email 
        }
    });

    if (user) {
        return "User already exists"
    }

    const hash = await bcrypt.hash(isVaild.data.password,10);


    await db.user.create({
        data:{
            email:isVaild.data.email,
            password:hash
        }
    });

    redirect('/signin');

}
