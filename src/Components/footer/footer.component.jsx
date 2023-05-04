import {
  FooterContainer,
  CtaButton,
  Signature,
  FooterLinks,
} from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <CtaButton>About</CtaButton>
        <CtaButton>FAQs</CtaButton>
        <CtaButton>Contact Us</CtaButton>
        <CtaButton>Store locator</CtaButton>
      </FooterLinks>
      <Signature>Designed By The Amigos</Signature>
    </FooterContainer>
  );
};

export default Footer;
