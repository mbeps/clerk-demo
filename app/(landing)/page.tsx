import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return <div><p>This is the landing page for this app which in not protected by Clerk</p>
    <Link href={"/sign-up"}>
      <Button>
        Sign Up
      </Button>
    </Link>
    <Link href={"/sign-up"}>
      <Button>
        Log In
      </Button>
    </Link>
  </div>;
};
export default page;
