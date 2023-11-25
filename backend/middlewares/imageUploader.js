const multer = require("multer");

// Create a Multer storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Set the destination folder where the uploaded files will be stored
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    // Generate a unique filename based on the current date
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const originalExtension = file.originalname.split(".").pop();
    const filename = uniqueSuffix + "." + originalExtension;

    cb(null, filename);
  },
});

// Define a filter function to accept or reject files
const fileFilter = function (req, file, cb) {
  // Check if the file is of an allowed MIME type or has an allowed file extension
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    // Accept the file
    cb(null, true);
  } else {
    // Reject the file
    cb(new Error("Only JPEG and PNG files are allowed."), false);
  }
};

// Create a Multer instance with the storage engine and filter
const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;
