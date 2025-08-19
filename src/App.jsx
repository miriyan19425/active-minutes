import {useState} from 'react';
import ActivityForm from "./components/ActivityForm";
import ActivityPreview from "./components/ActivityPreview";
import ActivitiesTable from "./components/ActivitiesTable";

function App() {
   const [activityData, setActivityData] = useState({type: 'Choose Type', intensity: 'Choose Intensity', calories: 0, duration: 0, date: ''});

   function getActivityData(d) { setActivityData(d); }
   
   return (
        <div className="body">
  <h1>Active Minutes</h1>
  <h4>Track Your Daily Activity</h4>
  <main id="content">
      <ActivityForm />
    <div className="data-view">
      <ActivityPreview />
      <ActivitiesTable />
    </div>
  </main>
   
</div>
   );
}

export default App;
