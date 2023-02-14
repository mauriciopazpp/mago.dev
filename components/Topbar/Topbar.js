import SignIn from '@/components/Topbar/SignIn';
import Image from 'next/image'
const magoImg = '/images/magodev-light.png';
const rabbitImg = '/images/rabbit.png';

function Topbar() {
  return (
    <>
      <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand mago-navbar-brand" href="#">
            <Image
              src={rabbitImg}
              alt="Go to homepage"
              width={30}
              height={40}
              className="mago-navbar-logo d-inline-block align-text-top"
              />
            <Image
              src={magoImg}
              alt="Go to homepage"
              width={200}
              height={40}
              className="d-inline-block align-text-top"
              />
          </a>
          <SignIn />
        </div>
      </nav>
    </>
  );
}

export default Topbar;
