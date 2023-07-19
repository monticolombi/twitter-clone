import { SignUp } from '@clerk/nextjs'

export default function Page() {
    return (
        <main className='flex min-h-screen flex-col items-center p-24'>
            <SignUp />
        </main>
    )
}
