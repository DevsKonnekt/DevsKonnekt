import { SignUpButton as Default } from "@clerk/nextjs";
import { Button } from "./ui/button";

export default function SignUpButton({ title, variant }) {
  return (
    <Default mode="modal">
      <Button
        variant={variant || "dafault"}
        className="primary-btn w-full sm:w-[283px] font-semibold mt-4 text-background text-lg"
      >
        {title}
      </Button>
    </Default>
  );
}
