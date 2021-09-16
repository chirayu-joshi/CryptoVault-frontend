# Frontend application for CryptoVault

### prerequisites:
- Create a certificate with name ```crytovault_certificate.p12``` and place it along with package.json directory.
- Create a private key file with name ```cryptovault_privateKey.pem``` and place it along with package.json directory.

### Some starting scripts:

- ```npm start```: To start server on localhost with certificates (for HTTPs)
- ```npm run start-http```: To start server on localhost with HTTP only. WARNING: This won't allow some request to out secure cryptovault server