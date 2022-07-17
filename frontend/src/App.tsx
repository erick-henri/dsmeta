import Header from "./Components/Header/Index";
import NotificationButton from "./Components/NotificationButton/Index";
import SalesCard from "./Components/SalesCard/Index";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
  <>
    <ToastContainer/>
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
