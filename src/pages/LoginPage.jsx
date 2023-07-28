import { useState } from "react";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='bg-gray-50 font-worksans flex flex-col md:items-center justify-center  w-screen h-screen '>
            <h1 className='text-3xl m-8 text-center font-bold tracking-wide'>
                Expense Manager 💰
            </h1>
            <form
                className='py-16 px-8 md:px-16 rounded bg-blue-100 mx-4 md:w-2/3 lg:w-1/2 shadow'
                onSubmit={handleSubmit}
            >
                <div>
                    <h1 className='text-center text-2xl mb-4 text-slate-600'>
                        Welcome Back!
                    </h1>
                </div>
                <div className='bg-white shadow rounded focus-within:shadow-xl px-10 py-5 space-y-8'>
                    <div className='flex flex-col space-y-4'>
                        <label className='text-slate-600 font-semibold text-lg'>
                            Email
                        </label>
                        <input
                            type='email'
                            placeholder='Enter your email'
                            className='focus:outline-none border-b-2 focus:border-b-blue-300'
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col space-y-4'>
                        <label className='text-slate-600 font-semibold text-lg'>
                            Password
                        </label>
                        <input
                            type='password'
                            placeholder='Enter your password'
                            className='focus:outline-none border-b-2  focus:border-b-blue-300'
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='flex justify-center'>
                        <input
                            type='submit'
                            value='Login'
                            className='border-4 px-4 md:w-full mx-4 rounded-lg py-2 bg-blue-600 text-slate-200 hover:bg-blue-800 cursor-pointer '
                        />
                    </div>
                </div>
                <p className='px-4 text-sm mt-4'>
                    Don't Have an Account?{" "}
                    <a href='/signup' className='underline'>
                        Sign up
                    </a>
                </p>
            </form>
        </div>
    );
}

export default LoginPage;
