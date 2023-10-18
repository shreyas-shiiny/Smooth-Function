import React from "react";
import "../content/styles/Info.css";

const Smooth = () => {
    const scrollToSec = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <nav>
                    <ul>
                        <li onClick={() => scrollToSec("home")}>Home</li>
                        <li onClick={() => scrollToSec("about")}>About</li>
                        <li onClick={() => scrollToSec("service")}>Service</li>
                        <li onClick={() => scrollToSec("faq")}>FAQ</li>
                    </ul>
                </nav>
            </header>
            <main>
                <section id="home" className="section">
                    <h2>Home</h2>
                </section>
                <section id="about" className="section">
                    <h2>About</h2>
                </section>
                <section id="service" className="section">
                    <h2>Service</h2>
                </section>
                <section id="faq" className="section">
                    <h2>FAQ</h2>
                </section>
            </main>
        </div>
    );
};

export default Smooth;