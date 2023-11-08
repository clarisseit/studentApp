import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CourseList from "./Pages/CourseList";
import CourseDetails from "./Pages/CourseDetails";
import "/App.css"
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CourseList} />
        <Route path="/course/:id" component={CourseDetails} />
      </Switch>
    </Router>
  );
}

export default App;
