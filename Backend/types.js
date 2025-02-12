const zod = require("zod")

const postRequestSchema = zod.object({
  title : zod.string(),
  description : zod.string()
});

const putRequestSchema = zod.object({
  id : zod.string()
});

module.exports = {
  createTodo : postRequestSchema,
  updateTodo : putRequestSchema
};