import { v2 } from "@govtechsg/open-attestation";

export interface WyTemplateCertificate extends v2.OpenAttestationDocument {
  name: string;
  recipient: {
    name: string;
  };
  $template: v2.TemplateObject;
}

export const wyTemplateCertificate: WyTemplateCertificate = {
  name: "OpenAttestation Sample Certificate",
  issuers: [
    {
      name: "My name",
      documentStore: "0xBBb55Bd1D709955241CAaCb327A765e2b6D69c8b",
      identityProof: {
        location: "few-green-cat.sandbox.openattestation.com",
        type: v2.IdentityProofType.DNSTxt
      }
    }
  ],
  recipient: {
    name: "John Doe"
  },
  $template: {
    name: "WY",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000"
  }
};
