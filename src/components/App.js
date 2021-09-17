import { useEffect, useState } from 'react'
import { withCookies } from 'react-cookie'

import QRCode from './QRCode'

import './App.css'
import { serverUrl } from '../configs'
import { getBrowserName, getOSName } from '../utils/ClientInfo'

const App = (props) => {

  const [id, setId] = useState()
  const [isQRCodeError, setIsQRCodeError] = useState(false)

  const getUserIdPromise = (csrfToken) => {
    const requestOptions = {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json', 'X-XSRF-TOKEN': csrfToken },
      body: JSON.stringify({
        browserName: getBrowserName(),
        osName: getOSName(),
      })
    }
    return new Promise(async (resolve, reject) => {
      try {
        const res = await fetch(serverUrl + '/v1/id', requestOptions)
        const userId = await res.json()
        resolve(userId.id)
      } catch (err) {
        reject(err, 'Cannot get user id')
      }
    })
  }

  useEffect(() => {
    const csrfToken = props.cookies.get('XSRF-TOKEN')
    if (!csrfToken) {
      fetch(serverUrl + '/v1', { credentials: 'include' })
        .then(_ => {
          getUserIdPromise(props.cookies.get('XSRF-TOKEN'))
            .then(userId => {
              localStorage.setItem('id', userId)
              setId(userId)
            })
            .catch(err => {
              console.error(err)
              setIsQRCodeError(true)
            })
        })
        .catch(err => {
          console.error(err, 'Cannot connect to server. Please try again.')
          setIsQRCodeError(true)
        })
    } else {
      getUserIdPromise(csrfToken)
        .then(userId => {
          localStorage.setItem('id', userId)
          setId(userId)
        })
        .catch(err => {
          console.error(err)
          setIsQRCodeError(true)
        })
    }
  }, [props.cookies])

  return (
    <div>
      <QRCode value={id} isError={isQRCodeError} />
    </div>
  )
}

export default withCookies(App)
