import React from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useRouter } from "next/router";

export default function Login() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();

  React.useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (event == "SIGNED_OUT") router.push("/");
    });
  }, []);

  // React.useEffect(() => {
  //   if (session) {
  //     // Redirect to home page if already signed in using next router
  //     router.push("/");
  //   }
  // }, [session]);

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center">
      {!session ? (
        <>
          <h1 className="my-4 text-3xl">Login Page</h1>
          <Auth
            providers={[]}
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
            }}
            theme="default"
          />
        </>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl">You&apos;re already signed in!</h1>
        </div>
      )}
    </main>
  );
}
