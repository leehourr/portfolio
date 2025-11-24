import { locations } from '#constants'
import useLocationStore from '#store/location'
import useWindowStore from '#store/window'
import { useGSAP } from '@gsap/react'
import clsx from 'clsx'
import { Draggable } from 'gsap/Draggable'
import React from 'react'

const projects = locations.work?.children ?? []

export default function Home() {
    const { openWindow } = useWindowStore()
    const { setActiveLocation } = useLocationStore()

    const handleOpenFolder = (project) => {
        setActiveLocation(project)
        openWindow('finder')
    }

    useGSAP(() => {
        Draggable.create('.folder')
    }, [])

    return (
        <section id='home'>
            <ul>
                {projects.map((project) => (
                    <li onClick={() => {
                        handleOpenFolder(project)
                    }} className={clsx("group folder", project.windowPosition)}>

                        <img src="/images/folder.png" alt={project.name} />
                        <p>{project.name}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}
