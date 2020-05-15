import { getModelForClass, mongoose, prop, Ref } from '@typegoose/typegoose';

// Storing the enum as strings would make them visible in the collection, but wastes space
export enum EventType {
    sessionStart,  // = 'session start',
    logout,  // = 'logout',
}

export class UserEvent {
    @prop({ required: true, enum: EventType })
    what: EventType;
}

/** Create the Mongoose model from the {@link UserEvent} class */
export const UserEventModel = getModelForClass(UserEvent);
