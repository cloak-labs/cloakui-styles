/**
 * lazyFactory creates a lazy-initialized factory function. It ensures that the
 * factory function is only created once and then caches it for future invocations.
 * This is particularly useful for factory functions that rely on some user-config to
 * be set before it is intiliazed; often that user-config is specified in _app.tsx, but
 * that will run after module resolution, meaning your factory function would initialize
 * before the user-config is set, resulting in incorrect behavior.
 *
 * @param {Function} factoryFn - A function that returns a factory function when called.
 * @returns {Function} A new factory function that lazily initializes and caches the original factory function.
 */
export function lazyFactory<T extends (...args: any[]) => any>(
  factoryFn: () => T
): T {
  let factoryInstance: T | null = null;
  let initialized = false;

  // Return a function with the same signature as the factory function
  return function (...args: Parameters<T>): ReturnType<T> {
    if (!initialized) {
      factoryInstance = factoryFn();
      initialized = true;
    }
    // Since factoryInstance is guaranteed to be initialized here, we can use the non-null assertion
    return factoryInstance!(...args);
  } as T; // Cast the function to T to ensure the returned type matches the factory function's type
}
