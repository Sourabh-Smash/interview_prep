const { EventEmitter } = require("events");
const emitter = new EventEmitter();

emitter.on("event-name", (eventArgs) => {
  console.log(`Event-name was emitted with arguments: ${eventArgs}`);
});

emitter.emit("event-name", "Some Payload");
