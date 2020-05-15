import { EventType, UserEvent, UserEventModel } from './UserEvent';

// TODO: fail before executing: Invalid type used for map!, got: "[object Object]" (UserEvent.what)

(async function main() {
    console.log('Creating event...')
    const event = new UserEventModel({
        what: EventType.sessionStart,
    } as UserEvent);
})();
