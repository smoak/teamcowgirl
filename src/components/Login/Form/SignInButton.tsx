import React, { FC } from 'react';
import { Button } from '@material-ui/core';

interface SignInButtonProps {
  readonly className: string;
  readonly isDisabled: boolean;
  onClick(): void;
}

const SignInButton: FC<SignInButtonProps> = ({ className, isDisabled, onClick }) => {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={className}
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
      disabled={isDisabled}
    >
      Sign in
    </Button>
  );
};

export default SignInButton;
