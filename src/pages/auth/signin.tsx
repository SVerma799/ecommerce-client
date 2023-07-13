import { FC, useEffect } from "react";
import { BsGithub, BsGoogle, BsFacebook } from "react-icons/bs";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const SignIn = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const provider = [
    {
      name: "Google",
      Icon: BsGoogle,
    },
    {
      name: "Facebook",
      Icon: BsFacebook,
    },
    {
      name: "Github",
      Icon: BsGithub,
    },
  ];

  if (!session) {
    return (
      <div className="flex font-signika flex-col items-center justify-center h-screen ">
        <div className="flex flex-col space-y-2 border-2 border-grey-900 p-10 rounded-md border-indigo-800">
          <h1 className="text-3xl font-semibold text-center ">Sign In</h1>
          <p className="text-center ">With</p>
          {provider.map(({ name, Icon }) => (
            <button
              key={name}
              className="flex items-center justify-center px-4 py-2 space-x-2 text-white bg-indigo-800 rounded-md mb-8"
              onClick={() => signIn(name.toLowerCase())}
            >
              <Icon />
              <span>Sign in with {name}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  setTimeout(() => {
    router.push("/");
  }, 2000);
  return (
    <div className="flex font-signika flex-col items-center justify-center h-screen ">
      <div className="flex flex-col space-y-2 border-2 border-grey-900 p-10 rounded-md border-indigo-800">
        <p className="text-center ">Welcome</p>
        <h1 className="text-3xl font-semibold text-center ">
          {session?.user?.name}
        </h1>
        <p className="text-center ">You are signed in</p>
      </div>
    </div>
  );
};

export default SignIn;
