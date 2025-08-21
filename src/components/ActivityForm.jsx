import {useState} from 'react';

const activities = ["Choose Type", "Running", "Yoga", "Cycling", "Dancing"];
const intensityLevels = ["Choose Intensity", "Low", "Medium", "High", "Extreme"];

function ActivityForm({defineActivity}){
    const [type, setType] = useState('Choose Type');
    const [intensity, setIntensity] = useState('Choose Intensity');
    
    return (
        <div className="form-container">
            <form className="activity-form">
                <label for="type">Activity Type:</label>
                <select id="type" name="type">
                    <option value="" disabled selected>Chose Type</option>
                    <option value="Running">Running</option>
                    <option value="Yoga">Yoga</option>
                    <option value="Cycling">Cycling</option>
                    <option value="Dancing">Dancing</option>
                </select>
        <label for="intensity">Intensity:</label>
        <select id="intensity" name="intensity">
          <option value="" disabled selected>Chose Intensity</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value="Extreme">Extreme</option>
        </select>
        <label for="calories">Calories Burned:</label>
        <input type="number" id="calories" name="calories" placeholder="Estimate calories" />
        <label for="duration">Duration in Minutes:</label>
        <input type="number" id="duration" placeholder="Duration" name="duration" />
        <label for="date">Date:</label>
        <input type="date" id="date" name="date" placeholder="Date" />
      </form>
      <button id="add-activity">Add Activity</button>
    </div>
    );
}

export default ActivityForm;
