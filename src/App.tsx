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

import hogwarts from "./../public/hogwarts.png"
import resit from "./../public/resit.png"
import micrograd from "./../public/micrograd.png"
import website from "./../public/azamatdotcom.png"

import tmk from "./../public/tmk.png"
import agrobank from "./../public/agrobank.jpeg"

import mask from "./../public/mask.jpeg"
import animal from "./../public/animal.jpeg"
import flower from "./../public/flower.jpeg"

function App() {


    return (
    <>
        <div className="owner-container">

            <div className="owner-the-photo-container">
                <img src={azamatzakirovch} alt="The Owner" className="owner-the-photo"/>
            </div>


            <div className="owner-name-container">
                <div className="owner-name-style">
                    Azamat(Marshall) E. Zakirovich
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

            <div className="agrobank-dot"></div>

            <div className="agrobank-year">2023 - 2027</div>

            <img src={agrobank} className="agrobank-university" alt="University" />

            <div className="agrobank-explanation-container">
                <div className="agrobank-explanation">
                    Computer Vision Engineer intern at{" "}
                    <a
                        href="https://agrobank.uz"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Agrobank
                    </a>
                    . Here I develop and implement neural network models, including CNNs
                    and Transformers, for image classification and object detection
                    tasks. I&apos;ve worked on projects like drone detection, face mask
                    detection, and animal and medicinal flower classification, managing
                    the full deep learning pipeline from dataset preparation and
                    augmentation to GPU-accelerated training and evaluation. I use
                    PyTorch, Git, and Kaggle to build, document, and share this work. I&apos;m
                    grateful to my mentor,{" "}
                    <a
                        href="https://scholar.google.com/citations?user=Rg9Dte8AAAAJ&hl=en"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Mansurbek Abdullayev
                    </a>
                    , for his guidance throughout this internship.
                </div>
            </div>

            <div className="timeline"></div>

            <div className="dot-tmk"></div>

            <div className="year-tmk">2026 - 2026</div>

            <img src={tmk} className="tmk" alt="University" />

            <div className="tmk-explanation-container">
                <div className="tmk-explanation">
                    Internship at{" "}
                    <a
                        href="https://uztmk.uz"
                        target="_blank"
                        rel="noreferrer"
                    >
                        UzTMK
                    </a>
                    , working with the HR team on recruitment and digital HR processes. I
                    supported candidate screening and evaluation, compared resumes
                    against job requirements, and helped automate recruitment tracking
                    with Google Sheets and Apps Script. I&apos;m grateful to my mentor,{" "}
                    <a
                        href="https://www.linkedin.com/in/otabek-alimov/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Otabek Alimov
                    </a>
                    , and the department director,{" "}
                    <a
                        href="https://www.linkedin.com/in/utkir-norov-640760227/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Utkir Norov
                    </a>
                    , for the opportunity and support during this internship.
                </div>
            </div>

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

            <div className="about-me">bio</div>

            <div className="biography">
                <p>
                    Hi. It is Azamat, and also you can call me Marshall. I like to train my natural intellect with scientific knowledge.
                    My job is - help people to accelerate their tasks with my special AI models. I would prefer understanding the
                    philosophy behind, rather than remembering random collection of words, and it helps me to think dynamically.
                </p>

                <p>
                    These days, I am trying to understand the philosophy behind of AI. That's why, I am following {" "}
                    <a
                        href="http://neuralnetworksanddeeplearning.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Neural Networks & Deep Learning
                    </a>
                    {" "}
                    by {" "}
                    <a
                        href="https://michaelnielsen.org"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Michael Nielsen
                    </a>,

                    {" "}
                    <a
                        href="https://www.bishopbook.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Deep Learning - Foundation and Concepts
                    </a> by {" "}
                    <a
                        href="https://en.wikipedia.org/wiki/Chris_Bishop"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Chris Bishop
                    </a> and {" "}
                    <a
                        href="https://www.linkedin.com/in/hugh-bishop-119075154/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Hugh Bishop
                    </a>. To understand the books above, I am also covering
                    {" "}
                    <a
                        href="https://www.udemy.com/course/calculus1/?couponCode=PMNVD2525"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Calculus 1
                    </a>,
                    {" "}
                    <a
                        href="https://www.udemy.com/course/calculus-2/?couponCode=PMNVD2525"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Calculus 2
                    </a>,
                    {" "}
                    <a
                        href="https://www.udemy.com/course/linear_algebra/?couponCode=PMNVD2525"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Linear Algebra
                    </a>,
                    {" "} and {" "}
                    <a
                        href="https://www.udemy.com/course/statistics-probability/?couponCode=PMNVD2525"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Probability
                    </a>{" "}.
                    Yea, it is difficult but worth to sacrifice my life.
                </p>

                <p>
                    I have a hobby, I like to solve coding problems related to Design and Analysis of Algorithms. If you interested
                    {" "}
                    <a
                        href="https://leetcode.com/u/azamatzakirovch/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        press it
                    </a>{" "} to see my leetcode.
                </p>

                <p>
                    Honestly, only mental health is not enough to be perfect guy. Physical strength must be considered.
                    That's why I like to run about 10km in a row. Running helps me to focus my thoughts into one strength. Run with me on{" "}
                    <a
                    href="https://www.strava.com/athletes/189509308"
                    target="_blank"
                    rel="noreferrer"
                    >
                        strava
                    </a>.
                </p>

                I am active on
                {" "}
                <a
                    href="https://x.com/azamatzakirovch"
                    target="_blank"
                    rel="noreferrer"
                >
                    X
                </a>,
                {" "}
                <a
                    href="https://www.linkedin.com/in/azamatzakirovch/"
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn
                </a>{" "} and
                {" "}
                <a
                    href="https://medium.com/@azamatzakirovch"
                    target="_blank"
                    rel="noreferrer"
                >
                    Medium
                </a>. I will write my thought about AI, and my learning paths and about my latest projects that I am
                working on. Also, if you want to see my works, go to pet projects part of my website or go to my
                {" "}
                <a
                    href="https://github.com/E-Zakirovich"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>.

            </div>

        </div>

        <div className="skill-container">

            <div className="skills">skills</div>

            <img src={math} className="math" alt={math}/>
            <div className="math-style">Mathematics</div>

            <img src={dataanalytics} className="data-analysis" alt={dataanalytics}/>
            <div className="data-analysis-style">Data Analytics</div>

            <img src={frontend} className="front" alt={frontend}/>
            <div className="front-style">Front End</div>

            <img src={ai} className="ai" alt={ai}/>
            <div className="ai-style">AI</div>

        </div>

        <div className="projects-container">
            <div className="about-me">pet projects</div>

            <div className="hogwarts-project-container">

                <img className="hogwarts-project-photo" src={hogwarts} alt={hogwarts}/>

                <div className="hogwarts-project-description-container">
                    <div className="hogwarts-project-description">
                        <strong> Hogwarts Research Summer School</strong>.
                        <br/>
                        In this project I worked as a data analytics intern.
                        My task was to design an interactive dashboard that represents data from the last four sessions of the research school.
                        <br/>
                        <a
                            href="https://hogwarts.streamlit.app"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Project
                        </a>
                        {" "}|{" "}
                        <a
                            href="https://github.com/E-Zakirovich/hogwarts"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Source Code
                        </a>
                    </div>
                </div>
            </div>

            <div className="resit-project-container">

                <img className="resit-project-photo" src={resit} alt={hogwarts}/>

                <div className="resit-project-description-container">
                    <div className="resit-project-description">
                        <strong> New Uzbekistan University</strong>.
                        <br/>

                        I accidentally obtained the entire database of failed students, including
                        their names, majors, emails, failed subjects, and exam rooms. This became
                        my second project connected to a real-world application.


                        <br />
                        <a
                            href="https://newuu-resit-exam-data-visualisation.streamlit.app"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Project
                        </a>
                        {" "}| {" "}
                        <a
                            href="https://github.com/E-Zakirovich/resit_exam_data_visualization"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Source Code
                        </a>
                    </div>
                </div>
            </div>

            <div className="micrograd-project-container">

                <img className="micrograd-project-photo" src={micrograd} alt={micrograd}/>

                <div className="micrograd-project-description-container">
                    <div className="micrograd-project-description">
                        <strong> Zero to Hero</strong>.
                        <br/>


                        {" "}
                        <a
                            href="https://github.com/karpathy/micrograd"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Micrograd
                        </a>
                        {" "}
                        library is made by {" "}
                        <a
                            href="https://karpathy.ai"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Dr Andrej Karpathy
                        </a>
                        {" "} for learning purposes. I watched first lecture of "Zero to Hero" course. Then I made this project form scratch in order to understand what
                        I did and what I can do. 


                        <br />
                        <a
                            href="https://github.com/E-Zakirovich/Micrograd"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Source Code
                        </a>
                    </div>
                </div>
            </div>

            <div className="web-project-container">

                <img className="web-project-photo" src={website} alt={website}/>

                <div className="web-project-description-container">
                    <div className="web-project-description">
                        <strong> My Own Portfolio Website</strong>.
                        <br/>
                        This is my first global website made by me. With this project, you can get all information me and my projects.
                        Also you can get all possible contacts(linkedin, email, telegram, phone contact)
                        <br />
                        <a
                            href="https://azamat-kappa.vercel.app"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Project
                        </a>
                        {" "} | {" "}
                        <a
                            href="https://github.com/E-Zakirovich/azamatdotcom"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Source Code
                        </a>
                    </div>
                </div>
            </div>

            <div className="flower-project-container">

                <img className="flower-project-photo" src={flower} alt={website}/>

                <div className="flower-project-description-container">
                    <div className="flower-project-description">
                        <strong> Medical Flower Classification</strong>.
                        <br/>
                        This project is part of computer vision and it is related to image classification. It will help you to classify medical flowers from image.
                        <br />

                        <a
                            href="https://github.com/E-Zakirovich/medicinal-flower-classification"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Source Code
                        </a>
                    </div>
                </div>
            </div>

            <div className="animal-project-container">

                <img className="animal-project-photo" src={animal} alt={website}/>

                <div className="animal-project-description-container">
                    <div className="animal-project-description">
                        <strong> Animal classification</strong>.
                        <br/>
                        Actually, I found random dataset related computer vision. It will help you to classify animals. Basically this project also related to image classification from computer vision.
                        <br />

                        <a
                            href="https://github.com/E-Zakirovich/animal-detection"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Source Code
                        </a>
                    </div>
                </div>
            </div>

            <div className="mask-project-container">

                <img className="mask-project-photo" src={mask} alt={website}/>

                <div className="mask-project-description-container">
                    <div className="mask-project-description">
                        <strong> Face Mask Detection</strong>.
                        <br/>
                        This is my first project related to object detection. It will help you to identify whether mask is wear or not, correct or incorrect. Basically it is my favorite I guess.
                        <br />
                        <a
                            href="https://www.youtube.com/watch?v=SG_sBif6LMs"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Project Result Video
                        </a>
                        {" "} | {" "}
                        <a
                            href="https://github.com/E-Zakirovich/face-mask-detection"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Source Code
                        </a>
                    </div>
                </div>
            </div>

        </div>

    </>
  )
}

export default App
