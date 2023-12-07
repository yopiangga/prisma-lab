import imageLogo from "src/assets/images/logo.png";

export function SignInPage() {
  return (
    <div className="min-h-screen bg-white flex flex-row justify-center">
      <div className="w-11/12 relative">
        <div className="mt-20">
          <img src={imageLogo} />
          {/* <Image source={imageLogo} className="" /> */}
        </div>
        <div className="mt-4">
          <h4 className="text-black text-3xl font-bold">Sign In</h4>
        </div>

        <div className="mt-14 mb-2">
          <div className="relative">
            <h4 className="text-black text-lg font-semibold">Email</h4>
            <input
              className="border border-neutral-400 rounded-md mt-1 px-4 text-md py-2 text-black"
              value="yopiangga@email.com"
            />
          </div>
          <div className="relative mt-2">
            <h4 className="text-black text-lg font-semibold">Password</h4>
            <input
              className="border border-neutral-400 rounded-md mt-1 px-4 text-md py-2 text-black"
              value="123456"
              secureTextEntry={true}
            />
          </div>
        </div>

        <button>
          <h4 className="text-primary-main text-md">Forgot Password?</h4>
        </button>

        <div className="mt-16">
          <button
            className="bg-primary-main rounded-md py-2"
            onClick={() => props.navigation.navigate("Home")}
          >
            <h4 className="text-white text-lg text-center font-semibold">
              Sign In
            </h4>
          </button>

          <h4 className="mt-2 text-black">
            By continuing, you agree to our{" "}
            <h4 className="text-primary-main">Terms of Service </h4>
            and <h4 className="text-primary-main">Privacy Policy</h4>.
          </h4>
        </div>
      </div>
    </div>
  );
}
