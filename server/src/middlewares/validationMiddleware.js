function validateData(schema) {
  return (req, res, next) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error.errors !== undefined) {
        console.log(error.errors);

        const errorMessages = error.errors.map((issue) => {
          return { message: `${issue.path.join(".")} is ${issue.message}` };
        });
        return res
          .status(400)
          .json({ error: "Invalid data", details: errorMessages });
      }
      return res.status(500).json({ message: error.message });
    }
  };
}

export default validateData;
