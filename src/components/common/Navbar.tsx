'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, Settings, User } from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/Firebase/firebaseConfig";
import { useEffect } from "react";
import { useUser } from "@/Context/AuthContext";

const Navbar = () => {
 const router = useRouter(); 
  const { user } = useUser();
  console.log(user);
  const Logout = () => {
    signOut(auth).then(() => {
       toast({
        title: "Logout Sucesfully",
       });
      router.push('/auth');
    }).catch((error) => {
   toast({
     title: error,
   });
});
  }


   useEffect(() => {
     const IsUser = onAuthStateChanged(auth, (user) => {
       if (!user) {
         router.push("/auth");
       }
     });
     return () => IsUser();
   });
  
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>{user && user?.email}</p>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>
            <div className="flex items-center">
              <User className="w-5 h-5" />
              <span className="ml-2">Profile</span>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <div className="flex items-center">
              <Settings className="w-5 h-5" />
              <span className="ml-2">Settings</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex items-center">
              <LogOut className="w-5 h-5" />
              <span className="ml-2" onClick={Logout}>
                Logout
              </span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Navbar
