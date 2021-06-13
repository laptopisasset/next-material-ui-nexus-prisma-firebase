import React, { FC } from "react";

import { SigninorSignUpLayout } from "src/layouts";

import { SignupForm } from "src/components/ui/forms";

const SignUpPage: FC = () => {
  return (
    <SigninorSignUpLayout>
      <SignupForm />
    </SigninorSignUpLayout>
  );
};

export default SignUpPage;
