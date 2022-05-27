import sleepRepeat from '../images/eatcode.jpg';
const Home = () => {
  return (
    <>
      <div className='homeContainer'>
        <div className='landing-image'>
          <h2>printf("Hello World!")</h2>
          <h3
            style={{
              position: 'absolute',

              bottom: '20%',
              right: '10%',

              color: 'white',
              fontWeight: 'bold',
            }}
          >
            Julian Gabriel Rivera - <small>A Full Stack Web Developer</small>
          </h3>
        </div>

        {/* <p style={{ textAlign: 'center', marginTop: '50px' }}>
          HTML CSS Javascript React.js Node.js Express.js Bootstrap Axios
          MongoDB, Mongoose
        </p> */}
      </div>
      <nav className='footer'>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Bootstrap</li>
          <li>Axios</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
        </ul>
      </nav>
    </>
  );
};

export default Home;
