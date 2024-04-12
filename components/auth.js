"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Loader, Loader2 } from "lucide-react";
import getUserSession from "@/lib/actions";



const withAuth = (
  WrappedComponent
) => {
  const AuthProtect= (props) => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        try {
            const { data } = await getUserSession();
          setUser(data.user);
          if (!data.user) {
            router.push("/admin/bheeshmas-stratagem");
          }
        } catch (error) {
          console.error("You are not authenticated");
          router.replace("/admin/bheeshmas-stratagem");
        
        }
      };

      fetchData();
    }, [router]);

    if (!user) return  ( <div className="flex justify-center items-center h-screen">
    <Loader2 className="w-16 h-16 text-blue-500 animate-spin" /> 
  </div>); // or display loading spinner

    return <WrappedComponent {...props} />;
  };

  return AuthProtect;
};

export default withAuth; 