import React from 'react';
import PropTypes from 'prop-types';
import './frontcontent.css';

const propTypes = {
    showMobile: PropTypes.bool,
};
const defaultProps = {
    showMobile: false,
};

function Square(props) {
    return (
        <div className={
            `snap-start flex shadow text-center justify-center items-center bg-gray-200/50 dark:bg-gray-600/70 rounded flex-col 
            ${props.showMobile ? 'h-[98dvh] mb-[1dvh]' : 'h-full'} 
            hover:bg-gray-100/70 dark:hover:bg-gray-600/50 dark:text-white transition-all duration-300 ease-in-out`
        }>
            <h1 className='text-2xl'>{props.title}</h1>
            {props.children}
        </div>
    );
}

const FrontContent = ({
    showMobile = false,
}) => {
    return (
        <div className={`mr-4 ml-4 ${showMobile ? 'h-[100dvh] snap-y snap-mandatory' : 'grid grid-cols-2 m-4'} gap-4 w-full overflow-y-auto myscrollbar`}>
            <Square title='Experience' showMobile={showMobile} children={
                <div className='mt-4'>
                    <h2 className='text-lg'>Full Stack Developer - Intern</h2>
                    <h3 className='text-sm'>LVL Wellbeing</h3>
                    <p className='text-sm'>May – August 2024</p>
                    <p className='text-sm mx-8 mt-2'>
                        Contributed to the development of a web/mobile application using React.js, React Native, TypeScript, Node.js, and Git.
                    </p>
                    <p className='text-sm mx-8 mt-2'>
                        Developed a user-friendly group creation interface based on Figma design specifications.
                    </p>
                </div>
            } />
            <Square title='Education' showMobile={showMobile} children={
                <div className='mt-4'>
                    <h2 className='text-lg'>B.Sc. in Computer Science</h2>
                    <h3 className='text-sm'>Acadia University</h3>
                    <p className='text-sm'>September 2020 – May 2025</p>
                    <p className='text-sm mx-8 mt-2'>
                        Completed coursework in Artificial Intelligence, Data Structures, Algorithms, Web Development, and Software Engineering.
                    </p>
                </div>
            } />
            <Square title='Projects' showMobile={showMobile} children={
                <div className='mt-4'>
                    <h2 className='text-lg'>Capstone Project – PatternDB</h2>
                    <h3 className='text-sm'>Collaborative drum pattern editor with database integration.</h3>
                    <p className='text-sm'>PostgreSQL, WebSockets, Docker</p>

                    <h2 className='text-lg mt-4'>Discord Bot</h2>
                    <h3 className='text-sm'>A Discord bot that delivers daily weather reports to a server each morning.</h3>
                    <p className='text-sm'>Auth Tokens, Node.js, Cloud Computing</p>

                    <h2 className='text-lg mt-4'>Pi Terminal Calendar Dashboard</h2>
                    <h3 className='text-sm'>terminal-based dashboard for the Raspberry Pi Zero to display Google Calendar <br/>events, Tasks, and system info with a minimal, real-time interface.</h3>
                    <p className='text-sm'>Python, Bash, Google APIs, OAuth 2.0</p>
                </div>
            } />
            <Square title='Skills' showMobile={showMobile} children={
                <div className='mt-4 space-y-1 text-sm'>
                    <p><span className='font-semibold'>Frontend:</span> React.js, TypeScript, JavaScript</p>
                    <p><span className='font-semibold'>Backend:</span> Golang, Java, Python, C</p>
                    <p><span className='font-semibold'>Tools & DevOps:</span> SQL, WebSockets, Docker, Git</p>
                    <p><span className='font-semibold'>Systems:</span> Linux (Bash), Computer Hardware</p>
                </div>
            } />
        </div>
    );
}

FrontContent.propTypes = propTypes;
FrontContent.default = defaultProps;

export default FrontContent;
