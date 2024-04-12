import React from "react";

import getUserSession from "@/lib/actions";
import { redirect } from "next/navigation";

import AuthForm from "@/components/AuthForm.js";
export default async function page() {
	 const {data} = await getUserSession();
	 if(data.user){
		 redirect("/admin/bheeshmas-stratagem/dashboard");
	 }
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="w-full">
				
				<AuthForm />
			</div>
		</div>
	);
}