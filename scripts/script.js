import http from 'k6/http';

export const options = {
  scenarios: {
    shared: {
      executor: 'shared-iterations',
      vus: 100,
      iterations: 200,
      maxDuration: '1s',
    },
  },
};

export default function () {
  const payload = JSON.stringify({
    name: 'sumit',
    surname: 'singh',
  });
  const headers = { 'Content-Type': 'application/json' };
  const res =http.post('https://httpbin.test.k6.io/post', payload, { headers });
  // console.log(res.status)
}
