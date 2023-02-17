import Image from 'next/image';
import { ArrowRight } from 'react-bootstrap-icons';
import { useEffect } from 'react';
import Topbar from '@/components/Topbar/Topbar';
import useAuth from '@/hooks/useAuth';
import magoImg from '@/public/images/magodev-v3.png';
import togetherSvg from '@/public/images/together.svg';

export default function Home() {
  const { signin, user, loading } = useAuth();

  useEffect(() => {
    document.title = 'Mago.dev';
  }, []);

  return (
    <div className="home">
      <Topbar page="home" />
      <div className="banner bg-magento">
        <div className="container">
          <div className="row banner-row">
            <div className="col banner-left">
              <Image
                src={magoImg}
                alt="Go to homepage"
                width={380}
                height={70}
                className="d-inline-block align-text-top"
                loading="eager"
              />
              <h4 className="text-white">Magic at your fingertips!</h4>
              {user?.displayName ? (
                <span>
                  <a className="btn btn-info btn-lg btn-cta" href="/dashboard">
                    Welcome {user?.displayName}! <ArrowRight />
                  </a>
                </span>
              ) : (
                <span>
                  <button
                    type="button"
                    className="btn btn-info btn-lg btn-cta"
                    onClick={() => signin()}
                  >
                    {loading === true ? (
                      <span>Loading</span>
                    ) : (
                      <span>REGISTER FOR FREE!</span>
                    )}
                  </button>
                </span>
              )}
              <h5 className="text-white">
                Learning is a continuous process, and with our exclusive content
                you can elevate your knowledge in different areas and discover
                new opportunities.
              </h5>
            </div>
            <div className="col banner-right logo d-flex justify-content-right d-none d-sm-block">
              <Image
                src={togetherSvg}
                alt="Go to homepage"
                width={460}
                height={300}
                className="mago-navbar-logo d-inline-block align-text-top"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="home-sky">content</div>
    </div>
  );
}
