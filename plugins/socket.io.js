import io from "socket.io-client";

const socket = io("https://cryptobitlimited.com/"); // Replace with your server URL

export default ({ app }, inject) => {
  inject("socket", socket);
};
