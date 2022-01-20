<<<<<<< HEAD:src/reportWebVitals.js
const reportWebVitals = (onPerfEntry) => {
=======
import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
>>>>>>> parent of e070ce8 (Merge pull request #6 from spigelli/Remove-typescript_5):src/reportWebVitals.ts
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({
      getCLS, getFID, getFCP, getLCP, getTTFB,
    }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
