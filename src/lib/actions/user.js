import userModel from "../models/user.model";
import { connect } from "../mongodb/mongoose";

export async function createOrUpdateUser(
	id,
	first_name,
	last_name,
	email_address,
	username,
	image_url
) {
	try {
		await connect();
		const user = new userModel.findOne(
			{ clerkId: id },
			{
				$set: {
					firstName: first_name,
					lastName: last_name,
					email: email_address[0].email_address,
					userName: username,
					profilePicture: image_url,
				},
			},
			{ upsert: true, new: true } // upsert: true creates a new document if it doesn't exist
		);

		console.log("User created successfully:", user);
		return user;
	} catch (error) {
		console.error("Error: Could not create user:", error);
	}
}

export async function deleteUser(id){
    try {
        await connect();
        const user = await userModel.findOneAndDelete({ clerkId: id });
        console.log("User deleted successfully:", user);
    } catch (error) {
        console.error("Error: Could not delete user:", error);
    }
}
