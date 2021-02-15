import React from "react";
import "../../App.css";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";

function SignUp() {
  return (
    <div>
      <AmplifySignOut />
    </div>
  );
}
export default withAuthenticator(SignUp);
