import { trigger, animate, style, transition, query, stagger } from '@angular/animations';

export const listTransition = trigger('list', [
  transition('* <=> *', [
    query(
      ':enter',
      [
        style({ opacity: 0, transform: 'translateX(-100px)' }),
        stagger(
          '200ms',
          animate(
            '1000ms ease-out',
            style({ opacity: 1, transform: 'translateX(0px)' })
          )
        )
      ],
      { optional: true }
    ),
    query(':leave', animate('50ms', style({ opacity: 0 })), {
      optional: true
    })
  ])
]);

