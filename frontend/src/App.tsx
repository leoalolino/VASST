import { Toaster } from "sileo";
import { LoginModal } from "./components/loginModal";
import { DashboardLayout } from "./layout/student";
function App() {
  return (
    <>
      <Toaster
        position="top-right"
        options={{
          fill: "#1a1a1a",
          styles: {
            title: "text-white!",
            description: "text-white! capitalize",
          },
        }}
      />
      <LoginModal />
      <DashboardLayout />
    </>
  );
}

export default App;
