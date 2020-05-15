import { EventType, UserEvent, UserEventModel } from './UserEvent';

test('core', () => {
    const event = new UserEventModel({
        what: EventType.sessionStart,
    } as UserEvent);
    expect(event).toBeInstanceOf(UserEventModel);
});
