import { RegistrationForm } from "./registration-form";
import { z } from "zod";
import { schema } from "./registration-schema";

export default function Home() {
  const onDataAction = async (data: any) => {
    "use server";
    const parsed = schema.safeParse(data);
    if (parsed.success) {
      console.log("User registered");
      return { message: "User registered", user: parsed.data };
    } else {
      return {
        message: "Invalid data",
        issues: parsed.error.issues.map((issue) => issue.message),
      };
    }
  };

  return (
    <div className="mx-auto max-w-xl">
      <RegistrationForm onDataAction={onDataAction} />
    </div>
  );
}
