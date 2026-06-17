import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login - Auth Form",
  description: "Login Form of Auth Form",
};

const page = () => {
  return (
    <section className="grid h-dvh place-items-center">
      <Card className="w-sm">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Login</CardTitle>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter>
          Do not have an account? <Link href={"/register"}> create</Link>
        </CardFooter>
      </Card>
    </section>
  );
};

export default page;
