'use client'

import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'


function HeaderNew() {
    const { data: session } = useSession()

    return (
        <>
            {session ? (
                <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <Link href='/' className="btn btn-ghost normal-case text-xl">CommentHear</Link>
                    </div>
                    <div className="flex-none gap-2">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link href='/upgrade'>Upgrade</Link></li>
                        </ul>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {session?.user.image ? (
                                        <img src={session.user.image} alt={session.user.name} />
                                    ) : (
                                        <svg
                                            className='h-full w-full text-stone-300'
                                            fill='currentColor'
                                            viewBox='0 0 24 24'
                                        >
                                            <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                                        </svg>
                                    )}
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link href='/dashboard'>Dashboard</Link></li>
                                <li>
                                    <Link href='/profile' className="justify-between">Profile</Link>
                                </li>
                                <li>
                                    <Link href='/preferences'>Settings</Link>
                                </li>
                                <li>
                                    <a onClick={() => signOut()}>Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            ) : (
                <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <Link href='/' className="btn btn-ghost normal-case text-xl">CommentHear</Link>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link href='/pricing'>Pricing</Link></li>
                            <li><a onClick={() => signIn()}>Sign In</a></li>
                        </ul>
                    </div>
                </div>

            )}
        </>
    )
}

export default HeaderNew