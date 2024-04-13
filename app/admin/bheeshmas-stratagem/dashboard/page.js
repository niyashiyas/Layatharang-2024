'use client'
import withAuth from "@/components/auth"
import { AddResultForm } from "@/components/component/add-result-form"

function Dashboard () {
    return (
        <div>
            <AddResultForm />
        </div>
    )
}

export default withAuth(Dashboard)