import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

// Layout
import LayoutGuide from './Layouts/LayoutGuide/';
import LayoutMain from './Layouts/LayoutMain/';
import LayoutSub from './Layouts/LayoutSub/';
import LayoutBlank from './Layouts/LayoutBlank/';

// Guide
import IaPages from './Guide/IaPages';
import ButtonPage from './Guide/UiPages/ButtonPage';

// Pages
import Main from './Pages/Main';
import DemoPage from './Pages/DomoCate/DemoPage';

const Router = () => {
	return (
        <BrowserRouter>
            <Routes>
                {/* IA Pages */}
                <Route path="/" element={<LayoutBlank />}>
                    <Route index element={<IaPages />} />
                </Route>

				{/* UI Pages */}
                <Route path="/" element={<LayoutGuide />}>
					<Route path="guide/ButtonPage" element={<ButtonPage />}/>
				</Route>

				{/* Main Page */}
                <Route path="/" element={<LayoutMain />}>
					<Route path="main" element={<Main />}/>
				</Route>

				{/* Sub Pages */}
                <Route path="/" element={<LayoutSub />}>
					<Route path="domoCate/demoPage" element={<DemoPage />}/>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
export default Router
