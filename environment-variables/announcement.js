// Pull announcer and message from environment variables. If there are no
// values, resolve to the defaults provided.
const ANNOUNCER = process.env.ANNOUNCER || 'Docker';
const MESSAGE = process.env.MESSAGE || 'There is no message';

// Create and output the message
const announcement = `This is a message from ${ANNOUNCER}: ${MESSAGE}`;
console.log(announcement);
