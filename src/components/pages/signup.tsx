"use client"

import Link from "next/link"

import { IoMdArrowBack } from "react-icons/io";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import type z from "zod";
import { signInSchema } from "~/schemas/auth";
import {signIn} from "next-auth/react"


import {zodResolver} from "@hookform/resolvers/zod"
import { toast } from "sonner";
import {  useRouter } from "next/navigation";
import { signup } from "~/actions/auth";




type FormValues = z.infer<typeof signInSchema>  // form schema to ts types by zod

const Signup = () => {


    const {register,handleSubmit,formState:{errors}} = useForm<FormValues>({
        resolver:zodResolver(signInSchema)
    });

    const onSubmit = async(data:FormValues)=>{
       const error =  await signup(data.email,data.password);
        console.log('hello')
        if(error){
            toast("Sign up failed", {
                description: error,
                action: {
                  label: "Close",
                  onClick: () => console.log(""),
                },
            })       
        } else{
            toast("Sign up successfull", {
                description: "You can now sign in with the new account",
            })  
        }
    }
  return (
    <div className="flex h-screen items-center justify-center">
    <div className="flex flex-col gap-4">
      <Link href="/" className="flex items-center gap-2">
        <IoMdArrowBack className="h-4 w-4" />
        <p className="leading-7">Go back</p>
      </Link>
      <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Sign up</CardTitle>
            <CardDescription>
              Enter your email and password below to sign up.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  {...register("email")}
                  id="email"
                  type="email"
                  placeholder="mail@gmail.com"
                />
                {/* {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )} */}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  {...register("password")}
                  id="password"
                  type="password"
                />
                {/* {errors.password && (
                  <p className="text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )} */}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2 mt-4">
              <Button type="submit" className="w-full">
                Sign up
              </Button>
              <Link href="/signin">
                <Button variant="link">Already have an account?</Button>
              </Link>
            </CardFooter>
          </form>
        </Card>
      </div>
      </div>
  )
}

export default Signup;
