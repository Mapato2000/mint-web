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
  getAllTitles () {
    return Repository.new().get("/getAllTitles");
  },
  login (email, password) {
    return Repository.new().post("/login", {email: email, password: password});
  },
  createTitle(dni, file, titleCode, titleType, email, titleTitle, titleDescription, titleCriteria) {
    return Repository.new().postFiles("/createTitle", [file], {dni, titleCode, titleType, email, titleTitle, titleDescription, titleCriteria});
  },
  modifyTitle(tokenId, file, oldDni , dni, oldHash,  oldTitleCode, titleCode, oldTitleType, titleType, email, titleTitle, titleDescription, titleCriteria, badgeId) {
    return Repository.new().postFiles("/modifyTitle", [file], {tokenId, oldDni , dni, oldHash,  oldTitleCode, titleCode, oldTitleType, titleType, email, titleTitle, titleDescription, titleCriteria, badgeId});
  },
  deleteTitle(tokenId, dni,titleCode, titleType, badgeId) {
    return Repository.new().postFiles("/deleteTitle", [], {tokenId, dni,titleCode, titleType, badgeId});
  },
  saveUser (nif, name, surname, phone, address) {
    return Repository.new().post("/save-user", {nif: nif, name: name, surname: surname, phone: phone, address: address});
  },
  register(email,password,verifypassword,role){
    return Repository.new().post("/register",{email:email, password:password,verifypassword:verifypassword,role:role});
  },
  fetch(){
    return Repository.new().get("/fetch");
  },
  getTitleAddresses(dni = null, titleType = null, ipfsFile = null, titleCode = null, ) {
    return Repository.new().get("/getTitleAddresses", {dni, titleType, ipfsFile, titleCode});
  },
  getTitleAddressesFile(ipfsFile = null) {
    return Repository.new().postFiles("/getTitleAddresses", [ipfsFile]);
  },
  getTitleJsonById(tokenId ) {
    return Repository.new().get("/getTitleJsonById", {tokenId});
  },
  getTitlesByAddress(address) {
    return Repository.new().get("/getTitlesByAddress", {address});
  },
  modifyAddress(address,tokenId){
    return Repository.new().post("/transferTitle", {address,tokenId});
  },
  getTitleAddressEncrypted(tokenId){
    return Repository.new().get("/getTitleAddressEncrypted", {tokenId});
  },
  getMessage(address, messageId) {
    return Repository.new().get("/getMessage", {address, messageId});
  },
  getMessages(address) {
    return Repository.new().get("/getMessages", {address});
  },
  sendAudio(audio) {
    return Repository.new().postFiles("/sendAudioToIpfs", [audio], {});
  },
  sendMessage(address, message) {
    return Repository.new().post("/sendMessage", {address, message});
  }
};
