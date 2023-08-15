import io from "socket.io-client";

const socket = io("https://bitlimit-production.up.railway.app/"); // Replace with your server URL

export default ({ app }, inject) => {
  inject("socket", socket);
};
