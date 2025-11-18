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
                Hello everyone, it is Azamat E. Zakirovich from Uzbekistan.
                I am interested in AI and I love big data and how to build AI
                modules. My favourite activity is jogging. You can follow my{" "}
                <a
                    href="https://www.strava.com/athletes/189509308"
                    target="_blank"
                    rel="noreferrer"
                >
                    strava
                </a>
                {" "}
                account. I always live a quote. The quote is this: - "If I had six hours to cut down a big tree, I would spend five and a half hours sharpening the axe". You can find me with telegram or linkedin, because I am active the social medias as I mentioned above.
            </div>

        </div>

        <div className="skill-container">

            {/*<div className="Skills">My Skills</div>*/}

            <img src={math} className="math" alt={math}/>
            <div className="math-style">Mathematics</div>

            <img src={frontend} className="front" alt={frontend}/>
            <div className="front-style">Front End</div>

            <img src={ai} className="ai" alt={ai}/>
            <div className="ai-style">AI</div>

        </div>

        {/*<div className="projects-container">*/}

        {/*    <div className="Projects">Projects That I have Worked</div>*/}

        {/*    <div className="projects-explanation">Coming Soon</div>*/}

        {/*</div>*/}

    </>
  )
}

export default App
