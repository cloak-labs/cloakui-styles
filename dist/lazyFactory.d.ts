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
export declare function lazyFactory<T extends (...args: any[]) => any>(factoryFn: () => T): T;
