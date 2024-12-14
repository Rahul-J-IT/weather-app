import PropTypes from 'prop-types';
import '../styles/LandingPage.css';

const LandingPage = ({ onEnterApp }) => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1>Welcome to Weather Prediction App</h1>
        <p>Get accurate weather forecasts for any location worldwide</p>
        <button className="enter-button" onClick={onEnterApp}>
          View Weather Conditions
        </button>
      </div>
    </div>
  );
};

LandingPage.propTypes = {
  onEnterApp: PropTypes.func.isRequired
};

export default LandingPage; 