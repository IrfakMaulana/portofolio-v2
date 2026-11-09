import CertificateModal, { CertificateModalProps } from './certificate-modal'

export type AseanCertsModalProps = CertificateModalProps

export default function AseanCertsModal(props: CertificateModalProps) {
  return <CertificateModal initialGroupId="asean" {...props} />
}
