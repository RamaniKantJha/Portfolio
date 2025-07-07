import './Services.css'
import {BsCheck2} from "react-icons/bs";

const Services = () => {
    return (
        <section id={"services"}>
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className={"container services__container"}>
                <article className={"service"}>
                    <div className={"service__head"}>
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className={"service__list"}>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Wireframing and prototyping interactive user interfaces.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Designing modern, responsive layouts for web and mobile.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>User research, persona creation, and journey mapping.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>UI kits and design systems for scalable products.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Usability testing and iterative design improvements.</p>
                        </li>
                    </ul>
                </article>

                <article className={"service"}>
                    <div className={"service__head"}>
                        <h3>Web Development</h3>
                    </div>
                    <ul className={"service__list"}>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Building fast, responsive, and accessible web applications.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Fullstack development with React, Python, and modern frameworks.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>RESTful API design and integration.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Database modeling and management (MySQL, DBMS).</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Deployment, CI/CD, and cloud hosting solutions.</p>
                        </li>
                    </ul>
                </article>

                <article className={"service"}>
                    <div className={"service__head"}>
                        <h3>Content Creation</h3>
                    </div>
                    <ul className={"service__list"}>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Technical blogging and documentation for developers.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Creating educational tutorials and coding walkthroughs.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Video content for tech, coding, and data science topics.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Infographics and visual content for social media.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Open-source contributions and project showcases.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services