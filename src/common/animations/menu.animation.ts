import { trigger, animate, style, transition, sequence } from '@angular/animations';

export const menuTransition = trigger('show', [
  transition('void => *', [
    sequence([
      style({
        opacity: 0,
        transform: 'translateX(-100%)',
      }),
      animate('500ms 1000ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
    ])
  ])
]);
