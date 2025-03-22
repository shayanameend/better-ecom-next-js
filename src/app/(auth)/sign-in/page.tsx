"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { auth } from "~/auth/client";
import { LoadingButton } from "~/components/ui/button";
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
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof SignInFormSchema>>({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof SignInFormSchema>) => {
    await auth.signIn.email(data, {
      onRequest: (ctx) => {
        setIsLoading(true);
      },
      onSuccess: (ctx) => {
        toast.success("Signed in successfully");
      },
      onError: (ctx) => {
        toast.error(ctx.error.message);
      },
    });

    setIsLoading(false);
    form.reset();
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
          <LoadingButton
            className={cn("w-full")}
            type="submit"
            isLoading={isLoading}
          >
            Sign In
          </LoadingButton>
        </form>
      </Form>
    </>
  );
}
