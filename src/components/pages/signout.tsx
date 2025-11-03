"use client";

import { signOut } from "next-auth/react";
import {PiSignOutLight} from "react-icons/pi"


const Signout = ()=>{
    return (
        <PiSignOutLight className="h-6 w-6 cursor-pointer" 
        onClick={()=>signOut()}
        />
    )
}

export default Signout;