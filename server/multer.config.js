// SETTINGS FOR PHOTO UPLOAD
const multer = require('multer')
// STORAGE LOCATION AND FILE NAME

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null,   `${new Date().toISOString()}${file.originalname}` );
  }
});

// FILTER BY FILE TYPE
const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// FILTER BY FILE SIZE

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter
});

exports.storage = storage;
exports.fileFilter = fileFilter;
exports.upload = upload;
