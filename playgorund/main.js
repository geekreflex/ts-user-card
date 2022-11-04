class Axios {
  constructor() {}

  async get(url, config) {
    const res = await fetch(url, {
      method: 'GET',
      ...config,
    });

    return res.json();
  }

  async post(url = '', body = {}, config) {
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(body),
      ...config,
    });

    return await res.json();
  }

  async delete(url = '', config) {
    const res = await fetch(url, {
      method: 'DELETE',
      ...config,
    });

    return await res.json();
  }
}

const axios = new Axios();
const url = `https://jsonplaceholder.typicode.com`;

const fetchTodos = async () => {
  const data = await axios.get(`${url}/posts`);
  console.log(data);
};

fetchTodos();

const createTodo = async () => {
  const payload = {
    body: 'body content',
    id: 900,
    title: 'Some nice title',
    userId: 91,
  };
  const data = await axios.post(`${url}/posts`, payload);
  console.log(data);
};

createTodo();
