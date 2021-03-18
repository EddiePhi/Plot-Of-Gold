// https://github.com/ksentak/react-user-auth
// Added associations from original model.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const userAuthSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	plots: [{ type: Schema.Types.ObjectId, ref: "Plot" }],
	forum_threads: [{ type: Schema.Types.ObjectId, ref: "ForumThread" }],
	forum_comments: [{ type: Schema.Types.ObjectId, ref: "ForumComment" }],
	zip_codes: [{ type: Schema.Types.ObjectId, ref: "ZipCode" }]
});

// module.exports = User = mongoose.model("User", userSchema);
const UserAuth = mongoose.model("UserAuth", userAuthSchema);

module.exports = UserAuth;