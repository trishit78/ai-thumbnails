"use server";

import { redirect } from "next/navigation";
import Signin from "~/components/pages/signin";
import { auth } from "~/server/auth"


const page = async () => {
  const session = await auth();

  if(session?.user){
    redirect("/dashboard")
  }

  return <>
    <Signin />
  </>
  
    // return (
    // <div>
    //   {session ? null : null}
    // </div>
  //  )
}

export default page
