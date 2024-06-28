import React from 'react';
import PropTypes from 'prop-types'; // prop-types를 먼저 임포트
import Header from './Header.jsx'; // Header 컴포넌트의 경로를 확인하고 수정

const Page = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <article>
    <header>
      <div className="wrapper">
        <Header
          user={user}
          onLogin={onLogin}
          onLogout={onLogout}
          onCreateAccount={onCreateAccount}
        />
      </div>
    </header>
    <section>
      <h2>Pages in Storybook</h2>
      <p>
        We recommend building UIs with a
        <a
          href="https://componentdriven.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>component-driven</strong>
        </a>
        process starting with atomic components and ending with pages.
      </p>
      <p>
        Render pages with mock data. This makes it easy to build and review the
        state of your UI without needing to navigate through your app. Here are
        some handy patterns for managing page data in Storybook:
      </p>
      <ul>
        <li>
          Use a higher-level connected component. Use a Storybook decorator to
          mock API calls or any other global setup.
        </li>
        <li>Pass mocked data as props.</li>
      </ul>
      <p>
        Get a sense of how your pages look in different states. You can even
        check the UI for missing data, loading states, and errors.
      </p>
      <p>
        View the <a href="https://storybook.js.org/docs">Storybook docs</a> for
        more info.
      </p>
    </section>
  </article>
);

Page.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }),
  onLogin: PropTypes.func,
  onLogout: PropTypes.func,
  onCreateAccount: PropTypes.func,
};

Page.defaultProps = {
  user: null,
  onLogin: () => {
    console.log('onLogin');
  },
  onLogout: () => {
    console.log('onLogout');
  },
  onCreateAccount: () => {
    console.log('onCreateAccount');
  },
};

export default Page;
