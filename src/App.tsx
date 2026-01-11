import "./App.css"
import azamatzakirovch from "./../public/azamatzakirovch.jpg"
import linkedin from "./../public/l2.png"
import github from "./../public/github.png"
import telegram from "./../public/telegram.svg"
import uni from "./../public/university.png"
import nt from "./../public/nt.jpg"

import ai from "./../public/ai.png"
import math from "./../public/math.png"
import frontend from "./../public/code.png"

import dataanalytics from "./../public/analysis.png"

// import hogwarts from "./../public/hogwarts.png"
// import resit from "./../public/resit.png"
//
//
// import {
//     PieChart,
//     Pie,
//     // Cell,
//     Tooltip,
//     Legend,
//     ResponsiveContainer,
// } from "recharts";

// type DonutDataItem = {
//     name: string;
//     value: number;
// };

// const data: DonutDataItem[] = [
//     { name: "Easy", value: 33 },
//     { name: "Middle", value: 37 },
//     { name: "Difficult", value: 2 },
// ];

function App() {


    return (
    <>
        <div className="owner-container">

            <div className="owner-the-photo-container">
                <img src={azamatzakirovch} alt="The Owner" className="owner-the-photo"/>
            </div>


            <div className="owner-name-container">
                <div className="owner-name-style">
                    Azamat E. Zakirovich
                </div>
            </div>

            <div className="owner-social-media-container">

                <a href="https://linkedin.com/in/azamatzakirovch" target="_blank" rel="noreferrer">
                    <img src={linkedin} className="linkedin" alt="LinkedIn"/>
                </a>

                <a href="https://github.com/E-Zakirovich" target="_blank" rel="noreferrer">
                    <img src={github} className="github" alt="GitHub"/>
                </a>

                <a href="https://t.me/azamatzakirovch" target="_blank" rel="noreferrer">
                    <img src={telegram} className="telegram" alt="Telegram" />
                </a>


            </div>



        </div>

        <div className="timeline-container">
            <div className="timeline"></div>

            <div className="dot"></div>

            <div className="year">2023 - 2027</div>

            <img src={uni} className="university" alt="University" />

            <div className="university-explanation-container">
                <div className="university-explanation">
                    BSc in Computer Science at the{" "}
                    <a
                        href="https://newuu.uz"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Presidential University of the Republic of Uzbekistan
                    </a>
                    . At this university I wrote my first “hello world” program in C and
                    started learning about AI. One of my professors,{" "}
                    <a
                        href="https://scholar.google.com/citations?hl=en&user=CQp5uugAAAAJ&view_op=list_works&citft=1&citft=2&citft=3&email_for_op=azamateshqoziyev2%40gmail.com&gmla=AKzYXQ2J0Wvev418micvrcqEfGqcJhfwP2NXqnKKQ-HzgTKIvY7nL22GWtndTsayzCyV1_p9yJw7-0bDHM5sNIWurAXiHV5z4gdjjjptUu9iEIS8Y2uSkvYtWeQeMcV0y27t2ff341jQrlQ1xXCtsgWk2KGJsUIFzsy2MQdwcCjeizN1XiQLuw2colVHV3VpzaYO4RG6uu53tZCh_IiKoYPpk4Ws1qrKGgXZOtfTy1K28f4EH8yIWqLw6w"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Dr Qobiljon Toshnazarov
                    </a>
                    , recommended{" "}
                    <a
                        href="https://karpathy.ai/zero-to-hero.html"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Andrej Karpathy&apos;s “Zero to Hero”
                    </a>{" "}
                    course, which had a big impact on me. That&apos;s why I&apos;m on my journey
                    to becoming an AI engineer today.
                </div>
            </div>

            <div className="dot-najottalim"></div>

            <div className="year-najottalim">2023 - 2024</div>

            <img src={nt} className="najottalim" alt={nt} />

            <div className="nt-explanation-container">
                <div className="nt-explanation">
                    <a
                        href="https://najottalim.uz/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Najot Ta’lim LC
                    </a>
                    {" "} was the second important step in my IT journey.
                    There I learned how to write code in Python and built
                    a strong foundation in computer science. I was also
                    introduced to Data Science as the first step toward
                    Artificial Intelligence. I’m especially grateful to
                    my teachers,{" "}
                    <a
                        href="https://www.linkedin.com/in/sarvar-tohirov-22697b229/?originalSubdomain=uz"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Sarvar Toxirov
                    </a>
                    ,  and{" "}
                    <a
                        href="https://scholar.google.com/citations?user=DFRA2nUAAAAJ&hl=ru"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Mironshoh Inomjonov,
                    </a>{" "}
                    for showing me the path into computer science and supporting my growth in this field.
                </div>
            </div>

        </div>

        <div className="biography-container">

            <div className="about-me">About Me</div>

            <div className="biography">
                <p>
                    Hi, it is Azamat E. Zakirovich who interested in build AI models with pure math and coding. Currently I am learning Dr Andrej Karpathys "Zero to Hero" Neural Networks course. For additional
                    materials Michael Neilson's "Neural Networks and Deep Learning" free online book. To be honest it is a bit difficult to learn AI field without knowing Calculus, Probability ad Statistics, Linear Algebra
                    , Python with OOP. My honest recommendation is please cover fundamental knowledge in order to learn AI
                </p>

                <p>
                    I am good at running. I run 8 km 4 times a week. I also recommend to you that train with sport activities. It will help to your learnings and will give you inner peace. For more updates
                    about my running activity follow my {" "}
                    <a
                        href="https://www.strava.com/athletes/189509308"
                        target="_blank"
                        rel="noreferrer"
                    >
                        strava
                    </a>
                    {" "}
                    account.
                </p>

                <p>
                    In order to improve my brain, my mind is working some philosophical question. Some brainstorm questions that made by ancient philosopher like Socrates. Also I am reading
                    books related to politics. Currently I am reading "Great Game". Great Game is going to represent history of war between Russian Empire with Great Britain, also they more focus on my homeland
                    Central Asia. When I was learning AI, I understand one thing. The thing is that, if you want to improve the accuracy of your neural net, you neet to improve your neurons and increase the number of improved
                    neurons. If you apply this to your brain, you need to read a lot of book in order to increase the number of valuable neurons. Read Book.
                </p>

                <p>
                    I really love Billie Eilish, Tame Impala, sometimes The Weeknd, sometimes some russian singers like Miyagi, Endishpil. These days I decreased listening hours of listening music in order to improve my mind.
                </p>

                <p>
                    I always happy to share my knowledge, if you have any questions related to AI feel free to ask. Write your messages to this
                    {" "}
                    <a
                        href="https://t.me/azamatzakirovch"
                        target="_blank"
                        rel="noreferrer"
                    >
                        telegram
                    </a>
                    {" "}
                    account. And also
                    {" "}
                    <a
                        href="https://t.me/azamatdotcom"
                        target="_blank"
                        rel="noreferrer"
                    >
                        follow my telegram channel
                    </a>
                    {" "}
                    . Never stop learning, Good Luck.
                </p>
            </div>

        </div>

        <div className="skill-container">

            <div className="skills">Skills</div>

            <img src={math} className="math" alt={math}/>
            <div className="math-style">Mathematics</div>

            <img src={dataanalytics} className="data-analysis" alt={dataanalytics}/>
            <div className="data-analysis-style">Data Analytics</div>

            <img src={frontend} className="front" alt={frontend}/>
            <div className="front-style">Front End</div>

            <img src={ai} className="ai" alt={ai}/>
            <div className="ai-style">AI</div>

        </div>

        {/*<div className="projects-container">*/}
        {/*    <div className="about-me">Projects Hub</div>*/}

        {/*    <div className="hogwarts-project-container">*/}

        {/*        <img className="hogwarts-project-photo" src={hogwarts} alt={hogwarts}/>*/}

        {/*        <div className="hogwarts-link-container">*/}
        {/*            <div className="hogwarts-project-src-code">*/}
        {/*                <a*/}
        {/*                    href="https://github.com/E-Zakirovich/hogwarts"*/}
        {/*                    target="_blank"*/}
        {/*                    rel="noreferrer"*/}
        {/*                >*/}
        {/*                    src code*/}
        {/*                </a>*/}
        {/*            </div>*/}


        {/*            <div className="hogwarts-project-streamlit">*/}
        {/*                <a*/}
        {/*                    href="https://hogwarts.streamlit.app"*/}
        {/*                    target="_blank"*/}
        {/*                    rel="noreferrer"*/}
        {/*                >*/}
        {/*                    streamlit.io*/}
        {/*                </a>*/}
        {/*            </div>*/}

        {/*        </div>*/}

        {/*    </div>*/}

        {/*    <div className="resit-project-container">*/}

        {/*        <img className="resit-project-photo" src={resit} alt={resit}/>*/}

        {/*        <div className="resit-link-container">*/}
        {/*            <div className="resit-project-src-code">*/}
        {/*                <a*/}
        {/*                    href="https://github.com/E-Zakirovich/resit_exam_data_visualization"*/}
        {/*                    target="_blank"*/}
        {/*                    rel="noreferrer"*/}
        {/*                >*/}
        {/*                    src code*/}
        {/*                </a>*/}
        {/*            </div>*/}


        {/*            <div className="resit-project-streamlit">*/}
        {/*                <a*/}
        {/*                    href="https://newuu-resit-exam-data-visualisation.streamlit.app"*/}
        {/*                    target="_blank"*/}
        {/*                    rel="noreferrer"*/}
        {/*                >*/}
        {/*                    streamlit.io*/}
        {/*                </a>*/}
        {/*            </div>*/}

        {/*        </div>*/}

        {/*    </div>*/}

        {/*    <div className="leetcode-project-container">*/}
        {/*        <ResponsiveContainer>*/}
        {/*            <PieChart>*/}
        {/*                <Pie*/}
        {/*                    data={data}*/}
        {/*                    dataKey="value"*/}
        {/*                    nameKey="name"*/}
        {/*                    cx="50%"*/}
        {/*                    cy="50%"*/}
        {/*                    innerRadius={50}   // inner radius -> donut instead of full pie*/}
        {/*                    outerRadius={65}*/}
        {/*                    paddingAngle={3}*/}
        {/*                >*/}
        {/*                </Pie>*/}
        {/*                <Tooltip />*/}
        {/*                <Legend />*/}
        {/*            </PieChart>*/}
        {/*        </ResponsiveContainer>*/}

        {/*        <div className="leetcode-link-container">*/}
        {/*            <div className="leetcode-project-src-code">Leetcode.com</div>*/}
        {/*        </div>*/}



        {/*    </div>*/}



        {/*</div>*/}

    </>
  )
}

export default App
