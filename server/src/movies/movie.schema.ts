import type { Document, Types } from 'mongoose';
import { Schema } from 'mongoose';
import type { User } from 'src/users/users.schema';

export interface IMovie extends Document {
	title: string;
	publishing_year: number;
	isActive: boolean;
	author: Types.ObjectId | User;
	poster: string;
}

export const MovieSchema = new Schema<IMovie>(
	{
		title: { type: String, required: true },
		publishing_year: { type: Number, required: true },
		poster: { type: String, required: true },
		isActive: { type: Boolean, required: false, default: false },
		author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	},
	{
		timestamps: true,
	}
);
