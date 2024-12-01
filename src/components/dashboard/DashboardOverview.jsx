import PropTypes from 'prop-types';

function DashboardOverview({ userData }) {
  return (
    <div className="dashboard-overview">
      <h2>Welcome back, {userData.name}!</h2>
      <div className="overview-cards">
        <div className="overview-card">
          <h3>Total Balance</h3>
          <p className="balance">$0.00</p>
        </div>
        <div className="overview-card">
          <h3>You Owe</h3>
          <p className="owe">$0.00</p>
        </div>
        <div className="overview-card">
          <h3>You are Owed</h3>
          <p className="owed">$0.00</p>
        </div>
      </div>
    </div>
  );
}

DashboardOverview.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};

export default DashboardOverview; 