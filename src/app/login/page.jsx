'use client';
import Image from 'next/image';
import LoginLogo from '../../../public/assets/loginLogo.svg';
import SigninButton from '@/components/SigninButton';

const Home = () => {
    return (
        <div className='flex min-h-screen w-full bg-white text-black'>
            <div className='hidden h-screen items-center text-center md:flex md:w-2/3'>
                <Image src={LoginLogo} alt='loginLogo' />
            </div>
            <div className='flex w-full flex-col items-center justify-center bg-slate-300 p-3  text-2xl font-semibold md:w-1/3 '>
                <h1 className='text-center text-lg md:text-2xl'>CE Project Management | KMITL</h1>
                <hr />
                <SigninButton/>
                {/* <button className='hover: mt-4 flex items-center justify-center rounded-md bg-white p-2 text-sm font-medium shadow-md'>
                
                Sign in with Google
                </button> */}
            </div>
        </div>
    );
};

export default Home;