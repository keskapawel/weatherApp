import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from './query';
import { BASE_TAGS, BASE_TAGS_ARRAY } from './tags';

export const api = createApi({
  baseQuery: baseQuery,
  tagTypes: BASE_TAGS_ARRAY,
  endpoints: (build) => ({
    refetchErroredQueries: build.mutation<null, void>({
      queryFn: () => ({ data: null }),
      invalidatesTags: [BASE_TAGS.ERROR],
    }),
  }),
  keepUnusedDataFor: 0.1,
  refetchOnMountOrArgChange: 180,
  refetchOnReconnect: true,
});

export const { useRefetchErroredQueriesMutation } = api;
