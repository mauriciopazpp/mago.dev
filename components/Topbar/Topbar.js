import React from 'react';
import Image from 'next/image';
import SignIn from '@/components/Topbar/SignIn';
import magoImg from '@/public/images/magodev-light.png';
import rabbitImg from '@/public/images/rabbit.png';

function Topbar() {
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
  );
}

export default React.memo(Topbar);
