const { app } = require('@azure/functions');
const { createGreeting } = require("@gitesh/eventify-helpers"); // Added this line at the top

app.http('GetEvents', {
    methods: ['GET'], // It's good practice to specify only the method you need
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        // Use the function from the shared package
        const message = createGreeting("Gitesh");

        // Return the message from the shared package
        return { body: message };
    }
});