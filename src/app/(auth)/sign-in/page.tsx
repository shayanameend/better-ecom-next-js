"use client";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { z } from "zod";

import { auth } from "~/auth/client";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";

const SignInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export default function SignInPage() {
  const form = useForm<z.infer<typeof SignInFormSchema>>({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof SignInFormSchema>) => {
    console.log({ data });

    const { data: response, error } = await auth.signIn.email(
      {
        email: data.email,
        password: data.password,
      },
      {
        onRequest: (ctx) => {
          console.log("onRequest", ctx);
        },
        onSuccess: (ctx) => {
          console.log("onSuccess", ctx);
        },
        onError: (ctx) => {
          console.log("onError", ctx);
        },
      },
    );

    console.log({ response, error });
  };
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn("w-2/3 max-w-xs space-y-6")}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="john@domain.com" {...field} />
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
          <Button type="submit" className={cn("w-full")}>
            Sign In
          </Button>
        </form>
      </Form>
    </>
  );
}
