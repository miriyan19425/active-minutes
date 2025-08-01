import styles from './DataView.module.css';

function DataView(){
    return (
        <div className={styles.dataView}>
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
    );
}

export default DataView;
