import React from 'react'
import ProjectItems from './ProjectItems'
import firstproject from '../public/assets/images/Projects/Furniture_website_ss.png'
import SecondProject from '../public/assets/images/Projects/productsListing_project_ss.png'
import thirdproject from '../public/assets/images/Projects/crud.png'


function Project() {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='uppercase text-[#5651e5] text-xl tracking-widest py-4'>Projects</p>

                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItems title='Furniture Products Website' image={firstproject} technogy='Reactjs & Tailwind' projecturl='/Property' />
                    <ProjectItems title='Products Listing' image={SecondProject} technogy='Reactjs'  projecturl='/ProductsListing'/>
                    <ProjectItems title='Crud Operation' image={thirdproject} technogy='Reactjs '  projecturl='/CrudOperation'/>
                   
                </div>
            </div>

        </div>
    )
}

export default Project
