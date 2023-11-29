"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";
import GithubAuthButton from "./githubAuthButton";
import Link from "next/link";
import { FaRegEye, FaRegEyeSlash, FaToggleOff } from "react-icons/fa";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const togglePasswordVisibility = (e) => {
  const passwordInput = document.getElementById("password");
  const passwordConfirmInput = document.getElementById("confirm");
  if (e.target.checked) {
    passwordInput.type = "text";
    passwordConfirmInput.type = "text";
  } else {
    passwordInput.type = "password";
    passwordConfirmInput.type = "password";
  }
};

export default function AuthModal({ title, classNames }) {
  const {
    handleSubmit,
    register,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm();
  const onRegister = (data) => {
    // send data to backend
    setTimeout(() => {
      console.log(data);
      reset();
    }, 2000);
  };

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    reset: reset2,
    formState: { errors: errors2, isSubmitting: isSubmitting2 },
  } = useForm();

  const onLogin = (data) => {
    // send data to backend
    setTimeout(() => {
      console.log(data);
      reset2();
    }, 2000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={`${classNames ? classNames : "primary-btn"}`}>
          {title}
        </Button>
      </DialogTrigger>
      <DialogContent
        className={`sm:max-w-[800px] max-h-[90vh] overflow-y-scroll no-scrollbar z-[9000] bg-white shadow-2xl shadow-primary/50 ${poppins.className}`}
      >
        <Tabs defaultValue="login" className="w-full">
          <DialogHeader>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Sign In</TabsTrigger>
              <TabsTrigger value="register">Sign Up</TabsTrigger>
            </TabsList>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <TabsContent value="login">
              <Card className="flex items-center gap-4">
                <div className="flex-1">
                  <CardHeader>
                    <CardTitle className="mb-3">
                      Sign in to Your Account
                    </CardTitle>
                    <CardDescription className="text-primary font-semibold">
                      Welcome back! Sign in and pick where you left off.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <form onSubmit={handleSubmit2(onLogin)} className="w-full">
                      <div className="space-y-1">
                        <Label className="font-normal text-xs" htmlFor="email">
                          Email:
                        </Label>
                        <Input
                          className="input"
                          id="email"
                          type="email"
                          autoFocus
                          {...register2("email", {
                            required: "Email is required",
                            minLength: {
                              value: 8,
                              message: "Email must be at least 8 characters",
                            },
                            pattern: {
                              value: /\S+@\S+\.\S+/,
                              message:
                                "Entered value does not match email format",
                            },
                          })}
                          placeholder="johndoe@devskonnekt.com"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label
                          className="font-normal text-xs"
                          htmlFor="password"
                        >
                          Password:
                        </Label>
                        <div className="relative">
                          <Input
                            className="input"
                            id="password"
                            type="password"
                            {...register2("password", {
                              required: "Password is required",
                            })}
                            placeholder="*********"
                          />
                          <p className="text-red-500 mt-1 text-xs">
                            {errors2.password?.message}
                          </p>
                          <span className="absolute right-2 top-2">
                            <FaRegEye className="text-primary text-lg" />
                            <FaRegEyeSlash className="text-primary text-lg hidden" />
                          </span>
                        </div>
                      </div>
                      <br />
                      <div className="flex gap-2 items-center justify-between">
                        <div className="flex items-start space-x-2">
                          <Checkbox
                            id="rememberMe"
                            {...register2("rememberMe")}
                          />
                          <label
                            htmlFor="rememberMe"
                            className="font-normal text-xs leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Remember Me
                          </label>
                        </div>
                        <button className="text-sm text-secondary font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Forgot Password?
                        </button>
                      </div>
                      <Button
                        disabled={isSubmitting2}
                        type="submit"
                        className="primary-btn !w-full disabled:bg-grey-500 mt-4"
                      >
                        Log in
                      </Button>
                    </form>
                  </CardContent>
                  <CardFooter>
                    <GithubAuthButton />
                  </CardFooter>
                </div>
                <CardContent className="w-full bg-primary/20 flex-1 rounded-[10px] py-8 flex flex-col items-center justify-center gap-4">
                  <Image
                    src="/images/auth.jpeg"
                    width={1920}
                    height={1080}
                    alt="Auth"
                    className="rounded-[10px] w-full object-cover"
                  />
                  <p className="text-center text-primary">
                    Welcome back! Sign in to access your developer account and
                    continue your journey with us. Unlock powerful tools,
                    collaborate with peers, and build amazing applications.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="register">
              <Card className="flex gap-4 h-full">
                <div className="flex-1">
                  <CardHeader>
                    <CardTitle className="mb-3">Create an account</CardTitle>
                    <CardDescription className="text-primary font-semibold">
                      Sign up now and unlock the fun!
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <form
                      onSubmit={handleSubmit(onRegister)}
                      className="w-full"
                    >
                      <div className="space-y-1">
                        <Label className="font-normal text-xs" htmlFor="name">
                          FullName:
                        </Label>
                        <Input
                          className="input"
                          type="text"
                          id="name"
                          autoFocus
                          {...register("fullName", {
                            required: "Name is required",
                          })}
                          placeholder="John Doe"
                        />
                        {errors.fullName && (
                          <p className="text-red-500 text-xs">
                            {errors.fullName.message}
                          </p>
                        )}
                      </div>
                      <div className="space-y-1">
                        <Label
                          className="font-normal text-xs"
                          htmlFor="username"
                        >
                          Username:
                        </Label>
                        <Input
                          className="input"
                          type="text"
                          id="username"
                          {...register("username", {
                            required: "Username is required",
                            minLength: {
                              value: 3,
                              message: "Username must be at least 3 characters",
                            },
                          })}
                          placeholder="johndoe"
                        />
                        {errors.username && (
                          <p className="text-red-500 text-xs">
                            {errors.username.message}
                          </p>
                        )}
                      </div>
                      <div className="space-y-1">
                        <Label className="font-normal text-xs" htmlFor="email">
                          Email:
                        </Label>
                        <Input
                          className="input"
                          id="email"
                          type="email"
                          {...register("email", {
                            required: "Email is required",
                            minLength: {
                              value: 8,
                              message: "Email must be at least 8 characters",
                            },
                            pattern: {
                              value: /\S+@\S+\.\S+/,
                              message:
                                "Entered value does not match email format",
                            },
                          })}
                          placeholder="johndoe@devskonnekt.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      <div className="space-y-1">
                        <Label
                          className="font-normal text-xs"
                          htmlFor="password"
                        >
                          Password:
                        </Label>
                        <Input
                          className="input"
                          id="password"
                          type="password"
                          {...register("password", {
                            required: "Password is required",
                            minLength: {
                              value: 10,
                              message:
                                "Password must be at least 10 characters",
                            },
                          })}
                          placeholder="*********"
                        />
                        {errors.password && (
                          <p className="text-red-500 text-xs">
                            {errors.password.message}
                          </p>
                        )}
                      </div>
                      <div className="space-y-1">
                        <Label
                          className="font-normal text-xs"
                          htmlFor="confirm"
                        >
                          Confirm Password:
                        </Label>
                        <Input
                          className="input"
                          id="confirm"
                          type="password"
                          {...register("confirmPassword", {
                            validate: (value) =>
                              value === getValues("password") ||
                              "The passwords do not match",
                          })}
                          placeholder="*********"
                        />
                        {errors.confirmPassword && (
                          <p className="text-red-500 text-xs">
                            {errors.confirmPassword.message}
                          </p>
                        )}
                      </div>
                      <Separator />
                      <div className="flex items-start space-x-2 my-4">
                        <p className="text-primary text-xs leading-4 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          By signing up, you agree to our{" "}
                          <Link href="/" className="text-secondary">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="/" className="text-secondary">
                            Privacy Policy
                          </Link>
                          .
                        </p>
                      </div>
                      <Button
                        disabled={isSubmitting}
                        type="submit"
                        className="primary-btn !w-full disabled:bg-grey-500"
                      >
                        Register
                      </Button>
                    </form>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-4 items-start">
                    <GithubAuthButton />
                  </CardFooter>
                </div>
                <CardContent className="w-full bg-primary/20 flex-1 rounded-[10px] py-8 flex flex-col items-center justify-center gap-4">
                  <Image
                    src="/images/auth.jpeg"
                    width={1920}
                    height={1080}
                    alt="Auth"
                    className="rounded-[10px] w-full object-cover"
                  />
                  <p className="text-center text-primary">
                    Unlock Your Potential. Join our developer community and
                    unleash your creativity. Access powerful tools, collaborate
                    with peers, and stay ahead of the curve. Sign up today!
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
