import { useEffect } from "react";
import ReactGA from "react-ga4";
import { UaEventOptions } from "react-ga4/types/ga4";

/**
 * This component fires a ReactGA event once when it's loaded.
 * Originally used to track impressions of 'thank you' pages.
 */
export const RegisterGAOnce = (props: UaEventOptions) => {
  useEffect(() => {
    ReactGA.event(props);
  }, []);
  return <></>;
};
