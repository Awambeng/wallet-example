import { render } from '@testing-library/react';
import Index from '../pages/index';
jest.mock('next/router', () => require('next-router-mock'));

// Mock window.matchMedia
describe('Index', () => {
  let matchMediaMock: jest.Mock;

  beforeEach(() => {
    matchMediaMock = jest.fn();
    window.matchMedia = matchMediaMock;
  });

  afterEach(() => {
    matchMediaMock.mockClear();
  });

  it('should render successfully', () => {
    // Mock the return value of window.matchMedia
    matchMediaMock.mockReturnValue({
      matches: true,
      addListener: jest.fn(),
    });

    const { baseElement } = render(<Index />);
    expect(baseElement).toBeTruthy();
  });
});
