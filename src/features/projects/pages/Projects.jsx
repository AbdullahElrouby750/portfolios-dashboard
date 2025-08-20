import React from 'react'
import Card from '../../../shared/components/cards/Card'
import PageInfo from '../../../shared/components/PageInfo'
import CardsDisplayLayout from '../../../shared/components/cards/CardsDisplayLayout'

function Projects() {
    return (
        <div className=' grow h-full flex flex-col justify-between items-center p-4.5 relative'>
            <PageInfo title='Projects'/>
            <CardsDisplayLayout >
                <Card />
                <Card />
                <Card />
                <Card />
            </CardsDisplayLayout>
        </div>
    )
}

export default Projects