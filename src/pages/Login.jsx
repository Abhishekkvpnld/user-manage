



const Login = () => {
    return (
        <div className="bg-slate-50 h-[100vh] w-[100vw] flex items-center justify-center">


            <div className=" w-full sm:w-[70%] md:w-[50%] bg-blue-50 border-blue-300 border hover:shadow-2xl min-h-[50%] p-5 rounded-2xl">
                <h1 className="font-black text-3xl">Welcome Back</h1>
                <p className="text-slate-500">Please enter your details</p>

                <div className="flex items-start gap-1 flex-col mt-4 w-[90%]">
                    <h4 className="font-semibold text-md">Email address</h4>
                    <input placeholder="admin@gmail.com" className="border-slate-600 border p-1.5 px-4 w-full rounded-xl" type="email" name="email" />
                </div>

                <div className="flex items-start gap-1 flex-col mt-4 w-[90%]">
                    <h4 className="font-semibold text-md">Password</h4>
                    <input placeholder="*********" className="border-slate-600 border px-4 p-1.5 w-full rounded-xl" type="email" name="email" />
                </div>

                <button className="border hover:bg-blue-800 transition-all w-[90%] mt-8 p-1 rounded-4xl cursor-pointer bg-blue-600 text-white py-1.5 font-semibold">Sign in</button>
                <p className="mt-5 cursor-pointer">Don't have an account?  <span className="underline text-purple-700">Sign Up</span></p>
            </div>

        </div>
    )
}

export default Login