import Header from "./Components/Header/Index"
import NotificationButton from "./Components/NotificationButton/Index"
import SalesCard from "./Components/SalesCard/Index"

function App() {
    return (
  <>
            <Header></Header>

            <main>
                <section id="sales">
                    <div className="dsmeta-container">
                        <SalesCard />
                    </div>
                </section>
                </main>
            </>
            )
}

            export default App
