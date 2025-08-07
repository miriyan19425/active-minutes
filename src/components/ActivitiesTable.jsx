function ActivitiesTable(){
    return (
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
    );
}

export default ActivitiesTable;
