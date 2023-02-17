import Document, { Html, Main, NextScript } from 'next/document';
import CustomHead from '@/components/Head/Head';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <CustomHead />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
