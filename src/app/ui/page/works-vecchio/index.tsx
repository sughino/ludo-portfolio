// import { WorkCard } from "../../components/card";
// import { works } from '@/app/data/works';
// import Carousel from "../../components/carousel";

// export default function Works () {

//     return (
//         <section className="bigSpacing">
//             <h2>WoRKs</h2>
//             <div className="h-(--spacing-80)" />
//             <Carousel data={works} />

//             {/* <WorkCard title={'user managment'} mainImg={'ndoendoe'} width={59} height={59} description={'Professional management platform for tracking project hours, leave requests, and business expenses.'}/> */}
//         </section>
//     )
// }

'use client'

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { works } from '@/app/data/works';
import Carousel from "../../components/carousel";

gsap.registerPlugin(ScrollTrigger);

export default function WorksVecchio() {
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        // Animazione titolo (opzionale)
        // if (titleRef.current) {
        //     gsap.fromTo(
        //         titleRef.current,
        //         {
        //             y: 50,
        //             opacity: 0
        //         },
        //         {
        //             y: 0,
        //             opacity: 1,
        //             duration: 1,
        //             ease: "power3.out",
        //             scrollTrigger: {
        //                 trigger: titleRef.current,
        //                 start: "top 90%",
        //                 toggleActions: "play none none reverse"
        //             }
        //         }
        //     );
        // }

        // Animazione cards
        const cards = cardsRef.current.filter(Boolean);

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 120,
                },
                {
                    y: 0,
                    duration: 1.2,
                    delay: index * 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        end: "top 50%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className="bigSpacing">
            <h2 ref={titleRef}>WoRKs</h2>
            <div className="h-(--spacing-80)" />
            
            {/* {works.map((work, i) => (
                <div 
                    key={i}
                    ref={(el) => { cardsRef.current[i] = el }}
                >
                    <WorkCard
                        title={work.title}
                        mainImg={work.img}
                        width={work.width}
                        height={work.height}
                        description={work.description}
                    />
                </div>
            ))} */}
            <Carousel data={works} />
        </section>
    );
}