import QRCode from 'qrcode.react'

import LoadingAnimation from './LoadingAnimation'

import styles from './QRCode.module.css'

const CustomQRCode = (props) => (
  <div className={styles.qrCodeContainer}>
    {(props.value === undefined || props.value === null) ?
      <LoadingAnimation className={styles.loadingAnimation} /> :
      <QRCode
        value={props.value}
        size={256}
      />}
  </div>
)

export default CustomQRCode
