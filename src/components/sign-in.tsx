'use client'

import { useUser } from '@clerk/nextjs'
import Link from 'next/link'

export default function SignInCTA() {
    const { isSignedIn } = useUser()

    if (!isSignedIn) return <Link href='/sign-in'>Sign In</Link>

    return null
}
