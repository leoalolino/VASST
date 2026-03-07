import { Toaster } from "sileo";
import { LoginModal } from "./components/loginModal";
import { StudentDashboardLayout } from "./layout/student";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient.ts";
import { InstructorDashboardLayout } from "./layout/teacherDashboard.tsx";
import { FullScreenLoader } from "./components/loading.tsx";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState("");
  const [name, setName] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setLoggedIn(!!session);
      setLoading(false);
      setRole(session?.user?.user_metadata?.role ?? null);
      setName(session?.user.user_metadata.display_name ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);
  return (
    <>
      {isLoading && <FullScreenLoader />}
      <Toaster
        position={
          role === "student" || role === "teacher" ? "top-center" : "top-right"
        }
        options={{
          fill: "#1a1a1a",
          styles: {
            title: "text-green-500!",
            description: "text-green-500! first-letter:uppercase",
          },
        }}
      />
      {!loggedIn ? (
        <LoginModal
          setLoading={() => setLoading(true)}
          isLoading={setLoading}
        />
      ) : role === "student" ? (
        <StudentDashboardLayout />
      ) : role === "teacher" ? (
        <InstructorDashboardLayout />
      ) : null}
    </>
  );
}

export default App;
