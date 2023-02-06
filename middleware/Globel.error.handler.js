module.exports.GlobelError=(err, req, res, next) => {
  let message="";
  if(!req.gerror)
  {
    message=err.message;
    err.statusCode=err.statusCode || 500 ;
     err.status=err.status||'error'
     res.status(err.statusCode).json({
      status:err.status,
      name:err.name,
      message:message,
      path:err.path,
      stack:err.stack
      

    });
  }
  else
  {
    message=req.gerror.message;
    res.status(req.gerror.statusCode).json({
      message:message,
      code:req.gerror.statusCode,

      
    });
  }
  }