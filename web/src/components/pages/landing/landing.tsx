import { Localized } from 'fluent-react/compat';
import * as React from 'react';
import { connect } from 'react-redux';
import StateTree from '../../../stores/tree';
import URLS from '../../../urls';
import RegisterSection from '../../register-section/register-section';
import { LinkButton } from '../../ui/ui';

import './landing.css';

interface PropsFromState {
  hasAccount: boolean;
}

const Landing = ({ hasAccount }: PropsFromState) => (
  <div className="partner-landing">
    <div className="partner-header">
      <img src={require('./sodedif.png')} alt="Sodedif Logo" />
    </div>
    <RegisterSection flipped marsSrc={require('./mars.svg')}>
      <h1>Welcome Sodedif staff!</h1>
      <p className="main-paragraph">
        You can help build a diverse, open-source dataset by creating a Common
        Voice profile and contributing your voice.
      </p>
      {hasAccount ? (
        <LinkButton rounded to={URLS.SPEAK}>
          Donate Your Voice
        </LinkButton>
      ) : (
        <LinkButton rounded href="/login">
          Create a Profile
        </LinkButton>
      )}
      <p className="profile-not-required">
        Having a profile is not required to contribute though it is helpful, see
        why below.
      </p>
    </RegisterSection>

    <section className="about-section">
      <div className="inner">
        <Localized id="home-title">
          <h1 />
        </Localized>

        <LinkButton rounded to={URLS.ABOUT}>
          <div className="hidden-md-up">Read more</div>
          <div className="hidden-sm-down">Read more on our About page</div>
        </LinkButton>
      </div>
    </section>
  </div>
);

export default connect<PropsFromState>(({ user }: StateTree) => ({
  hasAccount: Boolean(user && user.account),
}))(Landing);