import './search-panel.scss';

const SearchPanel = () => {
    return (
        <div>
            <input 
                type="text"
                className="form-control search-input"
                placeholder="Find employee" />
        </div>
    );
};

export default SearchPanel;