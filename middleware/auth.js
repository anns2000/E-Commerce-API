
const asyncHandler = require('express-async-handler');
var jwt = require('jsonwebtoken');
const ApiError = require('../utils/api.error');


module.exports.auth=asyncHandler(async(req,res,next)=>{
    
    const token=req.header('token')
    jwt.verify(token, 'anas', async function(err, decoded) {
            if(err)
            {
                res.json(new ApiError('worng token ',404));

            }
            else
            {
                    if(decoded.role=='admin')
                    {
                            next();
                    }
                    else
                    {
                        res.json(new ApiError('you cant do that ',404));

                    }

            }

            });
      

})
