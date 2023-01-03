import { useEffect } from "react";
import { useRouter } from "next/navigation";

// simple 404 function to redirect to home
export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  });

  return null;
}
