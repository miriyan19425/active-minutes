import ActivityForm from "./components/ActivityForm";

function App() {
   return (
        <div className="body">
  <h1>Active Minutes</h1>
  <h4>Track Your Daily Activity</h4>
  <main id="content">
      <ActivityForm />

    <div className="data-view">
      <div className="preview">
        <ul id="preview-activity"></ul>
      </div>
      <table>
        <thead>
          <tr>
            <th>Activity Type</th>
            <th>Duration (mins)</th>
            <th>Calories Burned</th>
            <th>Date</th>
            <th>Intensity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="activities-table">
        </tbody>
      </table>
    </div>
  </main>
   
</div>
   );
}

export default App;
