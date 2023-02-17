import Image from 'next/image';
import SignIn from '@/components/Topbar/SignIn';

const magoImg = '/images/magodev-light.png';
const rabbitImg = '/images/rabbit.png';

function Topbar({ page }) {
  return (
    <nav className="mago-topbar container-fluid navbar navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand mago-navbar-brand" href="#">
          <Image
            src={rabbitImg}
            alt="Go to homepage"
            width={30}
            height={40}
            className="mago-navbar-logo d-inline-block align-text-top"
          />
          {page !== 'home' ? (
            <Image
              src={magoImg}
              alt="Go to homepage"
              width={200}
              height={40}
              className="d-inline-block align-text-top"
            />
          ) : null}
        </a>
        <SignIn />
      </div>
    </nav>
  );
}

export default Topbar;
