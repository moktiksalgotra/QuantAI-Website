interface LeadershipMember {
    id: number;
    name: string;
    role: string;
    image: string;
    linkedIn?: string;
    bio: string;
}

import mahima from '../assets/mahima.png';
import prashant from '../assets/Prashant.png';
import moktik from '../assets/moktik.jpg';
import harjas from '../assets/harjas.jpg';
import shreesh from '../assets/shreesh.jpg';
import krishna from '../assets/krishna.jpg';
import aviral from '../assets/aviral.jpg';
import gagan from '../assets/gagan.jpg';

export const leadershipTeam: LeadershipMember[] = [
    {
        id: 1,
        name: "Mahima Sukheja",
        role: "Founder & CEO",
        image: mahima,
        linkedIn: "https://www.linkedin.com/in/mahima-sukheja-567a1a44/",
        bio: "Mahima leads our company's vision and strategy, bringing extensive experience in AI and enterprise solutions. Her leadership drives our mission to transform businesses through innovative AI technologies and digital transformation."
    },
    {
        id: 2,
        name: "Prashant Verma",
        role: "Director",
        image: prashant,
        linkedIn: "https://linkedin.com/in/prashant-verma",
        bio: "Prashant oversees our strategic initiatives and business development, ensuring we deliver cutting-edge solutions. His expertise in technology and business strategy guides our company's growth and innovation."
    },
    {
        id: 3,
        name: "Moktik Salgotra",
        role: "Chief Technology Officer",
        image: moktik,
        linkedIn: "https://linkedin.com/in/moktik-salgotra",
        bio: "Moktik drives our technical innovation and product development, focusing on creating AI solutions that deliver real business value. His deep understanding of emerging technologies shapes our technical roadmap."
    },
    {
        id: 4,
        name: "Harjas Singh",
        role: "Head of Engineering",
        image: harjas,
        linkedIn: "https://linkedin.com/in/harjas-singh",
        bio: "Harjas leads our engineering teams in building scalable and robust AI systems. His expertise in software architecture and machine learning ensures we deliver high-quality technical solutions."
    },
    {
        id: 5,
        name: "Shreesh Kumar",
        role: "Head of Data Science",
        image: shreesh,
        linkedIn: "https://linkedin.com/in/shreesh-kumar",
        bio: "Shreesh oversees our data science initiatives and AI model development. His expertise in machine learning and data analytics drives our research and development efforts."
    },
    {
        id: 6,
        name: "Krishna Sharma",
        role: "Head of Operations",
        image: krishna,
        linkedIn: "https://linkedin.com/in/krishna-sharma",
        bio: "Krishna manages our operational excellence and client delivery processes. His focus on operational efficiency ensures we consistently deliver exceptional results for our clients."
    },
    {
        id: 7,
        name: "Aviral Gupta",
        role: "Head of Business Development",
        image: aviral,
        linkedIn: "https://linkedin.com/in/aviral-gupta",
        bio: "Aviral leads our business development and strategic partnerships. His expertise in market analysis and relationship building drives our expansion and growth initiatives."
    },
    {
        id: 8,
        name: "Gagan Deep",
        role: "Head of Product Strategy",
        image: gagan,
        linkedIn: "https://linkedin.com/in/gagan-deep",
        bio: "Gagan shapes our product vision and market strategy. His deep understanding of customer needs and market trends guides our product development and positioning."
    }
]; 