import { Container, Text } from "@react-email/components";
import React from "react";

import { EmailButton } from "../general/EmailButton";
import { EmailFooter } from "../general/EmailFooter";

interface InviteEmailProps {
  inviteeName: string;
  inviterName: string;
  verifyLink: string;
}

export const InviteEmail = ({ inviteeName, inviterName, verifyLink }: InviteEmailProps) => {
  return (
    <Container>
      <Text>Hola {inviteeName},</Text>
      <Text>
        Tu Compañero {inviterName} te invitó a unirte a ellos. Para aceptar la invitación, por favor haga
        click en el enlace a continuación:
      </Text>
      <EmailButton label="Join organization" href={verifyLink} />
      <EmailFooter />
    </Container>
  );
};
