import User from '../models/user.model.js';
import createError from '../utils/createError.js';

export const deleteUser = async (req, res, next) => {
   try {
    const user = await User.findById(req.params.id);

    if(req.userId !== user._id.toString()) return next(createError(403, "You can delete only your Account!"));


    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("User has been deleted successfully!")
   } catch (error) {
    next(createError(403, "Failed to Delete!"));
   }
}

export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if(!user) return next(createError(404, "User not Found!"))
        res.status(200).send(user);
      } catch (error) {
       next(error)
      }
}


