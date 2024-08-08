import './app-info.scss';

const AppInfo = ({employees, increased}) => {
    return (
        <div className="app-info">
            <h1>Employees accounting in company Horns & Hoofs</h1>
            <h2>Total quantity of employees: {employees}</h2>
            <h2>Quantity of employees who will receive a bonus: {increased}</h2>
        </div>
    );
};

export default AppInfo;