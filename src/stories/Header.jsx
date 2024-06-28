import React from 'react';
import PropTypes from 'prop-types'; // prop-types를 먼저 임포트
import Button from './Button.jsx'; // Button 컴포넌트의 경로를 확인하고 수정

const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <div className="wrapper">
      <div>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path
              d="M31.999 16C31.999 7.163 24.836 0 15.999 0S0 7.163 0 16c0 7.732 5.373 14.115 12.6 15.725.924.17 1.26-.4 1.26-.883v-3.129c-5.137 1.111-6.213-2.482-6.213-2.482-.793-2.016-1.938-2.553-1.938-2.553-1.584-1.083.12-1.06.12-1.06 1.75.122 2.672 1.804 2.672 1.804 1.556 2.664 4.08 1.893 5.073 1.448.157-1.126.609-1.893 1.108-2.33-4.096-.471-8.404-2.051-8.404-9.128 0-2.015.721-3.665 1.903-4.955-.192-.471-.825-2.366.181-4.932 0 0 1.545-.496 5.06 1.895 1.465-.408 3.043-.612 4.61-.62 1.567.008 3.145.212 4.611.62 3.513-2.39 5.058-1.895 5.058-1.895 1.009 2.566.375 4.461.183 4.932 1.184 1.29 1.902 2.94 1.902 4.955 0 7.093-4.312 8.652-8.422 9.115.628.542 1.187 1.616 1.187 3.255v4.83c0 .486.333 1.057 1.268.877C26.627 30.113 31.999 23.731 31.999 16z"
              fill="#FFF"
            />
          </g>
        </svg>
        <h1>Acme</h1>
      </div>
      <div>
        {user ? (
          <Button type="button" onClick={onLogout}>
            Log out
          </Button>
        ) : (
          <>
            <Button type="button" onClick={onLogin}>
              Log in
            </Button>
            <Button type="button" onClick={onCreateAccount}>
              Sign up
            </Button>
          </>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }),
  onLogin: PropTypes.func,
  onLogout: PropTypes.func,
  onCreateAccount: PropTypes.func,
};

Header.defaultProps = {
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

export default Header;
