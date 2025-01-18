import { auth, signOut, signIn } from '@/auth';


// import { signOut, signIn } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link'

let id;
const Navbar = async() => {
    const session = await auth();
   
  return (
   
    
    <header className='px-5 py-1 bg-orange-700 shadow-sm font-work-sans'>
        <nav className='flex justify-between items-center'>
          <Link href='/'>
          <Image src='/logo.png' alt='logo' width={60} height={30} className='rounded-full mx-4'/>
          <div className=''>
          <span className='text-2xl'>LISTING</span>
          <span className='text-yellow-200'>app</span>
          </div>
          </Link>
          <div className='flex items-center gap-5 text-black'>
              {session && session ?. user ? (
                <>
                  <Link href='/startup/create'>
                  <span>Create</span>
                  </Link>
                  <form action={async () => {
                    "use server"
                    await signOut({ redirectTo: "http://localhost"})
                  }}>
                    <button type='submit'>Logout</button>
                  </form>
                  <Link href={`/user/${session?.id}`}>
                   
                    <span>{session?.user?.name}</span>
                  </Link>
                </>
              ) : (
               
              <form action={async () => {
                "use server"
                await signIn('github')
                }}>
                <button type='submit'>Login</button>
              </form>
             
               )
            }
        
          </div>
        
        </nav>
        
    </header>
    
  )
}

export default Navbar