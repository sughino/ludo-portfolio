'use client'

import { useParams } from 'next/navigation'
import WorkPage from '@/ui/page/workPage'
import Footer from '@/ui/page/footer'

export default function Work() {
    const params = useParams()
    const id = params.id as string   
    return (
        <section className="noSpacing">
            <WorkPage id={id}/>
            <Footer/>
        </section>
    )
}