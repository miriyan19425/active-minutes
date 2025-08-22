function ActivityPreview({activityInput}){
  return (
    <div className="preview">
      {(  
        activityInput.type === 'Choose Type' && 
        activityInput.intensity === 'Choose Intensity' &&
        activityInput.calories === 0
      
      ) ||
        <ul id="preview-activity">
          <li>
            <article>
              <p>Type: {activityInput.type}</p>
              <p>Intensity: {activityInput.intensity}</p>
               
            </article>
            <div className="btn-container">
              <button className="edit-btn">Edit</button>
              <button className="next-btn">Next</button>
            </div>
          </li>
        </ul>
      }  
    </div>
  );
}

export default ActivityPreview;
