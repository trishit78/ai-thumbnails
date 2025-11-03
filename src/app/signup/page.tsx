"use server";

import { redirect } from "next/navigation";
import Signup from "~/components/pages/signup";
import { auth } from "~/server/auth"


const page = async () => {
  const session = await auth();

  if(session?.user){
    redirect("/dashboard")
  }

  return <>
    <Signup />
  </>
  
   
}

export default page
