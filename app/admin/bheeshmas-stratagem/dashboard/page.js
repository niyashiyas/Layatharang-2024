'use client'
import withAuth from "@/components/auth"

function Dashboard () {
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}

export default withAuth(Dashboard)