import Header from './components/Header';
import ProjectSection from './components/ProjectSection';
import Footer from './components/Footer';

function App() {
    return (
        <div className="app">
            <Header />

            <main>
                <ProjectSection
                    id="cinegeek2"
                    title="CineGeek 2.0 beta"
                    description=""
                    url="https://cinegeek-beta.vercel.app/"
                    linkText="Visit CineGeek 2.0"
                />

                <ProjectSection
                    id="LadyLux Online"
                    title="LadyLux Online"
                    description=""
                    url="https://lady-lux-online.vercel.app/"
                    linkText="View LadyLux Online"
                />

                <ProjectSection
                    id="cinegeeksearch"
                    title="CineGeek Search Engine"
                    description=""
                    url="https://cinegeek-search.netlify.app/"
                    linkText="Visit CineGeek Search Engine"
                />

                <ProjectSection
                    id="bb84"
                    title="BB84"
                    description=""
                    url="https://github.com/dragonpilee/bb84"
                    linkText="View BB84 on GitHub"
                />
            </main>

            <Footer />
        </div>
    )
}

export default App;
