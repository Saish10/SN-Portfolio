import report from '../assets/svg/projects/report.svg'
import personal_website from '../assets/svg/projects/website.svg'



export const projectsData = [
    {
        id: 1,
        projectName: 'DSR-Backend',
        projectDesc: 'This project is about Daily Status Report of Co-operate Employees.',
        tags: ['Python', 'Flask', 'RestX', 'SQLalchemy', 'Postgresql'],
        code: 'https://github.com/Saish10/DSR-Backend',
        demo: '',
        image: report
    },
    {
        id: 2,
        projectName: 'SN-Portfolio',
        projectDesc: 'This project is my portfolio website.',
        tags: ['React', 'JavaScript', 'HTML', 'CSS'],
        code: 'https://github.com/Saish10/SN-Portfolio',
        demo: 'https://saish.vercel.app/',
        image: personal_website
    },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/