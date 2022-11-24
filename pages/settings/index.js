import {useRouter} from 'next/router'
import Link from 'next/link'

const Settings = () => {
    const router = useRouter()
    return <div>
        <h2>Settings</h2>
        <Link href="/">Return to Main</Link>
    </div>
}

export default Settings