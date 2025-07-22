"use client";

import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useState } from "react";

export default function Captcha() {
  const [hcaptchaToken, setHcaptchaToken] = useState("");

  const handleVerify = (token: string) => {
    setHcaptchaToken(token);
  };

  const handleExpire = () => {
    setHcaptchaToken("");
  };

  return (
    <>
      <HCaptcha
        sitekey="bc388656-9eca-4022-8516-38609520afe2"
        onVerify={handleVerify}
        onExpire={handleExpire}
      />
      <input type="hidden" name="hcaptchaToken" value={hcaptchaToken} />
      <input type="hidden" name="_language" value="fr" />
    </>
  );
}
