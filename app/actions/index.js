"use server"

import getUserSession from "@/lib/actions";
import createSupabaseServerClient from "@/lib/supabase/server";
import { redirect } from "next/navigation";



// export async function signUpWithEmailAndPassword(data: {
// 	email: string;
// 	password: string;
// 	confirm: string;
// }) {
// 	const supabase =  await createSupabaseServerClient();
// 	 const result = await supabase.auth.signUp({email: data.email, password: data.password});
// 	 return JSON.stringify(result);
// }
export async function signInWithEmailAndPassword(data) {
	const supabase = await createSupabaseServerClient();
	const result = await supabase.auth.signInWithPassword(data);
	return JSON.stringify(result);
}
export async function Logout(){
   const supabase =  await createSupabaseServerClient()
   const{data} = await getUserSession()
    await supabase.auth.signOut()
    return;
    
    
}