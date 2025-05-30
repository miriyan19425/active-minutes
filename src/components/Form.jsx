function Form(){
	return (
		<div className="form-container">
      <form className="activity-form">
        <label htmlFor="type">Activity Type:</label>
        <select id="type" name="type">
          <option value="" disabled selected>Chose Type</option>
          <option value="Running">Running</option>
          <option value="Yoga">Yoga</option>
          <option value="Cycling">Cycling</option>
          <option value="Dancing">Dancing</option>
        </select>
        <label fhtmlFor="intensity">Intensity:</label>
        <select id="intensity" name="intensity">
          <option value="" disabled selected>Chose Intensity</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value="Extreme">Extreme</option>
        </select>
        <label htmlFor="calories">Calories Burned:</label>
        <input type="number" id="calories" name="calories" placeholder="Estimate calories" />
        <label htmlFor="duration">Duration in Minutes:</label>
        <input type="number" id="duration" placeholder="Duration" name="duration" />
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" placeholder="Date" />
      </form>
      <button id="add-activity">Add Activity</button>
    </div>
	);
}

export default Form;
