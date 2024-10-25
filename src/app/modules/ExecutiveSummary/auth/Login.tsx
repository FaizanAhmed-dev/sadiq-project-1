"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { auth, signInWithEmailAndPassword } from "@/Firebase/firebaseConfig.js";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

const formSchema = z.object({
  email: z.string().email("Invalid email address.").min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

interface FieldProps {
  email: string;
    password: string;
    title: string;
}

export function Login() {
  const [loading, isSetLoading] = useState(false);
 const router = useRouter(); 
  const form = useForm<FieldProps>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FieldProps) => {
    if (!loading) {
      isSetLoading(true);
    }

    try {
      const signUp = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log(signUp);
      toast({
        title: "Login Successfully!",
      });
    } catch (error) {
        toast({
          title: "Invalid Credentials",
        });
    }
    finally {
      isSetLoading(false);
    }
  };

  useEffect(() => {
    const IsLogin = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });

      return () => IsLogin();
  }, []);

  return (
    <Form {...form}>
      <form action='post' onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-full bg-sidebarColor hover:bg-sidebarColor"
          type="submit"
        >
          {loading ? "Loading..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
