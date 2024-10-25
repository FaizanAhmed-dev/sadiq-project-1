import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Register } from "@/app/modules/ExecutiveSummary/auth/Register";
import { Login } from "@/app/modules/ExecutiveSummary/auth/Login";
import Image from "next/image";
import { Images } from "@/app/utils/contants/Images";

const AuthPage = () => {
  return (
    <div className="flex flex-col justify-center h-[100vh] items-center">
      <div className="flex gap-3 pb-3 border-gray-300">
        <Image src={Images.logo} alt="logo" width={22} height={22} />
        <span className=" font-semibold text-sidebarColor text-xl md:text-2xl">
          Admin Dashboard
        </span>
      </div>
      <Tabs defaultValue="Login" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="Login" className="w-1/2">
            Login
          </TabsTrigger>
          <TabsTrigger value="Register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="Login">
          <div>
            <Login />
          </div>
        </TabsContent>
        <TabsContent value="Register">
          <Register />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthPage;
