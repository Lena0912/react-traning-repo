export const SearchBar = ({topic, level, onChangeTopic, onChangeLevel}) => {
    return (
      <div>
            <input
                type="text"
                value={topic}
                onChange={evt => onChangeTopic(evt.target.value)}
                placeholder="Filter by topic..." />
            <select
                value={level}
                onChange={evt => onChangeLevel(evt.target.value)}
            >
          <option value="all">All</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>
    );
}