import Login from "@/components/Login";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import Layout from "../../layout/layout";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  // Github Handler function
  async function handleGitHubSignIn() {
    signIn("github", { callbackUrl: "http://localhost:3000" });
  }
  // Google Handler function
  async function handleGoogleSignIn() {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  }
  // Google Handler function
  async function handleFacebookSignIn() {
    signIn("facebook", { callbackUrl: "http://localhost:3000" });
  }
  return (
    <Layout>
      <div className="px-20 flex flex-col justify-evenly">
        <section className="flex justify-between">
          <select className="ml-auto border">
            <option>English(US)</option>
          </select>
        </section>
        <div>
          <h1 className="text-2xl">Welcome Back!</h1>
          <div className="flex justify-between mt-4">
            <div className="border rounded-md shadow-md text-gray-400 font-light text-xs flex items-center px-2 py-1.5 gap-2 cursor-pointer">
              <FaFacebook className="text-black" />
              <button
                type="button"
                className="text-xs font-semibold"
                onClick={handleFacebookSignIn}
              >
                Login with Facebook
              </button>
            </div>
            <div className="border rounded-md shadow-md text-gray-400 font-light text-xs flex items-center px-2 py-1.5 gap-2 cursor-pointer">
              <FcGoogle />
              <button
                type="button"
                className="text-xs font-semibold"
                onClick={handleGoogleSignIn}
              >
                Sign in with Google
              </button>
            </div>
            <div className="border rounded-md shadow-md text-gray-400 font-light text-xs flex items-center px-2 py-1.5 gap-2 cursor-pointer">
              <FaGithub className="text-black" />
              <button
                type="button"
                className="text-xs font-semibold"
                onClick={handleGitHubSignIn}
              >
                Continue with Github
              </button>
            </div>
          </div>
        </div>
        <h2 className="text-center text-2xl text-gray-400">OR</h2>
        <Login />
      </div>
    </Layout>
  );
};

export default LoginPage;
