import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		clerkId: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		userName: {
			type: String,
			required: true,
			unique,
		},
		profilePicture: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

const userModel = mongoose.model("User", userSchema) || mongoose.models.User;
export default userModel;
