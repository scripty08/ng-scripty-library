import { trigger, state, style } from '@angular/animations';

export const labelFocusBlurAnimation = () => {
  return trigger('labelFocusBlur', [
    state('focus-large', style({
      position: 'absolute',
      top: '-10px',
      fontSize: '13px'
    })),
    state('focus-medium', style({
      display: 'none'
    })),
    state('focus-small', style({
      display: 'none'
    }))
  ])
};

export const inputFocusBlurAnimation = () => {
  return trigger('inputFocusBlur', [
    state('focus-large', style({
      paddingTop: '1.8rem',
      paddingBottom: '.7rem',
      paddingLeft: '1.1rem',
      height: '0.5rem',
      fontSize: '1rem'
    }))
  ])
};
