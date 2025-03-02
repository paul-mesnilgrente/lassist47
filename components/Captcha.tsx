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
        sitekey="ba1e404e-7b9a-470a-bb80-eaf4c0f85f8c"
        onVerify={handleVerify}
        onExpire={handleExpire}
      />
      <input type="hidden" name="hcaptchaToken" value={hcaptchaToken} />
      <input type="hidden" name="_language" value="fr" />
    </>
  );
}
