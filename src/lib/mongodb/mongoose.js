import mongoose from "mongoose";

let initialized = false;

export async function connect() {
	mongoose.set("strictQuery", false);

	if (initialized) {
		console.log("Already connected to MongoDB");
		return;
	}

	const MONGO_URI = process.env.MONGO_URI;

	if (!MONGO_URI) {
		console.error("Error: Please add MONGO_URI to .env or .env.local");
		throw new Error("Error: Please add MONGO_URI to .env or .env.local");
	}

	try {
		await mongoose.connect(MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true,
		});

		initialized = true;

		console.log("Connected to MongoDB");
	} catch (error) {
		console.error("Error: Could not connect to MongoDB:", error);
		throw new Error("Error: Could not connect to MongoDB");
	}
}
