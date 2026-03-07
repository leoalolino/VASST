import { Toaster } from "sileo";
import { LoginModal } from "./components/loginModal";
import { StudentDashboardLayout } from "./layout/student";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient.ts";
import { InstructorDashboardLayout } from "./layout/teacherDashboard.tsx";

function App() {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState("");
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setLoggedIn(!!session);
      setLoading(false);
      setRole(session?.user?.user_metadata?.role ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);
  return (
    <>
      <Toaster
        position="top-right"
        options={{
          fill: "#1a1a1a",
          styles: {
            title: "text-green-500!",
            description: "text-green-500! capitalize",
          },
        }}
      />
      {loggedIn ? <StudentDashboardLayout /> : <LoginModal />}
      <InstructorDashboardLayout />
    </>
  );
}

export default App;
