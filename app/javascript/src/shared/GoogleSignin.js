import React from 'react';

export default function GoogleSignin() {
  return (
    <>
      <div
        id="g_id_onload"
        data-client_id={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        data-context="use"
        data-ux_mode="popup"
        data-login_uri={process.env.REACT_APP_GOOGLE_CALLBACK_URI}
        data-nonce=""
        data-itp_support="true"
      />
      <div
        className="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="outline"
        data-text="continue_with"
        data-size="large"
        data-logo_alignment="left"
      />
    </>
  );
}
