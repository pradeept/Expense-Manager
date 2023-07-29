import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ViewExpensesPage from "./pages/ViewExpensesPage";

function App() {
    return (
        <Routes>
            <Route element={<ViewExpensesPage />} path='/' />
        </Routes>
    );
}

export default App;
