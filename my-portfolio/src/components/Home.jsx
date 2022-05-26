import spaceBetween from '../images/spacebetween.png';
import fitnessaImage from '../images/fitnessaimg.png';

function Home() {
  return (
    <>
      <div className='firstContainer'>
        <h2 className='fullStack'>Full Stack Web Developer</h2>
        <hr />

        <img
          src={spaceBetween}
          alt=''
          className='imageSize'
          style={{
            borderRadius: '50%',
            marginLeft: '5px',
            marginRight: '5px',
            objectFit: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />

        <h4>HTML, CSS & Javascript </h4>
        <p>
          My game project, designed with vanilla Javascript. Example of DOM
          manipulation, using class constructors, pushing images into an array,
          using velocity, math random math floor, adjusted frames so each level
          it gets harder and also attached event listener to listen to our WASD
          press down{' '}
        </p>
      </div>
      <div className='secondContainer'>
        <h2 className='fullStack'>Full Stack Web Developer</h2>
        <hr />

        <img
          src={fitnessaImage}
          alt=''
          className='imageSize'
          style={{
            borderRadius: '50%',
            marginLeft: '5px',
            marginRight: '5px',
            objectFit: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />

        <h4>
          Fitnessa app made with HTML, CSS, Javascript, Mongoose, MongoDB,
          Axios, Bootstrap, Handlebars.js, Express.js, & Node.js{' '}
        </h4>
        <p>
          My game project, designed with vanilla Javascript. Example of DOM
          manipulation, using class constructors, pushing images into an array,
          using velocity, math random math floor, adjusted frames so each level
          it gets harder and also attached event listener to listen to our WASD
          press down{' '}
        </p>
      </div>
    </>
  );
}

export default Home;
