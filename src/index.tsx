import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BreakingThings from './pages/breaking-things';
import ConditionsPage from './pages/conditions';
import DifficultyPage from './pages/difficulty';
import { EpicSpells } from './pages/epic-spells';
import GrapplePage from './pages/grapple';
import IndexPage from './pages';
import Layout from './layout/page-layout';
import NotFoundPage from './pages/404';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import XpPage from './pages/xp';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<IndexPage />} />
        <Route path="grapple" element={<GrapplePage />} />
        <Route path="epic" element={<EpicSpells />} />
        <Route path="conditions" element={<ConditionsPage />} />
        <Route path="breaking-things" element={<BreakingThings />} />
        <Route path="difficulty" element={<DifficultyPage />} />
        <Route path="xp" element={<XpPage />} />
      </Route>
      <Route path="*">
        <Route element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
