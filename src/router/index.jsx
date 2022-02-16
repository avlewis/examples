import {HashRouter as Router, Route, Routes} from "react-router-dom";
import { DashboardLayout } from "../components/Layout";
import Sorting from "../pages/Sorting";
import Home from '../pages/Home';

export const examplesRoutes = [
        {   
            name: "Card Filtering",
            path: '/examples/card_filtering',
            element: <Sorting />
        }
    ]


export default function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} exact />
                {examplesRoutes.map((r) => 
                    <Route 
                        path={r.path}
                        element={
                            <DashboardLayout>
                                {r.element}
                            </DashboardLayout>
                        }
                    />
                )}
            </Routes>
        </Router>
    )
}