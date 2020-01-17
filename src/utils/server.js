
export const api = ({ url, method, param }) => {
  return new Promise((reslove) => {
    if (method === 'GET') {
      return fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'content-type': 'application/json',
        },
        credentials: 'include',  //这个必填项
      })
        .then(response => {
          return response.json();
        })
        .then(json => {
          reslove(json);
        });
    } else {
      return fetch(url, {
        body: JSON.stringify({ ...param }),
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'content-type': 'application/json',
        },
        credentials: 'include',  //这个必填项
      })
        .then(response => {
          return response.json();
        })
        .then(json => {
          reslove(json);
        });
    }
  })
};