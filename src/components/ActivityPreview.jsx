function ActivityPreview({activityInput}){
    return (
        <div className="preview">
            <ul id="preview-activity">
            {
            (activityInput.type === 'Choose Type' &&
             activityInput.intensity === 'Choose Intensity' &&
            ) ||
            <li>
            
            </li>
            }
            </ul>
        </div>
    );
}

export default ActivityPreview;
