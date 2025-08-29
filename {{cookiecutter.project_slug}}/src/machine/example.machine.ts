// Example XState v5 machine
import { createMachine } from 'xstate';

export const exampleMachine = createMachine({
  id: 'example',
  initial: 'idle',
  states: {
    idle: {
      on: { START: 'running' },
    },
    running: {
      on: { STOP: 'idle' },
    },
  },
});
