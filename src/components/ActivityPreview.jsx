function ActivityPreview({activityInput}){
    return (
        <div className="preview">
            <ul id="preview-activity">
            {
            (activityInput.type === 'Choose Type' &&
             activityInput.intensity === 'Choose Intensity' &&
             activityInput.calories === 0
            ) ||
            <li>
            
            </li>
            }
            </ul>
        </div>
    );
}

export default ActivityPreview;
