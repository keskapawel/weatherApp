import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { stringify } from 'query-string';

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
  paramsSerializer: (params) => {
    // sort param array values
    Object.keys(params)?.forEach((key) => {
      if (Array.isArray(params[key])) params[key] = params[key].sort();
    });

    return stringify(params, {
      arrayFormat: 'bracket',
      skipNull: true,
      skipEmptyString: true,
    });
  },
  prepareHeaders: (headers, api) => {
    headers.set('Accept', 'application/json');

    return headers;
  },
});
