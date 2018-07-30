import { trigger, animate, style, transition, query, stagger, sequence } from '@angular/animations';

export const commentsListTransition = trigger('commentsList', [
  transition('* <=> *', [
    query(
      ':enter',
      [
        style({
          opacity: 0,
          transform: 'translateX(-15px)',
          'max-height': '0px',
          height: 'auto',
          'max-width': '0px',
          width: 'auto',
          overflow: 'hidden'
        }),
        stagger(
          '200ms',
          sequence([
            animate('200ms ease-out', style({ 'max-height': '300px', 'max-width': '800px' })),
            animate('200ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
          ])
        )
      ],
      { optional: true }
    ),
    query(':leave', [
      stagger(
        '200ms',
        sequence([
          animate('200ms ease-out', style({ opacity: 0, transform: 'translateX(15px)' })),
          style({ 'max-height': '300px', height: 'auto', 'max-width': '800px', width: 'auto', overflow: 'hidden' }),
          animate('200ms ease-out', style({ 'max-height': 0, 'max-width': 0 }))
        ])
      )
    ], {
        optional: true
      })
  ])
]);

