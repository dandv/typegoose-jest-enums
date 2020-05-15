import { EventType, UserEvent, UserEventModel } from './UserEvent';

(async function main() {
    console.log('Creating event...')
    const event = new UserEventModel({
        what: EventType.sessionStart,
    } as UserEvent);
    console.log(event);  // OK
})();
