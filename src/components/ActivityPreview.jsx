function ActivityPreview({activityInput, onEdit}){
  return (
    <div className="preview">
      {(  
        activityInput.type === 'Choose Type' && 
        activityInput.intensity === 'Choose Intensity' &&
        activityInput.calories === 0 &&
        activityInput.duration === 0 &&
        activityInput.date === ''
      ) ||
        <ul id="preview-activity">
          <li>
            <article>
              <p>Type: {activityInput.type}</p>
              <p>Intensity: {activityInput.intensity}</p>
              <p>Calories: {activityInput.calories}</p>
              <p>Duration: {activityInput.duration} min</p>
              <p>Date: {activityInput.date}</p>
            </article>
            <div className="btn-container">
              <button className="edit-btn" onClick={onEdit} >Edit</button>
              <button className="next-btn">Next</button>
            </div>
          </li>
        </ul>
      }  
    </div>
  );
}

export default ActivityPreview;
