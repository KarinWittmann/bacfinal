import axios from 'axios';

const host = process.env.DATABASE || "https://targetpractise-3737.restdb.io/rest";
const apikey = process.env.DATABASE_API_KEY || "5dc456d464e7774913b6ea11";

const instance = axios.create({
        baseURL: host,
        headers: {
          "content-type": "application/json",
          "x-apikey": apikey,
          "cache-control": "no-cache"
        }
    });

instance.interceptors.request.use(request => {
  console.log(request);
  return request;
})

export default instance;
