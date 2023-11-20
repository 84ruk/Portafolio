const { response } = require("express");
const path = require('path');

const download = async (req, res = response) => {
    const filePath = path.join(__dirname, '../public/BJRV_CV.pdf'); 
  res.download(filePath, 'BJRV_CV.pdf');
  };

  
module.exports = {
    download
}