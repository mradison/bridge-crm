import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

// Precache static assets
precacheAndRoute(self.__WB_MANIFEST);

// Cache GraphQL requests
const GRAPHQL_CACHE_NAME = 'graphql-cache-v1';

registerRoute(
  ({ url }) => url.pathname.startsWith('/graphql'),
  async ({ event }) => {
    const cache = await caches.open(GRAPHQL_CACHE_NAME);
    const cachedResponse = await cache.match(event.request);
    if (cachedResponse) {
      // If a cached response exists, serve it
      return cachedResponse;
    } else {
      // If not cached, fetch from network
      try {
        const response = await fetch(event.request);
        // Clone the response since it can only be consumed once
        const clonedResponse = response.clone();
        // Store the response in the cache
        await cache.put(event.request, clonedResponse);
        // Return the network response
        return response;
      } catch (error) {
        // Handle fetch errors
        console.error('Error fetching GraphQL data:', error);
        throw error;
      }
    }
  }
);