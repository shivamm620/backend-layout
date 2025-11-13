export const globalErrorHandler = (err, req, res, next) => {
  const statuCode = err.statuCode || 500;
  res.status(statuCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};
