import React, { useRef } from 'react'
import { dockApps } from '../constants';
import { Tooltip } from 'react-tooltip';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import useWindowStore from '../store/window';


export default function Dock() {
    const dockRef = useRef(null);
    const { openWindow, closeWindow, windows } = useWindowStore();

    useGSAP(() => {
        const dock = dockRef.current;
        if (!dock) return;

        const icons = dock.querySelectorAll('.dock-icon');
        const animateIcons = (mouseX, duration = 0.25) => {
            const { left } = dock.getBoundingClientRect();

            icons.forEach((icon) => {
                const { left: iconLeft, width: iconWidth } = icon.getBoundingClientRect();
                const center = iconLeft - left + iconWidth / 2;
                const distance = Math.abs(mouseX - center);
                const intensity = Math.exp(-(distance ** 2.5) / 2000);

                gsap.to(icon, {
                    scale: 1 + 0.25 * intensity,
                    y: -15 * intensity,
                    duration: 0.2,
                    ease: 'power1.out',
                });


            })
        }

        const handleMouseMove = (e) => {
            const { left } = dock.getBoundingClientRect();
            const mouseX = e.clientX - left;
            animateIcons(mouseX);
        }

        const resetIcons = () => {
            icons.forEach((icon) => {
                gsap.to(icon, {
                    scale: 1,
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out',
                });
            });
        }

        dock.addEventListener('mousemove', handleMouseMove);
        dock.addEventListener('mouseleave', resetIcons);

        return () => {
            dock.removeEventListener('mousemove', handleMouseMove);
            dock.removeEventListener('mouseleave', resetIcons);
        }

    }, []);

    const toggleApp = (app) => {
        if (!app.canOpen) return;

        const window = windows[app.id];

        if (window.isOpen) {
            closeWindow(app.id);
        } else {
            openWindow(app.id);
        }

        console.log({ window });
    }

    // console.log({ dockApps });
    return (
        <section id='dock'>

            <div ref={dockRef} className='dock-container'>
                {
                    dockApps.map(({ id, name, icon, canOpen }) => (
                        <div key={id} className='relative flex justify-center'>
                            <button
                                type='button'
                                className={'dock-icon text-center'}
                                aria-label={name}
                                data-tooltip-id="dock-tooltip"
                                data-tooltip-content={name}
                                data-tooltip-delay-show={150}
                                disabled={!canOpen}
                                onClick={() => {
                                    if (id === "github") {
                                        window.open("https://github.com/leehourr", "_blank");
                                        return
                                    }
                                    toggleApp({ id, canOpen })
                                }}

                            >
                                <img
                                    src={`./images/${icon}`}
                                    // src='./assets/images/safari.png'
                                    alt={name}
                                    loading='lazy'
                                    className={`${canOpen ? '' : 'opacity-60'} mx-auto`}
                                />
                            </button>
                        </div>
                    ))}
                <Tooltip id="dock-tooltip" place="top" className='tooltip' />
            </div>
        </section>
    )
}
