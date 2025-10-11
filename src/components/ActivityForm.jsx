import {useState} from 'react';

const activities = ["Choose Type", "Running", "Yoga", "Cycling", "Dancing"];
const intensityLevels = ["Choose Intensity", "Low", "Medium", "High", "Extreme"];

function ActivityForm({defineActivity}){
    const [type, setType] = useState('Choose Type');
    const [intensity, setIntensity] = useState('Choose Intensity');
    const [calories, setCalories] = useState(0);
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState('');

    function handleSubmit(e){
        e.preventDefault();

        if (type === 'Choose Type' || intensity === 'Choose Intensity' || !calories || !duration || !date) return;

        const data = {type, intensity, calories, duration, date};
        
        defineActivity(data);
        setType("Choose Type");
        setIntensity("Choose Intensity");
     }
    
    return (
        <div className="form-container">
            <form className="activity-form">
                <label htmlFor="type">Activity Type:</label>
                <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                    {activities.map( (act, ind) => <option key={ind} value={act} disabled={ind === 0}>{act}</option> )}
                </select>
                
                <label htmlFor="intensity">Intensity:</label>
                <select id="intensity" value={intensity} onChange={(e) => setIntensity(e.target.value)}>
                    {intensityLevels.map( (int, ind) => <option key={ind} value={int} disabled={ind === 0}>{int}</option> )}
                </select>
                <label htmlFor="calories">Calories Burned:</label>
                <input id="calories" type="number" placeholder="Estimate calories" value={calories} onChange={(e) => setCalories(Number(e.target.value))} />
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
