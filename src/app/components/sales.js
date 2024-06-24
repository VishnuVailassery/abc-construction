// components/ProjectsCarousel.js
import React from 'react';
import styles from './ProjectsCarousel.module.css';

const projects = [
    {
        id: 1,
        image: '/services2.jpg',
        title: 'Project 1',
        shortDescription: 'Short description of project 1',
        longDescription: 'Detailed description of project 1.'
    },
    {
        id: 2,
        image: '/services3.jpg',
        title: 'Project 2',
        shortDescription: 'Short description of project 2',
        longDescription: 'Detailed description of project 2.'
    },
    {
        id: 3,
        image: '/services2.jpg',
        title: 'Project 1',
        shortDescription: 'Short description of project 1',
        longDescription: 'Detailed description of project 1.'
    },
    {
        id: 4,
        image: '/services3.jpg',
        title: 'Project 2',
        shortDescription: 'Short description of project 2',
        longDescription: 'Detailed description of project 2.'
    },
    {
        id: 5,
        image: '/services2.jpg',
        title: 'Project 1',
        shortDescription: 'Short description of project 1',
        longDescription: 'Detailed description of project 1.'
    },
    {
        id: 6,
        image: '/services3.jpg',
        title: 'Project 2',
        shortDescription: 'Short description of project 2',
        longDescription: 'Detailed description of project 2.'
    },
    {
        id: 7,
        image: '/services2.jpg',
        title: 'Project 1',
        shortDescription: 'Short description of project 1',
        longDescription: 'Detailed description of project 1.'
    },
    {
        id: 8,
        image: '/services3.jpg',
        title: 'Project 2',
        shortDescription: 'Short description of project 2',
        longDescription: 'Detailed description of project 2.'
    },
    {
        id: 9,
        image: '/services2.jpg',
        title: 'Project 1',
        shortDescription: 'Short description of project 1',
        longDescription: 'Detailed description of project 1.'
    },
    {
        id: 10,
        image: '/services3.jpg',
        title: 'Project 2',
        shortDescription: 'Short description of project 2',
        longDescription: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
    },
    // Add more projects as needed
];

const ProjectsCarousel = () => {
    return (
        <section>
            <h2 className="text-3xl font-bold text-center mb-6">Properties For Sale</h2>
            <p className="italic text-gray-600 mt-2 text-center">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
            <div className={styles.carousel} >
                {projects.map(project => (
                    <div key={project.id} className={styles.tile}>
                        <img src={project.image} alt={project.title} className={styles.image} />
                        <div className={styles.details}>
                            <h3 className="italic text-gray-600 mt-2 text-center">{project.title}</h3>
                            <p className="italic text-gray-600 mt-2 text-center">{project.shortDescription}</p>
                            <div className={styles.longDescription}>{project.longDescription}</div>
                        </div>
                    </div>
                ))}
            </div>
            <p className="italic text-gray-600 mt-2 text-center">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
        </section>
    );
};

export default ProjectsCarousel;
