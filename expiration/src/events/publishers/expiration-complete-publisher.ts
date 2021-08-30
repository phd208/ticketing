import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@firtickets/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}