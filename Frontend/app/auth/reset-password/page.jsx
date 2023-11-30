import { PasswordResetForm } from "@/components/auth/resetPasswordForm";
import Image from "next/image";

const ResetPasswordPage = () => {
  return (
    <div className="max-w-7xl mx-auto  pt-[120px]">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-4 md:max-w-4xl w-full md:h-[70dvh] shadow-xl shadow-primary rounded-xl mx-auto bg-white">
        <div className="w-full h-full flex-1 flex flex-col items-start justify-center py-8 px-4">
          <h1 className="text-2xl font-bold text-primary">
            Reset Your Password
          </h1>
          <p className="text-primary text-md text-start font-semibold mt-2 mb-6">
            Enter your new password below.
          </p>
          <PasswordResetForm />
          <p className="text-primary text-sm text-start mt-4">
            Don&#39;t want to rest password anymore?{" "}
            <span className="text-secondary font-medium">Sign in</span>
          </p>
        </div>
        <div className="w-full flex-1 bg-primary/20 rounded-[15px] flex flex-col items-center justify-center py-8 px-4 m-4">
          <Image
            src="/images/auth.jpeg"
            width={1920}
            height={1080}
            alt="Auth Image"
            className="w-full h-[300px] object-cover rounded-[10px] mb-4"
          />
          <p className="text-center text-primary">
            Don't worry, we've got your back! Reset your password to regain
            access to your developer account. Enter a new password to secure
            your account and get back to building amazing things!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
