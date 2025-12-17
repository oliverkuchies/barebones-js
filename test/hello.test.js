/**
 * Unit tests for the hello module.
 */
import { describe, it, expect } from 'vitest';
import { greet, farewell, main } from '../src/hello.js';

describe('greet', () => {
  it('should return "Hello, World!" when called with no arguments', () => {
    expect(greet()).toBe('Hello, World!');
  });

  it('should return a personalized greeting when called with a name', () => {
    expect(greet('Alice')).toBe('Hello, Alice!');
  });

  it('should handle empty string', () => {
    expect(greet('')).toBe('Hello, !');
  });

  it('should throw TypeError when called with non-string argument', () => {
    expect(() => greet(123)).toThrow(TypeError);
    expect(() => greet(null)).toThrow(TypeError);
    expect(() => greet({})).toThrow(TypeError);
  });
});

describe('farewell', () => {
  it('should return "Goodbye, World!" when called with no arguments', () => {
    expect(farewell()).toBe('Goodbye, World!');
  });

  it('should return a personalized farewell when called with a name', () => {
    expect(farewell('Alice')).toBe('Goodbye, Alice!');
  });

  it('should handle empty string', () => {
    expect(farewell('')).toBe('Goodbye, !');
  });

  it('should throw TypeError when called with non-string argument', () => {
    expect(() => farewell(123)).toThrow(TypeError);
    expect(() => farewell(null)).toThrow(TypeError);
    expect(() => farewell({})).toThrow(TypeError);
  });
});

describe('main', () => {
  it('should be a function', () => {
    expect(typeof main).toBe('function');
  });

  it('should not throw an error when called', () => {
    expect(() => main()).not.toThrow();
  });
});
