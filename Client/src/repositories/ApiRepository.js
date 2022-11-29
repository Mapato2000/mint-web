import Repository from "./Repository";

export default {
  // Example GET
  exampleGet () {
    return Repository.new().get("/get");
  },
  // Example POST
  examplePost () {
    return Repository.new().post("/post", {arg1: 1});
  },
};
