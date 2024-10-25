"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import {
  auth,
  createUserWithEmailAndPassword,
} from "@/Firebase/firebaseConfig";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import { updateProfile } from "firebase/auth";

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
    name: string;
    user: string;
}

export function Register() {
  const [loading, setLoading] = useState(false);
  const form = useForm<FieldProps>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FieldProps) => {
    if (!loading) {
      setLoading(true);
    }

    try {
      const userData = await createUserWithEmailAndPassword(
        auth,
        data.email,
          data.password,
      );
         await updateProfile(userData.user, {
           displayName: data.name,
         });

      toast({
        title: "Registration Successful!",
      });

    } catch (error) {
        toast({
            title: "Something went wrong!",
        })
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        action="post"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User Name</FormLabel>
              <FormControl>
                <Input placeholder="Full Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
