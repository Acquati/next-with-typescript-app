import Document, { Html, Head, Main, NextScript } from 'next/document'

const globalStyles = `
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
          <style type='text/css'>{globalStyles}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument