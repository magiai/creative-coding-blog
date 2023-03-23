import React from 'react'
import { render, waitFor, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../../app/page'
import { createClient } from 'contentful'

test('async test', async () => {
  process.env.CONTENTFUL_SPACE_ID = 'test-space-id';
  process.env.CONTENTFUL_ACCESS_KEY = 'acces-key';
  await jest.mock('contentful')
  console.log('process.env')
  console.log(process.env)
  const asyncMock = jest.fn().mockResolvedValue({
    items: [{
      sys: { id: '1' },
      fields: {
        slug: 'test-slug',
        title: 'Test Title',
        shortDescription: 'Test Short Description',
      },
    }],
  });

  await act(() => {
    {/* @ts-expect-error Server Component */}
      render(<Home />)
    });

  // await asyncMock(); // 43
});


// test('renders blog post list', async () => {
//   const createClientMock = createClient as jest.MockedFunction<typeof createClient>

//   createClientMock.mockResolvedValueOnce({
//     getEntries: jest.fn().mockResolvedValueOnce({
//       items: [{
//         sys: { id: '1' },
//         fields: {
//           slug: 'test-slug',
//           title: 'Test Title',
//           shortDescription: 'Test Short Description',
//         },
//       }],
//     }),
//   });

//   {/* @ts-expect-error Server Component */}
//   const { getByText } = render(<Home />);

//   await waitFor(() => {
//     expect(getByText('Test Title')).toBeInTheDocument();
//     expect(getByText('Test Short Description')).toBeInTheDocument();
//   });
// });

// test('renders blog post list', async () => {
//   process.env.CONTENTFUL_SPACE_ID = 'test-space-id';
//   process.env.CONTENTFUL_ACCESS_KEY = 'acces-key';
//   await jest.mock('../../lib/contentful-client', () => ({
//       ...jest.requireActual('../../lib/contentful-client'),
//       getEntries: jest.fn(() => Promise.resolve({
//           items: [{
//               sys: { id: '1' },
//               fields: {
//                   slug: 'test-slug',
//                   title: 'Test Title',
//                   shortDescription: 'Test Short Description',
//               },
//           }],
//       })),
//   }));


//     {/* @ts-expect-error Server Component */}
//     const { getByText } = render(<Home />);
    
//     // Wait for the blog post list to be rendered
//     // await waitFor(() => {
//     //     expect(getByText('Test Title')).toBeInTheDocument();
//     //     expect(getByText('Test Short Description')).toBeInTheDocument();
//     // });
// });

