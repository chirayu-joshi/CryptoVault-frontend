import QRCode from 'qrcode.react'

import LoadingAnimation from './LoadingAnimation'

import styles from './QRCode.module.css'

const CustomQRCode = (props) => {
  let qrCode;
  if (props.isError) {
    qrCode = <p className={styles.error}>Couldn't fetch QR code. Please try again.</p>
  } else if (props.value === undefined || props.value === null) {
    qrCode = <LoadingAnimation className={styles.loadingAnimation} />
  } else {
    qrCode = <QRCode value={props.value} size={256} includeMargin={true} />
  }

  return (
    <div className={styles.qrCodeContainer}>
      {qrCode}
    </div>
  )
}

export default CustomQRCode
