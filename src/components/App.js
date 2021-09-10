import {  useEffect } from 'react'
import { withCookies } from 'react-cookie'

import { getBrowserName, getOSName } from '../utils/ClientInfo'
import './App.css'

const App = (props) => {

  useEffect(() => {
    const {cookies} = props
    const csrfToken = cookies.get('XSRF-TOKEN');

    fetch('https://localhost:8443/api/v1')
      .then(_ => {
        console.log(document.cookie)
        console.log(_.headers.get('set-cookie'))
        for (var pair of _.headers.entries()) {
          console.log(pair[0] + ': ' + pair[1]);
        }

        const requestOptions = {
          method: 'POST',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json', 'X-XSRF-TOKEN': csrfToken },
          body: JSON.stringify({ userTypeId: 1 })
        }
        fetch('https://localhost:8443/api/v1/id', requestOptions)
          .then(res => res.json())
          .then(data => console.log(data))
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err, 'Cannot connect to server. Please try again.'))

    console.log(getBrowserName());
    console.log(getOSName())
  }, [props])

  return <div><h1>CryptoVault</h1></div>
}

export default withCookies(App)
