import './root.component.css';

import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
} from 'react-router-dom';

import { Home } from './pages/home';
import { Page1 } from './pages/page-1';
import { Page2 } from './pages/page-2';
import { Subpage } from './pages/subpage';

export default function Root() {
  return (
    <Router basename="react">
      <div className="container react">
        <div className='label'>React</div>
        <h3>👋 React root 👋</h3>
        <nav>
          <ul className="nav-list">
            <li>
              <Link to="/">🔗Home</Link>
            </li>
            <li>
              <Link to="/page1">🔗Page 1</Link>
            </li>
            <li>
              <Link to="/page2">🔗Page 2</Link>
            </li>
            <li>
              <Link to="/page2/subpage">🔗Page 2 / Subpage</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />}>
            <Route path="subpage" element={<Subpage />}/>
          </Route>
        </Routes>
      </div>
    </Router>
  )
}
