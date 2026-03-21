import { works } from '@/data/works'
import WorkClient from './workClient'
import { notFound } from 'next/navigation'

export default async function WorkPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const work = works.find(item => item.id === id)
    if (!work) notFound()

    return <WorkClient work={work} />
}