import { FC } from "react";
import { BsGithub, BsGoogle, BsFacebook } from "react-icons/bs";
import { signIn, useSession } from "next-auth/react";

const SignIn = () => {
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
};

export default SignIn;
