const zod = require("zod")

const postRequestSchema = {
  title : zod.string(),
  description : zod.string()
};

const putRequestSchema = {
  id : zod.string()
};