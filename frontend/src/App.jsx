import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"
import { Navigate, Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import AuthPage from "./pages/AuthPage"


const App = () => {
  return (
    <>
      <SignedIn>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<Navigate to={"/"} replace />} />
        </Routes>
        <button style={{ position: 'absolute', top: 10, right: 10 }}>Sign Out <UserButton /></button>
      </SignedIn>

      <SignedOut>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="*" element={<Navigate to={"/auth"} replace />} />
        </Routes>
      </SignedOut>
    </>
  );
};

export default App