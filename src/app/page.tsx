import Image from "next/image";
import CompanyLogo from "./(components)/companyLogo";

export default function Home() {
  return (
    <div className="OnboardingLayout onboarding-wrapper v-100" >
      <div className="row h-100 onboarding-row">
        <div className="col-lg-6 col-md-6 col-md-12 d-none d-md-block left-wrap">
          <div className="d-flex flex-column justify-content-between onboarding-left-side">
              <figure className="logo-wrpr">
                <CompanyLogo/>
              </figure>

              <div className="welcome-image-wrap text-center">
                <img src="/assets/images/welcome.svg" className="img-fluid welcome-img"/>
              </div>

              <div className="left-content-wrapper">
                <p className="onboarding-main-text fs-16 dark-100 fw-400">
                In the symphony of life's struggles, the sweetest melodies are born<br/>
                when steadfast companionship harmonizes the journey.


                </p>
              </div>

            </div>
        </div>

        <div className="col-lg-6 col-md-6 col-md-12">
          <div className="d-flex flex-column justify-content-between onboarding-right-side">
            {/* {children} */}
          </div>
        </div>
      </div>
    </div>
  );
}
